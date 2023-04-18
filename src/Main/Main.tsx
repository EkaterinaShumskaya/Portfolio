import React from 'react';
import s from './Main.module.scss'
import mainphoto from '../assets/image/My photo.jpeg'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
            <div className={s.text}>
                <span>HELLO, MY NAME IS</span>
                <h1>Katya Shumskaya</h1>
                <p>I am a front-end developer</p>
            </div>
                <img src={mainphoto} className={s.photo}/>
        </div>
        </div>
    );
};