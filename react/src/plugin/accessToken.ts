let user: Object = {};

export const setAccessToken = (s: Object) => {
    return user = s
}
export const getAccessToken = (): Object => {
    return user;
}