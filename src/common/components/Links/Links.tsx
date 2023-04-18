import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import s from './Navigation.module.scss'


type LinksPropsType = {
    handleClose?: () => void
    className: string
}
export const Links:FC<LinksPropsType> = ({handleClose,className}) => {
    return (
        <>
            <NavLink to={'/main'}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Home
            </NavLink>
            <NavLink to={'/skills'}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Skills
            </NavLink>
            <NavLink to={'/projects'}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Projects
            </NavLink>
            <NavLink to={'/contacts'}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Contacts
            </NavLink>
        </>
    )
};
