import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Error.scss'

const Error = _ => {

    return (
        <>
            <Navbar />
            <div className='error-component'>
                <h1>404</h1>
                <h2>Oops! Something went wrong..</h2>
            </div>
        </>
    )
}

export default Error