import React from "react";
import { useState } from 'react';
interface NewsFeed_Title {

}

export const NewsFeed_Title: React.FC = () => {
    const [user, setUser] = React.useState({});

    return (
        <div className="flex items-center gap-x-2 px-2 mt-2">
            <div className=" w-8 h-8">
                <img className="rounded-full" src="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <h4 className="text-sm font-semibold">freeCodeCamp.org</h4>
            <i className="ri-separator ml-auto"></i>
        </div>
    )
}