import React, { Fragment } from "react";
import get_newsfeed_hooks from '../../hook/newsfeed/get_newsfeed';
import get_likes_hook from '../../hook/newsfeed/get_likes';
interface Newsfeed {

}

export const Newsfeed: React.FC = () => {
    const { NewsFeeds } = get_newsfeed_hooks();
    const { likes } = get_likes_hook();
    const [isActive, setIsActive] = React.useState(false);
    console.log(likes);

    const list: JSX.Element = <div>

        <h6 className="text-xs font-extrabold my-3">NewsFeed For You</h6>

        <ul>    
            {NewsFeeds?.map((value) => {
                return <li key={value.toString()} className="border-2 rounded-md">
                    <img src={value.picture} alt="" className="w-8 h-8 rounded-full m-2"/>
                    <img src={value.images} alt="" className="max-w-md"/>
                    <div className="text-2xl flex gap-x-2 ml-">
                        <i className={isActive ? "ri-heart-line text-[red]": "ri-heart-line"}  onClick={(event: React.MouseEvent<HTMLElement>) => {
                             setIsActive(current => !current);
                        }}></i>
                        <i className="ri-chat-1-line"></i>
                    </div>
                </li>
            })}
        </ul>
    </div>
    return (
        <Fragment>
            {list}
        </Fragment>
    )
}