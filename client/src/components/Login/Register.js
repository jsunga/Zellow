import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
import './Login.scss'

export default class Register extends Component {

    render() {
        return (
            <>
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
                        <form>
                            <input placeholder='Enter email' />
                            <input placeholder='Create password' />
                            <span>At least 6 characters</span>
                            <button>Submit</button>
                        </form>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
    
}