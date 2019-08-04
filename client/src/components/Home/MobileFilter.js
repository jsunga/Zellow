import React from 'react'
import './MobileFilter.scss'

const MobileFilter = props => {
    return (
        <form className='mobile-filter' onSubmit={props.filterSearch}>
            <label>Home Type</label>
            <select name="type" value={props.type} onChange={props.changeType}>
                <option value="">Any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhome">Townhome</option>
            </select>
            <label>Bedrooms</label>
            <select name="beds" value={props.beds} onChange={props.changeBeds}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
            </select>
            <label>Bathrooms</label>
            <select name="baths" value={props.baths} onChange={props.changeBaths}>
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
            </select>
            <label>Price</label>
            <select name="priceMax" value={props.priceMax} onChange={props.changePrice}>
                <option value="">No Max</option>
                <option value="400">$400</option>
                <option value="600">$600</option>
                <option value="800">$800</option>
                <option value="1000">$1,000</option>
                <option value="1500">$1,500</option>
                <option value="2000">$2,000</option>
                <option value="2500">$2,500</option>
                <option value="3000">$3,000</option>
                <option value="3500">$3,500</option>
                <option value="4000">$4,000</option>
                <option value="5000">$5,000</option>
                <option value="7000">$7,000</option>
                <option value="10000">$10,000</option>
            </select>
            <button>Apply filter</button>
        </form>
    )
}

export default MobileFilter