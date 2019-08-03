import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Post from './components/Post/Post'

const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/user/login' component={Login} />
            <Route exact path='/user/register' component={Register} />
            <Route exact path='/list_your_rental' component={Post} />
        </Switch>
    </Router>
)

export default Routes