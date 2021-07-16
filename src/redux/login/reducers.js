import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN :
            return {
                ...state,
                loading: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}