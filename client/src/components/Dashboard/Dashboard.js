import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import MyListings from './MyListings'
import Messages from './Messages'
import './Dashboard.scss'

export default class Dashboard extends Component {

    state = {
        view: 'LISTINGS'
    }

    render() {
        return (
            <>
                <Navbar />
                <div className='dashboard'>
                    <div className='wrapper'>
                        <section className='left-container'>
                            <h2>Dashboard</h2>
                            <ul>
                                <li onClick={() => {this.setState({view: 'LISTINGS'})}}>My Listings</li>
                                <li onClick={() => {this.setState({view: 'MESSAGES'})}}>Messages</li>
                            </ul>
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
