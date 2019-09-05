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
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhome">Townhome</option>
                    </select>
                    <select>
                        <option value="">Number of Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select>
                        <option value="">Number of Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input placeholder='Squarefoot' />
                    <input placeholder='Tags ex. garage, kitchen, pets' />
                    <label>Upload Images</label>
                    <input type='file' name='file' />
                </section>
                <section>
                    <h2>Description</h2>
                    <textarea />
                </section>
                <button>Submit</button>
            </form>
            </>
        )
    }
}
