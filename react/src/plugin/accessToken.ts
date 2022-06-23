let user: Object = {};

export const setUser = (s: Object) => {
    console.log(s);
    return user = s
}
export const getUser = (): Object => {
    return user;
}