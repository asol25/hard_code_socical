import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from './Header'
interface Layout {

}

export const Layout: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    )
}