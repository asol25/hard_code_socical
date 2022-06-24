
import React from "react";
import { Friends } from "./Friends";
import { Newsfeed } from './Newsfeed';
interface Section {

}

export const Section: React.FC = () => {
    return (
        <div className="sm:flex sm:justify-center">
        <main className="sm:w-1/3">
            <Newsfeed></Newsfeed>
        </main>
        
        <aside className="hidden sm:block sm:w-1/3">
            <Friends></Friends>
        </aside>
        </div>
    )
}