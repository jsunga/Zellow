import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'

export default class Form extends Component {

    state = {
        user_id: localStorage.getItem('user_id')
    }

    render() {
        if (!this.state.user_id) return <Redirect to='/list_your_rental' />
        
        return (
            <div>
                Post
            </div>
        )
    }
}
