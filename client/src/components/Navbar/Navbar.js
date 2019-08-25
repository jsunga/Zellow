import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import home from '../../assets/home.png'
import './Navbar.scss'

class Navbar extends Component {

    state = {
        query: '',
        user_id: localStorage.getItem('user_id')
    }

    handleSearch = e => {
        e.preventDefault()
        let query = this.state.query
        query = query.replace(/ /g,"+")
        this.props.history.push(`/for_rent/?queue=${query}`)
    }

    handleLogOut = () => {
        localStorage.removeItem('user_id')
        this.props.history.push('/user/login')
    }

    render() {
        return (
            <div className='navbar'>
                <section className='left-container'>
                    <ul className='left-wrapper'>
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
                    {this.state.user_id ? (
                        <ul className='right-wrapper'>
                            <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                            <Link to='/dashboard' className='link'><li>Dashboard</li></Link>
                            <li><button onClick={this.handleLogOut}>Log Out</button></li>
                        </ul>
                    ) : (
                        <ul className='right-wrapper'>
                            <Link to='/for_rent/?queue=' className='link'><li>Rent</li></Link>
                            <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                            <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                        </ul>
                    )}
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
                        {this.state.user_id ? (
                            <>
                                <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                                <Link to='/dashboard' className='link'><li>Dashboard</li></Link>
                                <li><button onClick={this.handleLogOut}>Log Out</button></li>
                            </>
                        ) : (
                            <>
                                <Link to='/user/login' className='link'><li>Sign in or Join</li></Link>
                                <Link to='/list_your_rental' className='link'><li>List your rental</li></Link>
                                <Link to='/for_rent/?queue=' className='link'><li>Rent</li></Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        )
    }

}

export default withRouter(Navbar)