import React from 'react';
import s from './Main.module.scss'
import mainphoto from '../../assets/image/My photo.jpeg'
import {Particle} from "./Particle/Particle";
import Fade from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
import {inspect} from "util";





export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Particle/>
            <div className={s.container}>
            <div className={s.text}>
                <Fade cascade >
                    <span>HELLO, MY NAME IS</span>
                    <h1>Katya Shumskaya</h1>
                    <ReactTypingEffect text={'I am a front-end developer'} />
                    {/*<p>I am a front-end developer</p>*/}
                </Fade>

            </div>
                <Tilt className={s.tilt} options={{ max : 15 }}>
                    <img src={mainphoto}/>
                </Tilt>

        </div>
        </div>
    );
};