import React, { Component } from 'react'
import home from '../../assets/home.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import './Footer.scss'

export default class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <main>
                    <ul>
                        <li>About</li>
                        <li>Estimates</li>
                        <li>Research</li>
                        <li>Careers</li>
                        <li>Help</li>
                        <li>Advertise</li>
                        <li>Terms of use and Privacy</li>
                        <li>Ad Choice</li>
                        <li>Blog</li>
                        <li>AI</li>
                    </ul>
                </main>
                <div className='image'>
                    <h1>
                        <img src={home} height='36px' width='36px' alt='logo' />
                        <span>Zellow</span>
                        <img src={facebook} height='36px' width='36px' alt='logo' />
                        <img src={twitter} height='36px' width='36px' alt='logo' />
                    </h1>
                    <div></div>
                </div>
            </div>
        )
    }

}
