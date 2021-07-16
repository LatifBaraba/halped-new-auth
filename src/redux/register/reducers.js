import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function registerReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER :
            return {
                ...state,
                loading : true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}