import React from "react";
import { NewsFeed_Content } from "../Atom/NewsFeed_Content";
import { NewsFeed_Title } from "../Atom/NewsFeed_Title";
import { NewsFee_Comment } from "../Atom/NewsFee_Comment";
import { User_Friends } from "../Atom/User_Friends";

interface Friends {

}

export const Friends: React.FC = () => {
    const Images = {
        "images": "https://instagram.fsgn5-11.fna.fbcdn.net/v/t51.2885-19/247945034_1565042227175607_3424548771147052332_n.jpg?_nc_ht=instagram.fsgn5-11.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BUC5fmbtDAIAX-xbjos&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT_aa6SmtpDpqmjDzRyHlKpjIcZK2O54BufYZZy9EIye6w&oe=62BB2AF1&_nc_sid=cff2a4"
    }
    return (
        <section className="pl-8 fixed">
            <div className="container flex items-center gap-2">
                <img className="rounded-full w-14 h-14" src="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <div>
                    <h1 className="text-sm font-semibold">usol.203</h1>
                    <h1 className="text-sm font-medium">asol_uhight</h1>
                </div>
            </div>
            <div className="container flex mt-2">
                <h3 className="font-semibold text-sm">Suggestions For You</h3>
                <p className="ml-40 text-xs">See All</p>
            </div>
            <User_Friends></User_Friends>
        </section>
    )
}