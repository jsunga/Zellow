import React, { Component } from 'react'
import { asyncForEach } from '../../utils'
import Navbar from '../Navbar/Navbar'
import Filter from './Filter'
import MobileFilter from './MobileFilter'
import Listings from './Listings'
import queryString from 'query-string'
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {

    state = {
        listings: [],
        isLoading: true,
        noResults: false,
        filter: false,
        type: '',
        beds: '',
        baths: '',
        priceMax: '',
    }

    componentDidMount() {
        //get search input
        const query = this.props.location.search
        //parse the query for filtering
        const parsed = queryString.parse(query)

        //save the query in filter options
        this.setState({
            queue: parsed.queue,
            type: parsed.type,
            beds: parsed.beds,
            baths: parsed.baths,
            priceMax: parsed.priceMax,
        })
        
        //get all listings if no search input
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
        listings.data.forEach(listing => { newListings.push(listing) }) //if (listing.confirmation === true)
        asyncForEach(newListings, async listing => {
            let photos = await axios.get(`/api/listing/photos/${listing.listing_id}`)
            listing.thumbnail = photos.data[0].photo_url
            this.setState({ listings: newListings })
        })
    }

    filterSearch = e => {
        e.preventDefault()
        const query = this.props.location.search
        const search = query.split("&")
        const type =  e.target.elements.type.value
        const beds =  e.target.elements.beds.value
        const baths =  e.target.elements.baths.value
        const priceMax =  e.target.elements.priceMax.value
        this.props.history.push(`${search[0]}&type=${type}&beds=${beds}&baths=${baths}&priceMax=${priceMax}`)
    }

    changeType = e => { this.setState({ type: e.target.value}) }
    
    changeBeds = e => { this.setState({ beds: e.target.value}) }
    
    changeBaths = e => { this.setState({ baths: e.target.value}) }
    
    changePrice = e => { this.setState({ priceMax: e.target.value}) }

    render() {

        let props = {
            filterSearch: this.filterSearch,
            type: this.state.type,
            beds: this.state.beds,
            baths: this.state.baths,
            priceMax: this.state.priceMax,
            changeType: this.changeType,
            changeBeds: this.changeBeds,
            changeBaths: this.changeBaths,
            changePrice: this.changePrice,
        }

        return (
            <>
            <Navbar />
            <div className='home'>
                <div className='left-container'>
                    <Filter {...props} />
                </div>
                <div className='right-container'>
                    <div className='toggle-filter'>
                        <button onClick={() => this.setState({ filter: !this.state.filter })}>Filter</button>
                    </div>
                    {this.state.filter ? <MobileFilter {...props} /> : null }
                    {this.state.noResults ? <h1>No Results...</h1> : <Listings listings={this.state.listings} /> }
                </div>
            </div>
            </>
        )
    }

}
