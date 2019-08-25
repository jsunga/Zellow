import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { NavLink, Redirect } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'

export default class Login extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        email: '',
        password: ''
    }

    validate = () => {
        let isError = false
        const { email, password } = this.state
        if (email.indexOf("@") === -1 || password.length < 6) {
            isError = true
            alert('Invalid submission')
        }
        return isError
    }

    handleLogin = async e => {
        e.preventDefault()
        const err = this.validate()
        if (!err) {
            try {
                let login = await axios.post('/api/user/login', {
                    email: this.state.email,
                    password: this.state.password
                })
                localStorage.setItem('user_id', login.data.user_id)
                this.props.history.push('/')
            }
            catch(err) {
                if (err.response.data === 'login failed') alert('Invalid email or password')
            }
        }
    }

    render() {
        if (this.state.user_id !== null) return <Redirect to='/' />
        return (
            <>
                <Navbar />
                <div className='user'>
                    <h1>Welcome to Zellow</h1>
                    <main>
                        <span>
                            <NavLink
                                to='/user/login' 
                                exact 
                                activeStyle={{
                                    color: '#006AFF', 
                                    borderBottom: '2px solid #006AFF', 
                                    paddingBottom: '12px'
                                }} 
                                className='link'
                            >Sign in</NavLink>
                        </span>
                        <span>
                            <NavLink
                                to='/user/register' 
                                exact 
                                activeStyle={{
                                    color: '#006AFF', 
                                    borderBottom: '2px solid #006AFF', 
                                    paddingBottom: '12px'
                                }} 
                                className='link'
                            >New account</NavLink>
                        </span>
                    </main>
                    <section>
                        <form onSubmit={this.handleLogin}>
                            <input placeholder='Enter email' onChange={(e) => {this.setState({email: e.target.value})}} />
                            <input type='password' placeholder='Enter password' onChange={(e) => {this.setState({password: e.target.value})}} />
                            <button>Sign in</button>
                        </form>
                    </section>
                </div>
                <Footer />
            </>
        )
    }

}
