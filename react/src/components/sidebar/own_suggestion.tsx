import React from 'react'
import own_suggestion_hook from '../../hook/own_suggestion_hook';
export const Own_suggestion: React.FC = () => {
    const { ownSuggestion } = own_suggestion_hook();

    const list = <div className='flex gap-x-2 items-center'>
        <img src={ownSuggestion?.picture} alt="" className="w-12 h-12 rounded-full" />
        <p>{ownSuggestion?.nickname}</p>
    </div>
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    )
}
