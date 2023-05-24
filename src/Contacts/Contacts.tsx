import React, {FC} from 'react';
import s from "./Contacts.module.scss";
import {Title} from "../common/components/title/Title";
import {ContactForm} from "./ContactForm/ContactForm";
import {Particle} from "../features/Main/Particle/Particle";

export const Contacts: FC = () => {
    return (

        <section className={s.contactsBlock} id='contactPage'>
            <div className={s.contactsContainer}>
                <Title title='Contacts'/>
                <div className={s.contact}>
                    <h3>I am looking for a job. Connect with me via
                        phone: +375297978359 or email: ekaterina.vodich@gmail.com</h3>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
}

