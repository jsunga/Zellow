import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {

    render() {
        return (
            <div className='home'>
                <div className='left-container'>
                    <main>
                        <h2>Filter by</h2>
                        <label>Home Type</label>
                        <select>
                            <option value="">Any</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                        <label>Bedrooms</label>
                        <select>
                            <option value="">Any</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                        <label>Bathrooms</label>
                        <select>
                            <option value="">Any</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                        <label>Price</label>
                        <select>
                            <option value="">Any</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                        <button>Apply filter</button>
                    </main>
                </div>
                <div className='right-container'>
                    
                </div>
            </div>
        )
    }

}
