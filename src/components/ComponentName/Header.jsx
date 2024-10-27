import React from 'react';
import "../../styles/styles.css";
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import iconUpload from '../../assets/images/icons/upload.svg';
import mohanMuruge from '../../assets/images/Mohan-muruge.jpg';

function Header() {
    <header className="header">
        <div className="header__logo">
            <img src={logo} alt="BrainFlix logo" className="header__logo--img"/>
            BrainFlix
        </div>
        <div className="header__navbar">
            <div className="header__search">
                <input type="text" placeholder="Search" className="header__search--input"></input>
                <img src={mohanMuruge} alt="profile picture of Mohan Muruge" className="header__search--profile"/>
            </div>
            <button className="header__button">UPLOAD
                <img src={iconUpload} alt="upload icon left side of button" className="header__button--upload-icon"/>
            </button>
            <img src={mohanMuruge} alt="profile picture of Mohan Muruge" className="header__navbar--profile"/>
        </div>
    </header>
}

export default Header;