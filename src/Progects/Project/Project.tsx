import React, {FC} from 'react';
import s from './Project.module.scss'

type StyleType = {
    backgroundImage: string,
    backgroundSize: string

}

type ProjectType = {
    style: StyleType,
    title: string,
    description: string,
    link:string
}

export const Project: FC<ProjectType> = ({
                                             title,
                                             style,
                                             description,
                                             link
                                         }) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock} style={style}>
                {/*<button className={s.button}>See</button>*/}
                <div className={s.button}>
                    <a href={link} className={s.link} target='_blank' rel='noreferrer'> SEE </a>
                </div>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}> {title}</h3>
                <span className={s.description}>
               {description}
            </span>
            </div>

        </div>

    );
};

