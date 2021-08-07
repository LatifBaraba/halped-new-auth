import {
    VALIDATE,
    VALIDATE_FAILURE,
    VALIDATE_SUCCESS
} from '../actionTypes'
import axios from 'axios'
import history from '../../history'

// const URL = `${process.env.REACT_APP_BASE_URL}/api/auth/register`;
const URL = `${process.env.REACT_APP_BASE_URL_DEV}/api/auth/register`;

export const fetchValidate = payload => {
    return (dispatch) => {
        dispatch(validate())
        axios(URL, {
            method : 'PUT',
            data: {
                verify_token: payload.verifyToken,
	            code: payload.pin
            },
        })
        .then(res => {
            dispatch(validateSuccess(res))
            localStorage.removeItem('verifyToken', payload.verify_token)
            localStorage.setItem('registerToken', res.data.data.register_token)
            console.log(res, "validate success res")
            history.push("/auth-register-password")
        })
        .catch(err => {
            dispatch(validateFailure(err))
            console.log(err, "validate success err")
        })
    }
}

const validate = () => ({
    type: VALIDATE
})

const validateFailure = () => ({
    type: VALIDATE_FAILURE
})

const validateSuccess = payload => ({
    type: VALIDATE_SUCCESS,
    payload
})