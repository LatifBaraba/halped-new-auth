import {
    REGISTER_PASS,
    REGISTER_PASS_SUCCESS,
    REGISTER_PASS_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function registerPasswordReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_PASS :
            return {
                ...state,
                loading : true
            }
        case REGISTER_PASS_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_PASS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}