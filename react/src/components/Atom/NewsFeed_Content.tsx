import React, { useEffect } from "react";
import { useState } from 'react';
interface NewsFeed_Content {

}

export const NewsFeed_Content: React.FC = () => {
    const [user, setUser] = useState({});

    return (
        <img className="w-full object-cover mt-2" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t15.5256-10/242211338_394265812211442_5824443327031199701_n.jpg?stp=dst-jpg_p296x100&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=bbYXnBmx0JYAX9h5j4b&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT90rOv4HC2rZ6_aeX2TSaXpjrT2EHVJ8mUyEt8wB8WVxw&oe=62B9C1C9" alt="" />
    )
}