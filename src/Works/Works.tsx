import React from 'react';
import s from './Works.module.css'
import {Work} from "./Work/Work";


export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className={s.worksContainer}>
                <h3 className={s.title}> My works</h3>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                </div>

            </div>
        </div>
    );
};

