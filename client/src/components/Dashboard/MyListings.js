import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import './MyListings.scss'
import axios from 'axios'

export default class MyListings extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        listings: [],
        noResults: false
    }

    componentDidMount() {
        axios.get(`/api/listing/owner/${this.state.user_id}`)
        .then(res => {
            if (res.data.length === 0) this.setState({ noResults: true})
            else {
                const listingsTemp = res.data
                const temp = []
                listingsTemp.forEach(list => {
                    axios.get(`/api/listing/retrieve/${list.listing_id}`)
                    .then(res => {
                        temp.push(res.data)
                        temp.forEach(list => {
                            axios.get(`/api/listing/photos/${list.listing_id}`)
                            .then(res => {
                                list.thumbnail = res.data[0].photo_url
                                console.log(temp)
                                this.setState({
                                    listings: temp,
                                    isLoading: false,
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
                })
            }
        })
        .catch(() => {
            console.log('error getting listings')
        })
    }

    render() {
        return (
            <div className='my-listings'>
                <h2>My Listings</h2>
                {this.state.listings.map(item => (
                    <Link to={`listing/${item.listing_id}`} className='link'><div className='listing-wrapper' key={item.listing_id}>
                        <section className='listing-left-container'>
                            <img src={item.thumbnail} width='175' height='100' alt='thumbnail' />
                        </section>
                        <section className='listing-right-container'>
                            <h4>Confirmation: {item.confirmation ? 'Accepted' : 'Pending'}</h4>
                            <h3>${item.price}</h3>
                            <div className='details'>
                                <span>{item.bedroom} bd | {item.bathroom} bd | {item.squarefoot} sqft</span>
                                <div className='address'>{item.address}, {item.zipcode}</div>
                            </div>
                        </section>
                    </div></Link>
                ))}
            </div>
        )
    }

}
