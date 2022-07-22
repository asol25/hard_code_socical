import React from 'react'
import own_suggestion_hook from '../../hook/suggestion/own_suggestion_hook';
import { Show_users } from './show_users';
export const Own_suggestion: React.FC = () => {
    const { ownSuggestion } = own_suggestion_hook();

    const list: JSX.Element = <div className='flex gap-x-2 items-center'>
        <Show_users nickname={ownSuggestion?.nickname} picture={ownSuggestion?.picture}></Show_users>
    </div>
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    )
}
