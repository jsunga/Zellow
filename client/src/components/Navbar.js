import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/home.png'
import '../styles/navbar.scss'

export default class Navbar extends Component {

    render() {
        return (
            <div className='navbar'>
                <section className='left-container'>
                    <ul className='left-wrapper'>
                        <Link to='/for_rent' className='link'><li>Rent</li></Link>
                        <Link to='/homes' className='link'><li>Buy</li></Link>
                        <li><form><input placeholder='Enter city or ZIP code' /></form></li>
                    </ul>
                </section>
                <section className='middle-container'>
                    <Link to='/' className='link'><h1><img src={home} height='36px' width='36px' alt='logo' />Zellow</h1></Link>
                </section>
                <section className='right-container'>
                    <ul className='right-wrapper'>
                        <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                        <Link to='/sell' className='link'><li>Sell</li></Link>
                        <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                    </ul>
                </section>
                <div className='mobile'>
                    <Link to='/' className='link'><h1><img src={home} height='36px' width='36px' alt='logo' />Zellow</h1></Link>
                    <ul>
                        <li><form><input placeholder='Enter city or ZIP code' /></form></li>
                        <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                        <Link to='/for_rent' className='link'><li>Rent</li></Link>
                        <Link to='/homes' className='link'><li>Buy</li></Link>
                        <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                        <Link to='/sell' className='link'><li>Sell</li></Link>
                    </ul>
                </div>
            </div>
        )
    }

}
