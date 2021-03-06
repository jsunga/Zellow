import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import { css } from '@emotion/core'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Login.scss'
import axios from 'axios'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 20px;
`

export default class Register extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        loading: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    validate = () => {
        let isError = false
        const { email, firstname, lastname, password } = this.state
        if (email.indexOf("@") === -1 || firstname.length < 2 || lastname.length < 2 || password.length < 6) {
            isError = true
            alert(`Invalid submission:
            Email must requires @
            First name requires 2 or more characters
            Last name requires 2 or more characters
            Password requires 6 or more characters`)
        }
        return isError
    }

    handleRegister = async e => {
        e.preventDefault()
        const err = this.validate()
        if (!err) {
            try {
                this.setState({ loading: true })
                let register = await axios.post('/api/user/register', {
                    email: this.state.email,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    password: this.state.password,
                    loading: false
                })
                localStorage.setItem('user_id', register.data.user_id)
                this.props.history.goBack()
            }
            catch(err) {
                this.setState({ loading: false })
                if (err.response.data === 'email already used') alert('Email already used')
                else if (err.response.data === 'invalid email') alert('Invalid email')
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
                        <form onSubmit={this.handleRegister}>
                            <input placeholder='Enter email' onChange={(e) => {this.setState({email: e.target.value})}} />
                            <input placeholder='First Name' onChange={(e) => {this.setState({firstname: e.target.value})}} />
                            <input placeholder='Last Name' onChange={(e) => {this.setState({lastname: e.target.value})}} />
                            <input type='password' placeholder='Create password' onChange={(e) => {this.setState({password: e.target.value})}} />
                            <span>At least 6 characters</span>
                            <BarLoader
                                css={override}
                                sizeUnit={"px"}
                                width={410}
                                color={'#006AFF'}
                                loading={this.state.loading}
                            />
                            {this.state.loading ? null : <button>Submit</button>}
                        </form>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
    
}