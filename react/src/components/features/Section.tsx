
import React from "react";
import { Newsfeed } from './Newsfeed';
interface Section {

}

export const Section: React.FC = () => {
    return (
        <div className="layout">
        <main className="main">
            <Newsfeed></Newsfeed>
        </main>
        
        <aside className="aside">
            <h1>FRIENDS</h1>
        </aside>
        </div>
    )
}