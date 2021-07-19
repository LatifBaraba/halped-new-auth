import {
    NEW_PASS,
    NEW_PASS_SUCCESS,
    NEW_PASS_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export default function newPasswordReducer(state = initialState, action) {
    switch(action.type) {
        case NEW_PASS :
            return {
                ...state,
                loading : true
            }
        case NEW_PASS_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case NEW_PASS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}