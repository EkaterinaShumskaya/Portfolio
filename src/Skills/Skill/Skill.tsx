import React, {FC} from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    logo: JSX.Element
    title: string
    description: string
}
export const Skill: FC<SkillPropsType> = ({logo, title, description}) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.service}>
                <div className={s.icon}>
                    {logo}
                </div>
                <div className={s.description}>
                    <h3> {title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

