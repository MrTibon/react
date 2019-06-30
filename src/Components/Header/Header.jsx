import React from 'react';
import './Header.module.css';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPePVFm0y9Hww0QBlMwBkOq3Y-l083NldjrOP-09RJF4RshWElWw"}/>
        </header>
    );
}

export default Header;