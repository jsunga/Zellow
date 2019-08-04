import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import home from '../../assets/home.png'
import './Navbar.scss'

class Navbar extends Component {

    state = {
        query: ''
    }

    handleSearch = e => {
        e.preventDefault()
        let query = this.state.query
        query = query.replace(/ /g,"+")
        this.props.history.push(`/for_rent/?queue=${query}`)
    }

    render() {
        return (
            <div className='navbar'>
                <section className='left-container'>
                    <ul className='left-wrapper'>
                        <Link to='/for_rent/?queue=' className='link'><li>Rent</li></Link>
                        <li>
                            <form onSubmit={this.handleSearch}>
                                <input 
                                    placeholder='Enter city or ZIP code' 
                                    value={this.state.query}
                                    onChange={e => this.setState({query: e.target.value})}
                                />
                            </form>
                        </li>
                    </ul>
                </section>
                <section className='middle-container'>
                    <Link to='/' className='link'><h1><img src={home} height='36px' width='36px' alt='logo' />Zellow</h1></Link>
                </section>
                <section className='right-container'>
                    <ul className='right-wrapper'>
                        <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                        <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                    </ul>
                </section>
                <div className='mobile'>
                    <Link to='/' className='link'><h1><img src={home} height='36px' width='36px' alt='logo' />Zellow</h1></Link>
                    <ul>
                        <li>
                            <form onSubmit={this.handleSearch}>
                                <input 
                                    placeholder='Enter city or ZIP code' 
                                    value={this.state.query}
                                    onChange={e => this.setState({query: e.target.value})}
                                />
                            </form>
                        </li>
                        <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                        <Link to='/for_rent/?queue=' className='link'><li>Rent</li></Link>
                        <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                    </ul>
                </div>
            </div>
        )
    }

}

export default withRouter(Navbar)