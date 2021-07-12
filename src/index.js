import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/rootReducers'

import Login from './pages/login'
import Register from './pages/register'
import Verification from './pages/verification'
import RegisterPass from './pages/registerPass'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth-login" exact component={Login}/>
        <Route path="/auth-register" exact component={Register}/>
        <Route path="/auth-verification" exact component={Verification}/>
        <Route path="/auth-register-password" exact component={RegisterPass}/>
      </Switch>
    </Router> 
  </Provider>,   
  document.getElementById('root')
);