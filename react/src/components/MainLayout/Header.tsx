import React from "react";
import logo from  '../../assets/Header.png';
interface Header {

}
export const Header: React.FC = () => {
    return (
        <header>
            <img className="mx-auto" src={logo} alt="" />
        </header>
    )
}