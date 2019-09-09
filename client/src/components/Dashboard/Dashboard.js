import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import MyListings from './MyListings'
import Messages from './Messages'
import './Dashboard.scss'
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        view: 'LISTINGS',
        listings: [],
        noResults: true
    }

    componentDidMount() {
        this.getAllConversations()
        console.log(this.state)
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

    render() {
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
                                </main>
                            ) : null}
                        </section>
                        <section className='right-container'>
                            {this.state.view === 'LISTINGS' ? <MyListings /> : null}
                            {this.state.view === 'MESSAGES' ? <Messages /> : null}
                        </section>
                    </div>
                </div>  
            </>
        )
    }

}
