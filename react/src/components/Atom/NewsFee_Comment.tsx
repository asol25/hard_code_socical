import React from "react";
import { useState } from 'react';
interface NewsFee_Comment {

}

export const NewsFee_Comment: React.FC = () => {
    const [user, setUser] = React.useState({});

    return (
        <div className="mt-2 px-2">
            <div className="flex items-center gap-1">
                <i className="ri-heart-line text-2xl"></i>
                <i className="ri-send-plane-line text-2xl"></i>
            </div>

            <div className="text-sm font-semibold my-2">500 <span>likes</span></div>
            <div className="">
                <h4 className="font-semibold text-sm">mongodb<span className="font-medium text-[#262626]"> MongoDB World 2022 was packed full of keynotes, exciting announcements, and that’s just scratching the surface! 🤩⁠</span></h4>
            </div>
            
            <div className="flex items-center gap-2 my-2">
                <i className="ri-star-smile-line text-2xl"></i>
                <textarea className="outline-none text-sm w-full" placeholder="Add a comment..." />
                <button className="ml-auto font-semibold text-[#0095F7] text-sm">Post</button>
            </div>
        </div>
    )
}