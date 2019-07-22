import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Landing} />
        </Switch>
    </Router>
)

export default Routes