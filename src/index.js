import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/rootReducers'

import Login from './pages/login'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/new-login" exact component={Login}/>
      </Switch>
    </Router> 
  </Provider>,   
  document.getElementById('root')
);