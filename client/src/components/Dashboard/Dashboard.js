import React, { Component } from 'react'
import { Redirect } from 'react-router-dom' 
import Navbar from '../Navbar/Navbar'
import MyListings from './MyListings'
import Messages from './Messages'
import './Dashboard.scss'
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        view: 'LISTINGS',
        listings: [],
        conversation: [],
        header: [],
        sendingTo: '',
        message: '',
        noResults: true
    }

    componentDidMount() {
        this.getAllConversations()
    }

    getAllConversations = () => {
        axios.get('/api/message/myMessages')
        .then(res => {
            if (res.data.length === 0) this.setState({ noResults: true})
            else {
                const temp = []
                const conversations = res.data
                conversations.forEach(list => {
                    axios.get(`/api/listing/retrieve/${list.listing_id}`)
                    .then(res => {
                        temp.push(res.data)
                        console.log(temp)
                        this.setState({ 
                            listings: temp,
                            loading: false,
                        })
                    })
                    .catch(err => {
                        console.log(err.response.data)
                    })
                })
            }
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    getConversation = listing_id => {
        axios.get('/api/message/myMessages')
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].listing_id === listing_id) {
                    if (this.state.user_id === res.data[i].owner_id) {
                        this.setState({ sendingTo: res.data[i].renter_id })
                        break
                    } else {
                        this.setState({ sendingTo: res.data[i].owner_id })
                        break
                    }
                }
            }
        })
        .then(() => {
            axios.get(`/api/message/receive/${listing_id}/${this.state.sendingTo}`)
            .then(res => {
                this.setState({ conversation: res.data })
                this.getHeader(listing_id)
            })
            .catch(err => {
                console.log(err.response.data)
            })
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    getHeader = value => {
        axios.get(`/api/listing/retrieve/${value}`)
        .then(res => {
            this.setState({ header: res.data })
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    changeMessage = e => {
        this.setState({ message: e.target.value})
    }

    sendMessage = e => {
        e.preventDefault()
        axios.post('/api/message/send', {
            message: this.state.message,
            listingId: this.state.header.listing_id,
            recepientId: this.state.sendingTo,
        })
        .then(() => {
            axios.get(`/api/message/receive/${this.state.header.listing_id}/${this.state.sendingTo}`)
            .then(res => {
                this.setState({
                    message: '',
                    conversation: res.data,
                })
            })
            .catch(err => {
                console.log(err.response.data)
            })
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    render() {
        if (this.state.user_id === null) return <Redirect to='/' />

        return (
            <>
                <Navbar />
                <div className='dashboard'>
                    <div className='wrapper'>
                        <section className='left-container'>
                            <main className='dashboard-navbar'>
                                <h2>Dashboard</h2>
                                <ul>
                                    <li onClick={() => {this.setState({view: 'LISTINGS'})}}>My Listings</li>
                                    <li onClick={() => {this.setState({view: 'MESSAGES'})}}>Messages</li>
                                </ul>
                            </main>
                            {this.state.view === 'MESSAGES' ? (
                                <main className='conversations'>
                                    <h2>Messages</h2>
                                    {this.state.listings.map(item => (
                                        <div className='listing-conversations' key={item.listing_id} onClick={() => {this.getConversation(item.listing_id)}}>
                                            <div>{item.address}, {item.zipcode}</div>
                                        </div>
                                    ))}
                                </main>
                            ) : null}
                        </section>
                        <section className='right-container'>
                            {this.state.view === 'LISTINGS' ? <MyListings /> : null}
                            {this.state.view === 'MESSAGES' ? 
                                <Messages 
                                    conversation={this.state.conversation}
                                    user_id={this.state.user_id}
                                    header={this.state.header}
                                    sendMessage={this.sendMessage}
                                    message={this.state.message}
                                    changeMessage={this.changeMessage}
                                /> : null}
                        </section>
                    </div>
                </div>  
            </>
        )
    }

}
