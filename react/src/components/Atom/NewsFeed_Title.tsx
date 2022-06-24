import React, { useEffect } from "react";
import { useAuth0, AuthState } from '../../plugin/auth-plugin';
import { useState } from 'react';
import { getUser } from '../../plugin/accessToken';
interface NewsFeed_Title {

}

export const NewsFeed_Title: React.FC = () => {
    const [user, setUser] = useState({});

    return (
        <div className="section__newsfeed__logo">
            <h4>Aurelion Sol</h4>
        </div>
    )
}