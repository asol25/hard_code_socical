import React from 'react'
import { getAccessToken } from '../../plugin/accessToken';

export const Own_suggestion: React.FC = () => {
    console.log(getAccessToken())
    return (
        <React.Fragment>
        </React.Fragment>
    )
}
