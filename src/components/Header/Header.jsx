
import "../../styles/styles.css";
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import iconUpload from '../../assets/images/icons/upload.svg';
import mohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import iconSearch from '../../assets/images/icons/search.svg';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
        <Link to="/" className="header__logo">
            <img src={logo} alt="BrainFlix logo" className="header__logo--img"/>
        </Link>
           
        <div className="header__navbar">
            <div className="header__search">
                <div className="header__search--container">
                <input type="text" placeholder="Search" className="header__search--input">
                </input>
                <img src={iconSearch} alt="search icon left side of search bar" className="header__search--icon"/>
                </div>
                <img src={mohanMuruge} alt="profile picture of Mohan Muruge" className="header__search--profile"/>
            </div>
            <Link to="/upload" className="header__link--button">
            <button className="header__button">
                <img src={iconUpload} alt="upload icon left side of button" className="header__button--upload-icon"/>
                <label className="header__button--text">UPLOAD</label>
            </button>
            </Link>
            <div className="header__img-container">
            <img src={mohanMuruge} alt="profile picture of Mohan Muruge" className="header__img--profile"/>
            </div>
        </div>
    </header>
    )
}

export default Header;