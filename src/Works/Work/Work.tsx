import React from 'react';
import s from './Work.module.css'

export const Work = () => {
    return (
        <div className={s.work}>
            <div className={s.imageBlock}>
                <img/>
                <button className={s.button}>See</button>
            </div>
            <h4> Name project</h4>
            <span className={s.description}>
                project description
            </span>
        </div>

    );
};

