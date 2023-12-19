import React from "react";
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