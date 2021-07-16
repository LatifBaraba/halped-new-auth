import {
    VALIDATE,
    VALIDATE_SUCCESS,
    VALIDATE_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function validateReducer(state = initialState, action) {
    switch(action.type) {
        case VALIDATE :
            return {
                ...state,
                loading : true
            }
        case VALIDATE_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case VALIDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}