import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import type from '../../assets/type.jpg'
import './Post.scss'

export default class Post extends Component {

    state = {
        user_id: localStorage.getItem('user_id')
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
            <Navbar />
            <div className='post'>
                <div className='background'>
                    <div>
                        <h1>The simplest way to list your rental and manage it</h1>
                        {this.state.user_id ? (
                            <button onClick={() => this.props.history.push('/post')}>Get started</button>
                        ) : (
                            <button onClick={() => this.props.history.push('/user/register')}>Get started</button>
                        )}
                        {this.state.user_id ? (
                            null
                        ) : (
                            <span>Already have an account? <Link to='/user/login' className='link'>Sign in</Link></span>
                        )}
                    </div>
                </div>
                <div className='list-your-property'>
                    <div className='container'>
                        <section>
                            <h1>List your property</h1>
                            <p>
                                Pellentesque consectetur litora leo vivamus platea diam nec, 
                                in praesent potenti sollicitudin felis ac, nam etiam enim 
                                potenti mattis ut sollicitudin justo venenatis dui etiam venenatis 
                                mollis tincidunt luctus quisque pellentesque.
                            </p>
                            <p>
                                Turpis vivamus torquent aptent vehicula aptent quis sed, lectus 
                                commodo at ultricies morbi donec, sociosqu mattis fames netus 
                                accumsan vehicula.
                            </p>
                            {this.state.user_id ? (
                                <button onClick={() => this.props.history.push('/post')}>Create a listing</button>
                            ) : (
                                <button onClick={() => this.props.history.push('/user/register')}>Create a listing</button>
                            )}
                        </section>
                        <section className='img-container'>
                            <img src={type} alt='pic' />
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
            </>
        )
    }

}
