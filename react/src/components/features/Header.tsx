import React from "react";
import { Link } from 'react-router-dom';
import { Sign } from '../Atom/Sign';
interface Header {

}

export const Header: React.FC = () => {
    const listNav = (
        <div className="header__list__menu">
            <Link to="/" className="para__active">Home</Link>
            <Link to="/message">Message</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
    return (
        <div className="header__container">
            <div className="header__logo para">LOGO</div>
            <nav className="header__list para">
                {listNav}
            </nav>
            <Sign></Sign>
        </div>
    )
}