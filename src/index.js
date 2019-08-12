import React from 'react';
import ReactDOM from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'

import Home from './components/home'
import Login from './components/login'
import Account from './components/account'

const routing = (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/account" render={(props) => <Account {...props} ></Account>}/>
        <Route path="/login" component={Login}/>
    </BrowserRouter>
)   

ReactDOM.render( routing, document.getElementById('root') )