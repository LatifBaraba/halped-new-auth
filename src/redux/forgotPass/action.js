import {
    FORGOT_PASS,
    FORGOT_PASS_FAILURE,
    FORGOT_PASS_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/password/reset`;

export const fetchForgotPassword = (payload) => {
    return (dispatch) => {
        dispatch(forgotPass())
        axios(URL, {
            method : 'POST',
            data: {
                identity: payload.identity,
            },
        })
        .then(res => {
            dispatch(forgotPassSuccess(res))
            localStorage.setItem('identity', payload.identity)
            localStorage.setItem('verifyToken', res.data.data.verify_token)
            console.log(res, "forgotpass success res")
            history.push("/auth-verification-password")
            // setInterval(() => {
            //     history.push("/auth-verification")
            // }, 5000);
        })
        .catch(err => {
            dispatch(forgotPassFailure(err))
            console.log(err, "forgotPass success err")
        })
    }
}

const forgotPass = () => ({
    type: FORGOT_PASS
})

const forgotPassFailure = () => ({
    type: FORGOT_PASS_FAILURE
})

const forgotPassSuccess = payload => ({
    type: FORGOT_PASS_SUCCESS,
    payload
})