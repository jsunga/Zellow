import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import type from '../assets/type.jpg'
import './Post.scss'

export default class Post extends Component {

    render() {
        return (
            <div className='post'>
                <div className='background'>
                    <div>
                        <h1>The simplest way to list your rental and manage it</h1>
                        <button>Get started</button>
                        <span>Already have an account? <Link to='/user/login' className='link'>Sign in</Link></span>
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
                            <button>Create a listing</button>
                        </section>
                        <section className='img-container'>
                            <img src={type} alt='pic' />
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}
