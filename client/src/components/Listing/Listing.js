import React, { Component } from 'react'
import './Listing.scss'
import axios from 'axios'

export default class Listing extends Component {

    state = {
        listing: [],
        photos: [],
        tags: []
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.getListing(id)
        this.getTags(id)
    }

    getListing = async id => {
        let details = await axios.get(`/api/listing/retrieve/${id}`)
        this.setState({ listing: details.data })
        let photos = await axios.get(`/api/listing/photos/${details.data.listing_id}`)
        this.setState({ photos: photos.data })
        console.log(this.state.listing)
    }

    getTags = async id => {
        try {
            let tags = await axios.get(`/api/listing/tags/${id}`)
            this.setState({ tags: tags.data })
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        const { listing, photos, tags } = this.state
        return (
            <div className='listing'>
                <div className='left-container'>
                    <h1>${listing.price} <span>{listing.address}, {listing.zipcode}</span></h1>
                    <section className='image-gallery'>

                    </section>
                    <section className='overview'>
                        <h1>Overview</h1>
                        <ul>
                            <li>{listing.housing_type}</li>
                            <li>{listing.bedroom} Bedrooms</li>
                            <li>{listing.bathroom} Bathrooms</li>
                            <li>{listing.squarefoot} sqft</li>
                        </ul>
                    </section>
                    <section className='description'>
                        <h1>Description</h1>
                        <p>{listing.description}</p>
                    </section>
                </div>
                <div className='right-container'>

                </div>
            </div>
        )
    }

}
