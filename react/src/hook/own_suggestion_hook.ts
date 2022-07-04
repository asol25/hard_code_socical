import React, { useEffect } from "react";
import { getAccessToken } from "../plugin/accessToken";
import { suggestions } from '../types/type';
import { useAuth0, AuthState } from "../plugin/auth-plugin";
const own_suggestion_hook = () => {
    const [ownSuggestion, setOwnSuggestion] = React.useState<suggestions | undefined>(undefined);

    useEffect(() => {
        const userOwn = localStorage.getItem("sessionName");
        const { nickname, picture } = JSON.parse(userOwn || "");
        setOwnSuggestion({ nickname, picture });
    }, [])

    return {
        ownSuggestion
    }
}

export default own_suggestion_hook;