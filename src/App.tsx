import React, {useCallback, useState} from 'react';
import './App.css';
import {Skills} from "./Skills/Skills";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Projects} from "./Progects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Navigate, Route, Routes} from 'react-router-dom';
import {Sidebar} from "./Sidebar/Sidebar";


function App() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <div className="App">
            <Header handleOpen={handleOpen}/>
            <Sidebar open={open} handleClose={handleClose}/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/main'}/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/skills'} element={<Skills/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>

            </Routes>

        </div>
    );
}

export default App;
