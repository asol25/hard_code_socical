import React from 'react';
import axios from "axios";
import { AxiosRequestConfig } from 'axios';
import { newsfeed } from '../../types/type';

const get_likes_hook = () => {
    const [timeInterval, setTimeInterval] = React.useState(0);
    const [likes, setLikes] = React.useState<newsfeed[] | undefined>(undefined);

    setTimeout(() => {
        setTimeInterval(timeInterval + 1);
      }, 500000);

    React.useEffect(() => {
        function updateData(setState: React.Dispatch<React.SetStateAction<newsfeed[] | undefined>>) {
            const header = { 'Content-Type': 'application/json' }
            return axios.get('http://localhost:4040/api/newsfeed/', (header as AxiosRequestConfig<any>))
                .then(response => {
                    setLikes(response.data);
                });
        }
    }, [timeInterval])
    return {
        likes
    };
}

export default get_likes_hook;

