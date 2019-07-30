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
                                <h2>Buy a home</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nullam et lorem dictum magna imperdiet pretium eu nec nisi. 
                                    Donec vehicula porta erat ut mattis. Nam dapibus lectus tempus 
                                    eros auctor, et accumsan mi vestibulum.
                                </p>
                                <button>Search homes</button>
                            </section>
                            <section>
                                <h2>Sell a home</h2>
                                <p>
                                    Maecenas consectetur efficitur ex nec euismod. Vivamus porttitor 
                                    vel quam eget dictum. Aliquam id ultricies metus, nec ullamcorper 
                                    nisi. Nulla quis accumsan ex. Aliquam eu urna et leo venenatis 
                                    faucibus vitae sit amet tellus.
                                </p>
                                <button>See your options</button>
                            </section>
                            <section>
                                <h2>Rent a home</h2>
                                <p>
                                    Nam imperdiet aliquam ligula at interdum. Aenean sed purus volutpat, 
                                    malesuada orci eget, fringilla sapien. Aliquam dolor orci, accumsan 
                                    at imperdiet nec, molestie id leo. Donec maximus sem et mi posuere.
                                    Curabitur vel nisi magna.
                                </p>
                                <button>Find rentals</button>
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
