import React from 'react'
import { Link, withRouter }  from 'react-router-dom'
import './Home.scss'

const Listings = props => {

    return (
        <div className='listings'>
            <h2>Bay Area Listings</h2>
            {props.listings.map(item => (
                <Link className='link' to={`/listing/${item.listing_id}`} key={item.listing_id} target="_blank">
                    <div className='card'>
                        <section><img src={item.thumbnail} alt='thumbnail' /></section>
                        <section>
                            <div className='title'>${item.price}</div>
                            <div className='type'>
                                <span className='circle' />
                                <span>{item.housing_type}</span>
                            </div>
                            <div className='details'>
                                <span>{item.bedroom} bd | </span>
                                <span>{item.bathroom} ba | </span>
                                {item.squarefoot} sqft
                            </div>
                            <div className='address'>{item.address}, {item.zipcode}</div>
                        </section>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default withRouter(Listings)