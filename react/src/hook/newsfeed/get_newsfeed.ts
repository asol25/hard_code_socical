import React from 'react';
import axios from "axios";
import { AxiosRequestConfig } from 'axios';
import { newsfeed } from '../../types/type';

const get_newsfeed_hooks = () => {
    const [NewsFeeds, setNewsFeed] = React.useState<newsfeed[] | undefined>(undefined);

    React.useEffect(() => {
        const header = { 'Content-Type': 'application/json' }
        axios.get('http://localhost:4040/api/newsfeed/', (header as AxiosRequestConfig<any>))
            .then(response => {
                setNewsFeed(response.data);
            });
    }, [])
    return {
        NewsFeeds
    };
} 

export default get_newsfeed_hooks;

