import React, {FC} from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpeg'
import socialImage from './../assets/image/SN.jpg'
import {projectImgStyle} from "../utils/utils";

export const Projects: FC = () => {
    const socialStyle = projectImgStyle(socialImage)
    const todoStyle = projectImgStyle(todoImage)

    const projects = [
        {
            title: 'Social network',
            style: socialStyle,
            link: `https://github.com/EkaterinaShumskaya/social-network`,
            description: 'Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect'
        },
        {
            title: 'Todolist',
            style: todoStyle,
            link: `https://github.com/EkaterinaShumskaya/1-todolist`,
            description: 'Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, react-hook-form, typescript, axios,material UI'
        }
    ]

    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    {projects.map((el) => <Project style={el.style}
                                                   title={el.title}
                                                   description={el.description}
                                                   link={el.link}
                    />)}
                </div>

            </div>
        </div>
    );
};

