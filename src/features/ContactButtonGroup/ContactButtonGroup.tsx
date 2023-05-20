import React from "react";
import s from './ContactButtonGroup.module.scss'
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {NavLink} from "react-router-dom";


export const ContactButtonGroup = () => {
    return (
        <div className={s.iconsContainer}>

            <NavLink to={'/contacts'}>
                <AiOutlineMail className={s.icon}/>
            </NavLink>

            <a href='https://github.com/EkaterinaShumskaya' target='_blank' rel='noreferrer'>
                <AiFillGithub className={s.icon}/>
            </a>

            <a href='https://t.me/katya_vodich' target='_blank' rel='noreferrer'>
                <FaTelegramPlane className={s.icon}/>
            </a>

        </div>
    )
}