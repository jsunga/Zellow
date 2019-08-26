import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Landing.scss'

export default class Landing extends Component {

    state = {
        query: ''
    }

    handleSearch = e => {
        e.preventDefault()
        let query = this.state.query
        query = query.replace(/ /g,"+")
        this.props.history.push(`/for_rent/?queue=${query}`)
    }

    render() {
        return (
            <>
            <Navbar />
            <div className='landing'>
                <div className='background'>
                    <h1>Homes in the Bay Area</h1>
                    <h2>We'll help you find a place you'll love.</h2>
                    <form onSubmit={this.handleSearch}>
                        <input 
                            type='text' 
                            placeholder='Enter a city or ZIP code' 
                            value={this.state.query}
                            onChange={e => this.setState({query: e.target.value})}
                        />
                    </form>
                </div>
                <div className='details'>
                    <div className='container'>
                        <h1>We have the best listings with constant new updates.</h1>
                        <h1>So you'll never miss a beat.</h1>
                        <span></span>
                        <div>
                            <section>
                                <h2>Buy a home</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nullam et lorem dictum magna imperdiet pretium eu nec nisi. 
                                    Donec vehicula porta erat ut mattis. Nam dapibus lectus tempus 
                                    eros auctor, et accumsan mi vestibulum.
                                </p>
                                <button onClick={() => this.props.history.push('/for_rent/?queue=')}>Search homes</button>
                            </section>
                            <section>
                                <h2>Sell a home</h2>
                                <p>
                                    Maecenas consectetur efficitur ex nec euismod. Vivamus porttitor 
                                    vel quam eget dictum. Aliquam id ultricies metus, nec ullamcorper 
                                    nisi. Nulla quis accumsan ex. Aliquam eu urna et leo venenatis 
                                    faucibus vitae sit amet tellus.
                                </p>
                                <button onClick={() => this.props.history.push('/list_your_rental')}>See your options</button>
                            </section>
                            <section>
                                <h2>Rent a home</h2>
                                <p>
                                    Nam imperdiet aliquam ligula at interdum. Aenean sed purus volutpat, 
                                    malesuada orci eget, fringilla sapien. Aliquam dolor orci, accumsan 
                                    at imperdiet nec, molestie id leo. Donec maximus sem et mi posuere.
                                    Curabitur vel nisi magna.
                                </p>
                                <button onClick={() => this.props.history.push('/for_rent/?queue=')}>Find rentals</button>
                            </section>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            </>
        )
    }

}
