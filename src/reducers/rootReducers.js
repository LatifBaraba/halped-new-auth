import { combineReducers } from 'redux'
import loginReducer from '../redux/login/reducers'
import registerReducer from '../redux/register/reducers'
import validateReducer from '../redux/register/reducers'
import registerPasswordReducer from '../redux/registerPass/reducer'

const reducers = combineReducers({
    loginReducer,
    registerReducer,
    validateReducer,
    registerPasswordReducer
})

export default reducers