export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHANGELANGUAGE = 'CHANGELANGUAGE';


export function increment() {
    return { type: INCREMENT}
}

export function decrement() {
    return { type: DECREMENT}
}

export function login() {
    return { type: LOGIN }
}

export function logOut() {
    return { type: LOGOUT }
}

export function changeLanguage (lang) {
    return { type: CHANGELANGUAGE}
}