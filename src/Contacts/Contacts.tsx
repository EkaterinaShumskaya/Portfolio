import React from 'react';
import s from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <div className={s.contacts}>
                    <h3 className={s.title}>Contacts</h3>
                    <form action="/" method="post" className={s.form}>
                        <input/>
                        <input/>
                        <textarea className={s.textarea} placeholder="Send text">
                        </textarea>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

