import {
    INCREMENT,
    DECREMENT,
    CHANGELANGUAGE
} from '../actions/actions';
import lang from '../lang/lang'

const initialState = {
    count: 0,
    lang: lang.danish,
    english: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1 // make a copy of state 
            }
            case DECREMENT:
                return {
                    count: state.count - 1 // make a copy of state
                }
                case CHANGELANGUAGE:
                    if (state.lang === lang.danish)
                        return {
                            lang: lang.english,
                            english: true
                        }
                    if (state.lang === lang.english)
                        return {
                            lang: lang.danish,
                            english: false
                        }
                    break;
                default:
                    return state
    }
}

export default rootReducer;