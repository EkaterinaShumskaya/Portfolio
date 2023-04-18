import React, {FC} from 'react';
import s from './Header.module.scss'
import {Navigation} from "../Navigation/Navigation";
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";


type SidebarProps = {
    handleOpen: () => void
}

export const Header: FC<SidebarProps>  = ({handleOpen}) => {
    return (
        <header className={s.header}>
            <div className={s.mobileNavigation}>
                <GiHamburgerMenu onClick={handleOpen} className={s.burger}/>
            </div>
            <div className={s.desktopNavigation}>
                <Navigation/>
            </div>

        </header>
    );
};

