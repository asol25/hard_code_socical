import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from '../features/Header';
import './Main.scss'
interface Layout {

}

export const Layout: React.FC = () => {
    return (
        <div>
            <header className="header">
                <Header></Header>
            </header>

            <Outlet />
        </div>
    )
}