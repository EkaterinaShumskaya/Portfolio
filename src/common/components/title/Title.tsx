import React from 'react';
import s from './Title.module.scss'

type PropsTitleType={
    title:string
}
export const Title = (props:PropsTitleType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>

    );
};