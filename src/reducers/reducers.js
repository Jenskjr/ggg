import {
    INCREMENT,
    DECREMENT,
    CHANGELANGUAGE,
    SETSEARCHSTRING,
    RESETSEARCHSTRING,
    SETSEARCH
} from '../actions/actions';
import lang from '../lang/lang'

const initialState = {
    count: 0,
    lang: lang.danish,
    english: false,
    search: false,
    searchString: ""
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1 // make a copy of state 
            }
            break;
        case DECREMENT:
            return {
                count: state.count - 1 // make a copy of state
            }
            break;
        case CHANGELANGUAGE:
            if (state.lang === lang.danish)
                return {
                    ...state,
                    lang: lang.english,
                    english: true
                }
            if (state.lang === lang.english)
                return {
                    ...state,
                    lang: lang.danish,
                    english: false
                }
            break;
        case SETSEARCH:
            return {
                ...state, search: action.search
            }
            break;
        case SETSEARCHSTRING:
            return {
                ...state, searchString: action.event.target.value,
            }
            break;
        case RESETSEARCHSTRING:
            return {
                ...state, searchString: "",
            }
            break;
        default:
            return state
    }
}

export default rootReducer;