import React, { useEffect } from "react";
import { suggested_profile } from '../types/type';
const own_suggestion_hook = () => {
    const [ownSuggestion, setOwnSuggestion] = React.useState<suggested_profile | undefined>(undefined);

    useEffect(() => {
        const { nickname, picture } = JSON.parse(localStorage.getItem("sessionName") || "");
        setOwnSuggestion({ nickname, picture });
    }, [])

    return {
        ownSuggestion
    }
}

export default own_suggestion_hook;