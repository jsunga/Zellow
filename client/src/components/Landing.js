import React, { Component } from 'react'
import home from '../assets/home.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import '../styles/landing.scss'

export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='background'>
                    <h1>Homes in the Bay Area</h1>
                    <h2>We'll help you find a place you'll love.</h2>
                    <form>
                        <input type='text' placeholder='Enter a city or ZIP code' />
                    </form>
                </div>
                <div className='details'>
                    <div className='container'>
                        <h1>We have the best listings with constant new updates.</h1>
                        <h1>So you'll never miss a beat.</h1>
                        <div>
                            <section>

                            </section>
                            <section>
                                
                            </section>
                            <section>
                                
                            </section>
                        </div>
                    </div>
                </div>
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
            </div>
        )
    }
}
