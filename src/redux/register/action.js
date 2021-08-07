import {
    REGISTER,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

// const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/register`;
const URL = `${process.env.REACT_APP_BASE_URL_DEV}/api/auth/register`;

export const fetchRegister = (payload) => {
    return (dispatch) => {
        dispatch(register())
        axios(URL, {
            method : 'POST',
            data: {
                identity: payload.identity,
            },
        })
        .then(res => {
            dispatch(registerSuccess(res))
            localStorage.setItem('identity', payload.identity)
            localStorage.setItem('verifyToken', res.data.data.verify_token)
            console.log(res, "register success res")
            history.push("/auth-verification")
            // setInterval(() => {
            //     history.push("/auth-verification")
            // }, 5000);
        })
        .catch(err => {
            dispatch(registerFailure(err))
            console.log(err, "register success err")
        })
    }
}

const register = () => ({
    type: REGISTER
})

const registerFailure = () => ({
    type: REGISTER_FAILURE
})

const registerSuccess = payload => ({
    type: REGISTER_SUCCESS,
    payload
})