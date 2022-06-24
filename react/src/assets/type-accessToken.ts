export interface accessToken {
    setTokenToServer: () => Promise<Object>;
}

export interface options {
    method: string,
    url: string,
    data: Object,
}