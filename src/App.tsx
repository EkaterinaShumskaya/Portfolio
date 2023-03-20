import React from 'react';
import './App.css';
import {Skills} from "./Skills/Skills";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Works} from "./Works/Works";
import {Variant} from "./Variant/Variant";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <Variant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
