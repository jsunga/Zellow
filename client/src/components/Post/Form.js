import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Form.scss'

export default class Form extends Component {

    state = {
        user_id: localStorage.getItem('user_id')
    }

    render() {
        if (!this.state.user_id) return <Redirect to='/list_your_rental' />
        
        return (
            <>
            <Navbar />
            <form className='post-form'>
                <h1>List your property</h1>
                <section>
                    <h2>Location</h2>
                    <input placeholder='Address' />
                    <select>
                        <option value="">City</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Daly City">Daly City</option>
                        <option value="San Bruno">San Bruno</option>
                        <option value="South City">South City</option>
                        <option value="Colma">Colma</option>
                        <option value="Oakland">Oakland</option>
                    </select>
                    <input placeholder='State' />
                    <input placeholder='ZIP Code' />
                </section>
                <section>
                    <h2>Details</h2>
                    <input placeholder='Price' />
                    <select>
                        <option value="">Property Type</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Daly City">Daly City</option>
                        <option value="San Bruno">San Bruno</option>
                        <option value="South City">South City</option>
                        <option value="Colma">Colma</option>
                        <option value="Oakland">Oakland</option>
                    </select>
                    <select>
                        <option value="">Number of Bedrooms</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Daly City">Daly City</option>
                        <option value="San Bruno">San Bruno</option>
                        <option value="South City">South City</option>
                        <option value="Colma">Colma</option>
                        <option value="Oakland">Oakland</option>
                    </select>
                    <select>
                        <option value="">Number of Bathrooms</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Daly City">Daly City</option>
                        <option value="San Bruno">San Bruno</option>
                        <option value="South City">South City</option>
                        <option value="Colma">Colma</option>
                        <option value="Oakland">Oakland</option>
                    </select>
                    <input placeholder='Squarefoot' />
                </section>
            </form>
            </>
        )
    }
}
