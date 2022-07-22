import React from 'react';
import { suggested_profile } from '../../types/type';
import { fetch_services_server } from '../../plugin/fetch-services-server';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
const friend_suggestion_hook = () => {
    const [friendSuggestion, setFriendSuggestion] = React.useState<suggested_profile[] | undefined>(undefined);

    React.useEffect(() => {
        const { nickname } = JSON.parse(localStorage.getItem("sessionName") || "");
        const header = { 'Content-Type': 'application/json' }
        const data = { "nickname": nickname };
        axios.post('http://localhost:4040/api/suggestions/', data, (header as AxiosRequestConfig<any>))
            .then(response => {
                setFriendSuggestion(response.data);
            });
    }, [])
    return {
        friendSuggestion,
    }
}

export default friend_suggestion_hook;