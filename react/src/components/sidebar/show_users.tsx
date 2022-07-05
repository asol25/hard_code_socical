import React from "react";
import { suggested_profile } from "../../types/type";
export const Show_users: React.FC<suggested_profile> = (props: suggested_profile) => {

    return (
        <React.Fragment>
            <img src={props?.picture} alt="" className="w-8 h-8 rounded-full" />
            <p className="text-xs">{props?.nickname}</p>
        </React.Fragment>
    )
}