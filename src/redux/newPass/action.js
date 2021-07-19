import {
    NEW_PASS,
    NEW_PASS_FAILURE,
    NEW_PASS_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/password/reset`;

export const fetchNewPassword = payload => {
    console.log(payload)
    return (dispatch) => {
        dispatch(newPassword())
        axios(URL, {
            method : 'PATCH',
            data: {
                reset_password_token: payload.resetPasswordToken,
	            password: payload.password
            },
        })
        .then(res => {
            dispatch(newPasswordSuccess(res))
            localStorage.removeItem('resetPasswordToken')
            localStorage.removeItem('identity')
            console.log(res, "newPassword success res")
            // history.push("/auth-register-password")
        })
        .catch(err => {
            dispatch(newPasswordFailure(err))
            console.log(err, "registerPassword success err")
        })
    }
}

const newPassword = () => ({
    type: NEW_PASS
})

const newPasswordFailure = () => ({
    type: NEW_PASS_FAILURE
})

const newPasswordSuccess = payload => ({
    type: NEW_PASS_SUCCESS,
    payload
})