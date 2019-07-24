import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'

const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/user/login' component={Login} />
            <Route exact path='/user/register' component={Register} />
        </Switch>
    </Router>
)

export default Routes