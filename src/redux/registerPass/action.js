import {
    REGISTER_PASS,
    REGISTER_PASS_FAILURE,
    REGISTER_PASS_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/register`;

export const fetchRegisterPassword = payload => {
    return (dispatch) => {
        dispatch(registerPassword())
        axios(URL, {
            method : 'PATCH',
            data: {
                register_token: payload.registerToken,
	            password: payload.password
            },
        })
        .then(res => {
            dispatch(registerPasswordSuccess(res))
            localStorage.removeItem('registerToken')
            localStorage.removeItem('identity')
            console.log(res, "registerPassword success res")
            // history.push("/auth-register-password")
        })
        .catch(err => {
            dispatch(registerPasswordFailure(err))
            console.log(err, "registerPassword success err")
        })
    }
}

const registerPassword = () => ({
    type: REGISTER_PASS
})

const registerPasswordFailure = () => ({
    type: REGISTER_PASS_FAILURE
})

const registerPasswordSuccess = payload => ({
    type: REGISTER_PASS_SUCCESS,
    payload
})