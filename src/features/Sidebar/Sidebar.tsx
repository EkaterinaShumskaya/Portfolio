import {IoCloseSharp} from "@react-icons/all-files/io5/IoCloseSharp";
import {FC, memo} from "react";
import {Navigation} from "../Header/Navigation/Navigation";
import s from './Sidebar.module.scss'
import {Links} from "../../common/components/Links/Links";

type SidebarProps = {
    open: boolean
    handleClose: () => void
}
export const Sidebar: FC<SidebarProps> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')
    return (
        <>
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <IoCloseSharp onClick={handleClose} className={s.closeIcon}/>
                <nav className={s.nav}>
                    <Links handleClose={handleClose} className={s.active}/>
                </nav>
            </aside>
        </>
    )
}