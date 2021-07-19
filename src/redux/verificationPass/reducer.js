import {
    VALIDATE_PASS,
    VALIDATE_PASS_SUCCESS,
    VALIDATE_PASS_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function validatePasswordReducer(state = initialState, action) {
    switch(action.type) {
        case VALIDATE_PASS :
            return {
                ...state,
                loading : true
            }
        case VALIDATE_PASS_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case VALIDATE_PASS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}