import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Page from "./Components/Page";


const App = () => {
    return (
        <div className={"app-wraper"}>
            <Header/>
            <Menu/>
            <Page/>
        </div>

    );
}


export default App;
