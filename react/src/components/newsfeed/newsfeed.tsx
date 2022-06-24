import React from "react";
import NewsFeed from '../../assets/Main.png'
interface Newsfeed {

}

export const Newsfeed: React.FC = () => {
    return (
        <section className="">
            <img src={NewsFeed} alt="" />
        </section>
    )
}