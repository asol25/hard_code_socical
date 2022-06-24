import React from "react";
import { Newsfeed } from '../newsfeed/newsfeed';
import { Suggestions } from "../sidebar/suggestions";
interface Section {

}

export const Section: React.FC = () => {
    return (
        <main className="bg-[#FAFAFA] flex justify-center gap-3 items-start">
            <Newsfeed></Newsfeed>
            <Suggestions></Suggestions>
        </main>
    )
}