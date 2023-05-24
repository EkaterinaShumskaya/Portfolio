import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/title/Title";
import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {SiRedux} from '@react-icons/all-files/si/SiRedux';
import {DiJavascript1} from '@react-icons/all-files/di/DiJavascript1';
import {DiCss3} from '@react-icons/all-files/di/DiCss3';
import {AiFillHtml5} from '@react-icons/all-files/ai/AiFillHtml5';
import {FaGitAlt} from '@react-icons/all-files/fa/FaGitAlt';
import {VscDebugConsole} from '@react-icons/all-files/vsc/VscDebugConsole';
import {CgStyle} from '@react-icons/all-files/cg/CgStyle';
import {AiOutlineCloudServer} from '@react-icons/all-files/ai/AiOutlineCloudServer';
import {Particle} from "../Main/Particle/Particle";


type SkillsType = {
    logo: JSX.Element
    title: string
    description: string
}
export const Skills = () => {
    const skills: SkillsType[] = [
        {
            logo: <AiFillHtml5/>,
            title: 'HTML',
            description: 'Fundamentals HTML tags, form and validation, semantic HTML'
        },
        {
            logo: <DiCss3/>,
            title: 'CSS',
            description: 'Positioning, box modal, selectors, flexbox, media queries'
        },
        {
            logo: <DiJavascript1/>,
            title: 'JavaScript/TypeScript',
            description: 'Data types, basic syntax, functions, promises, scope, event loop, async/await'
        },
        {
            logo: <FaReact/>,
            title: 'React',
            description: 'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC'
        },
        {logo: <SiRedux/>, title: 'Redux', description: 'Actions & thunks, reducer, context API, store, flux'},
        {
            logo: <AiOutlineCloudServer/>,
            title: 'REST API',
            description: 'HTTPS requests, URI parameters, Query parameters, status codes, axios library'
        },
        {
            logo: <FaGitAlt/>,
            title: 'Version Control and Git',
            description: 'Creating new repositories, push- and pull-requests, repos cloning'
        },
        {
            logo: <VscDebugConsole/>,
            title: 'Testing and Debugging',
            description: 'TDD, Story book, Unit tests, Snapshot'
        },
        {logo: <CgStyle/>, title: 'Styling', description: 'Material UI'}

    ]
    return (
        <div className={s.skillsBlock} id={'skillsPage'}>
            <Particle/>
            <div className={s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {skills.map((el, index) => <Skill logo={el.logo}
                                                      title={el.title}
                                                      description={el.description}
                                                      key={index}/>)}
                </div>
            </div>
        </div>
    );
};

