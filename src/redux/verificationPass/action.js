import {
    VALIDATE_PASS,
    VALIDATE_PASS_FAILURE,
    VALIDATE_PASS_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/password/reset`;

export const fetchValidatePass = payload => {
    return (dispatch) => {
        dispatch(validatePass())
        axios(URL, {
            method : 'PUT',
            data: {
                verify_token: payload.verifyToken,
	            code: payload.pin
            },
        })
        .then(res => {
            dispatch(validatePassSuccess(res))
            localStorage.removeItem('verifyToken', payload.verify_token)
            localStorage.setItem('resetPasswordToken', res.data.data.reset_password_token)
            console.log(res, "validatePass success res")
            history.push("/auth-reset-password")
        })
        .catch(err => {
            dispatch(validatePassFailure(err))
            console.log(err, "validatePass success err")
        })
    }
}

const validatePass = () => ({
    type: VALIDATE_PASS
})

const validatePassFailure = () => ({
    type: VALIDATE_PASS_FAILURE
})

const validatePassSuccess = payload => ({
    type: VALIDATE_PASS_SUCCESS,
    payload
})