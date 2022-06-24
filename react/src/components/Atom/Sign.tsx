import React, { useEffect } from "react";
import { useAuth0, AuthState } from '../../plugin/auth-plugin';
import { useState } from 'react';
import { getAccessToken } from '../../plugin/accessToken';
interface Sign {

}

export const Sign: React.FC = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        useAuth0(AuthState).initAuth();
    }, [])

    return (
        <h3 className="header__sign para" onClick={() => {
            useAuth0(AuthState).login();
            console.log(getAccessToken());
        }}>Sign Up</h3>
    )
}