import React, { Component } from 'react'
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
            </div>
        )
    }
}
