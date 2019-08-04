import React from 'react'
import { Link, withRouter }  from 'react-router-dom'
import './Home.scss'

const Listings = props => {

    return (
        <div className='listings'>
            <h2>Bay Area Listings</h2>
            {props.listings.map(item => (
                <Link to={`/listing/${item.listing_id}`} key={item.listing_id} target="_blank">
                    <div className='card'>
                        <section><img src={item.thumbnail} alt='thumbnail' /></section>
                        <section>

                        </section>
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default withRouter(Listings)