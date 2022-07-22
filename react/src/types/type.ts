export interface suggestions {
    nickname: string;
    picture: string;
}

export interface suggested_profile {
    nickname: string | undefined;
    picture: string | undefined;
}

export interface newsfeed {
    nickname: string | undefined;
    picture: string | undefined;
    images: string | undefined;
    like: number | undefined;
    comments: string | undefined;
}