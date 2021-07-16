import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/login`;

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
        })
        .catch(err => {
            dispatch(loginFailure(err))
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