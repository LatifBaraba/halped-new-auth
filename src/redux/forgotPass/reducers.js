import {
    FORGOT_PASS,
    FORGOT_PASS_SUCCESS,
    FORGOT_PASS_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function forgotPasswordReducer(state = initialState, action) {
    switch(action.type) {
        case FORGOT_PASS :
            return {
                ...state,
                loading : true
            }
        case FORGOT_PASS_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case FORGOT_PASS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}