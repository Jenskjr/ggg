export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHANGELANGUAGE = 'CHANGELANGUAGE';
export const SETSEARCH = 'SETSEARCH';
export const SETSEARCHSTRING = 'SETSEARCHSTRING';
export const RESETSEARCHSTRING = 'RESETSEARCHSTRING';


export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const login = () => {
    return {
        type: LOGIN
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
    }
}

export const changeLanguage = (lang) => {
    return {
        type: CHANGELANGUAGE
    }
}

export const setSearchString = (event) => {
    return {
        type: SETSEARCHSTRING,
        event: event
    }
}

export const resetSearchString = () => {
    return {
        type: RESETSEARCHSTRING
    }
}

export const setSearch = (search) => {
    return {
        type: SETSEARCH,
        search: search
    }
}