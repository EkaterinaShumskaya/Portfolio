import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>My skills </h2>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

