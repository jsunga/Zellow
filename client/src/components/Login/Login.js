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

export default class Login extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        email: '',
        password: '',
        loading: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
                this.setState({ loading: true })
                let login = await axios.post('/api/user/login', {
                    email: this.state.email,
                    password: this.state.password,
                    loading: false
                })
                localStorage.setItem('user_id', login.data.user_id)
                this.props.history.goBack()
            }
            catch(err) {
                this.setState({ loading: false })
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
                            <BarLoader
                                css={override}
                                sizeUnit={"px"}
                                width={410}
                                color={'#006AFF'}
                                loading={this.state.loading}
                            />
                            {this.state.loading ? null : <button>Sign in</button>}
                        </form>
                    </section>
                </div>
                <Footer />
            </>
        )
    }

}
