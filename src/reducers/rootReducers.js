import { combineReducers } from 'redux'
import loginReducer from '../redux/login/reducers'
import registerReducer from '../redux/register/reducers'
import validateReducer from '../redux/register/reducers'
import registerPasswordReducer from '../redux/registerPass/reducer'
import forgotPasswordReducer from '../redux/forgotPass/reducers'
import validatePasswordReducer from '../redux/verificationPass/reducer'
import newPasswordReducer from '../redux/newPass/reducer'

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    validateReducer,
    registerPasswordReducer,
    forgotPasswordReducer,
    validatePasswordReducer,
    newPasswordReducer
})

export default reducers