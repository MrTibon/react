import React from 'react';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Profile from "./Components/Profile/Profile.jsx";


const App = () => {
    return (
        <div className={"app-wraper"}>
            <Header/>
            <Menu/>
            <Profile/>
        </div>

    );
}


export default App;
