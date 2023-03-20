import React from 'react';
import s from './Main.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Katya Shumskaya</h1>
                <p>
                    I am a front-end developer</p>
            </div>
            <div className={s.photo}></div>
        </div>
        </div>
    );
};
