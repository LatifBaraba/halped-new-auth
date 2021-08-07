import {
    FORGOT_PASS,
    FORGOT_PASS_FAILURE,
    FORGOT_PASS_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'
import toastFunction from '../../helper/toast_helper'
// const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/password/reset`;
const URL = `${process.env.REACT_APP_BASE_URL_DEV}/api/auth/password/reset`;

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
            toastFunction('success', res.data.message, 'bottom-center')
            setTimeout(() => {
                // history.push("/auth-verification")
                history.push("/auth-verification-password")
            }, 3000);
        })
        .catch(err => {
            dispatch(forgotPassFailure(err))
            toastFunction('warning', err.response.data.error.message, 'bottom-center')
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