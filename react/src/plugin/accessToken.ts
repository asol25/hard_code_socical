let accountToken: Object = {};

export const setAccessToken = (s: Object) => {
    return accountToken = s
}
export const getAccessToken = () => {
    return accountToken;
}