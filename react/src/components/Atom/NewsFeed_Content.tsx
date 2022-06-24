import React, { useEffect } from "react";
import { useState } from 'react';
interface NewsFeed_Content {

}

export const NewsFeed_Content: React.FC = () => {
    const [user, setUser] = useState({});

    return (
        <div className="section__newsfeed__images">
            <h1>Architecture</h1>
        </div>
    )
}