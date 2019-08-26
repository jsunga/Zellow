import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Post from './components/Post/Post'
import Home from './components/Home/Home'
import Listing from './components/Listing/Listing'
import Form from './components/Post/Form'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/user/login' component={Login} />
            <Route exact path='/user/register' component={Register} />
            <Route exact path='/list_your_rental' component={Post} />
            <Route exact path="/for_rent" render={props => <Home key={props.location.search} {...props} />} />
            <Route exact path='/listing/:id' component={Listing} />
            <Route exact path='/post' component={Form} />
        </Switch>
    </Router>
)

export default Routes