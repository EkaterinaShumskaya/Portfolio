import {useState} from "react";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';
import {validationSchema} from "../../common/utils/formValidators";
import axios from "axios";


export interface Values {
    name: string;
    email: string;
    message: string;
}


export const useContactForm = () => {
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [snackbarShow, setSnackbarShow] = useState<boolean>(false)
    const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success')
    const [onDisabled, setOnDisabled] = useState<boolean>(false)

    const formik = useFormik<Values>({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            setOnDisabled(true)
            axios.post('https://back-portfolio-six.vercel.app/sendMessage', {
                name: values.name,
                email: values.email,
                message: values.message
            },
                {headers: {
                    'Content-Type': 'application/json'
                }})
                .then((res) => {
                    setSnackbarMessage('Your message has been sent successfully')
                    setSnackbarType('success')
                    actions.resetForm()
                })
                .catch((e) => {
                    setSnackbarMessage('Something went wrong. Your message could not be sent')
                    setSnackbarType('error')
                })
                .finally(() => {
                    setSnackbarShow(true)
                    setOnDisabled(false)
                })
        },
    });
    return {formik, onDisabled, snackbarShow, snackbarType, snackbarMessage}
}

