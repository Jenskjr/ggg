import {
    CHANGELANGUAGE,
    SETSEARCHSTRING,
    RESETSEARCHSTRING,
    SETSEARCH,
    SETURLHISTORY,
    SETSELECTEDDEVELOPMENTGOAL,
    SETSELECTEDCATEGORY,
    SETTABINDEX
} from '../actions/actions';
import lang from '../lang/lang'

const initialState = {
    count: 0,
    lang: lang.danish,
    english: false,
    search: false,
    searchString: "",
    urlHistory: [],
    selectedDevelopmentGoal: undefined,
    selectedCategory: undefined,
    tabIndex: 0,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SETURLHISTORY:
            return {
                ...state, urlHistory: action.url
            }
            break;
        case SETSELECTEDDEVELOPMENTGOAL:
            return {
                ...state, selectedDevelopmentGoal: action.value
            }
            break;
        case SETSELECTEDCATEGORY:
            return {
                ...state, selectedCategory: action.value
            }
            break;
        case SETTABINDEX:
            return {
                ...state, tabIndex: action.tabIndex
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