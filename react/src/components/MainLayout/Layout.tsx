import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from '../features/Header';
import { MainSection } from '../features/MainSection';
import './Main.scss'
interface Layout {

}

export const Layout: React.FC = () => {
    return (
        <div>
            <header className="header">
                <Header></Header>
            </header>

            <div className="layout">
                <main className="main">
                    <MainSection></MainSection>
                </main>

                <aside className="aside">
                    <h1>FRIENDS</h1>
                </aside>

            </div>
        </div>
    )
}