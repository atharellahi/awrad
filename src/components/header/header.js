import React from "react";
import ReactDOM from 'react-dom/client';
import logo from '../images/Awrad.png'
import './header.css'

const Header = () => {

    return (
        <div className="header">
            <img className="logo" src={logo} alt="headerlogo" />
        </div>
    )
}

export default Header;