import React, { Component } from 'react'
import { asyncForEach } from '../../utils'
import Filter from './Filter'
import Listings from './Listings'
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {

    state = {
        listings: [],
        isLoading: true,
        noResults: false,
    }

    componentDidMount() {
        const query = this.props.location.search
        if (query === '?queue=' || query === '?queue=all' || query.length === 0) this.getAllListings()
        else this.handleSearch(query)
    }

    handleSearch = async query => {
        let listings = await axios.get(`/api/listing/search/${query}`)
        if (listings.data.length === 0) this.setState({ noResults: true })
        else this.getThumbnails(listings)
    }

    getAllListings = async _ => {
        let listings = await axios.get('/api/listing')
        this.getThumbnails(listings)
    }

    getThumbnails = async listings => {
        let newListings = []
        listings.data.forEach(listing => { if (listing.confirmation === true) newListings.push(listing) })
        asyncForEach(newListings, async listing => {
            let photos = await axios.get(`/api/listing/photos/${listing.listing_id}`)
            listing.thumbnail = photos.data[0].photo_url
            this.setState({ listings: newListings })
        })
    }

    render() {
        return (
            <div className='home'>
                <div className='left-container'>
                    <Filter />
                </div>
                <div className='right-container'>
                    {this.state.noResults ? <h1>No Results...</h1> : <Listings listings={this.state.listings} /> }
                </div>
            </div>
        )
    }

}
