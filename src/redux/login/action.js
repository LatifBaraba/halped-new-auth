import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'
import toastFunction from '../../helper/toast_helper'

// const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/login`;
const URL = `${process.env.REACT_APP_BASE_URL_DEV}/api/auth/login`;

export const fetchLogin = (payload) => {
    return (dispatch) => {
        dispatch(login())
        axios(URL, {
            method : 'POST',
            data: {
                identity: payload.identity,
                password: payload.password,
                user_agent: navigator.userAgent,
                os: navigator.platform,
                mobile_version: ""
            },
        })
        .then(res => {
            dispatch(loginSuccess(res))
            // history.push("/")
            console.log(res, "login success res")
            // window.location.href = res.data.data.redirect
            console.log(res.data.message)
            toastFunction('success', res.data.message, 'bottom-center')
        })
        .catch(err => {
            dispatch(loginFailure(err))
            if(err.response.status === 400 ) {
                // console.log(err.response.data.error.message)
                toastFunction('warning', err.response.data.error.message, 'bottom-center')
            } else {
                toastFunction('warning', err.response.data.error.message, 'bottom-center')
            }
            console.log(err, "login success err")
        })
    }
}

const login = () => ({
    type: LOGIN
})

const loginFailure = () => ({
    type: LOGIN_FAILURE
})

const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
})