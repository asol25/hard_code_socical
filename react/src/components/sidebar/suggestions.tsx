import React from "react";
import { useAuth0, AuthState } from '../../plugin/auth-plugin';
import { getAccessToken } from '../../plugin/accessToken';
interface Suggestions {

}

export const Suggestions: React.FC = () => {
    const handleSubmitRequestToAuth = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        useAuth0(AuthState).login();
        console.log('getAccessToken: ' + getAccessToken())
    }
    return (
        <section className="hidden sm:block">
            <button onClick={(event: React.FormEvent<HTMLButtonElement>) => handleSubmitRequestToAuth(event)}>@Click</button>
        </section >
    )
}