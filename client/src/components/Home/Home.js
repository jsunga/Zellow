import React, { Component } from 'react'
import Filter from './Filter'
import Listings from './Listings'
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {

    state = {
        listings: []
    }

    componentDidMount() {
        this.getAllListings()
    }

    getAllListings = _ => {
        axios.get('/api/listing')
        .then(res => {
            let listings = res.data
            let newListings = []
            listings.forEach(listing => {
                if (listing.confirmation === true) {
                    newListings.push(listing)
                }
            })
            newListings.forEach(listing => {
                axios.get(`/api/listing/photos/${listing.listing_id}`)
                .then(res => {
                    listing.thumbnail = res.data[0].photo_url
                    this.setState({ listings: newListings })
                })
            })
        })
    }

    render() {
        return (
            <div className='home'>
                <div className='left-container'>
                    <Filter />
                </div>
                <div className='right-container'>
                    <Listings listings={this.state.listings} />
                </div>
            </div>
        )
    }

}
