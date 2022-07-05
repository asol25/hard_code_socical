import React from 'react'
import friend_suggestion_hook from '../../hook/friend_suggestion_hook'
import { Show_users } from './show_users';

export const Friend_suggestion: React.FC = () => {
  const { friendSuggestion } = friend_suggestion_hook();
  const list: JSX.Element = <div>
    <h6 className="text-xs font-extrabold my-3">Suggestions For You</h6>

    <ul>
      {friendSuggestion?.map((value) => {
        return <li className='flex items-center gap-x-2 my-2'>
          <Show_users nickname={value.nickname} picture={value.picture}></Show_users>
        </li>
      })}
    </ul>
  </div>
  return (
    <React.Fragment>
      {list}
    </React.Fragment>
  )
}
