import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Form.scss'
import axios from 'axios'

export default class Form extends Component {

    state = {
        user_id: localStorage.getItem('user_id'),
        address: '',
        city: '',
        state: 'California',
        zipcode: '',
        bedroom: '',
        bathroom: '',
        squarefoot: '',
        price: '',
        distance: '5',
        housing_type: '',
        description: '',
        tags: '',
        images: []
    }

    handlePost = (e) => {
        e.preventDefault()
    
        //client validation
        const err = this.validate()

        if (!err) {
            this.setState({ isLoading: true })
          
            //step 1: post a listing and receive a listing_id
            axios.post('/api/listing', {
                user_id: this.state.user_id,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                bedroom: this.state.bedroom,
                bathroom: this.state.bathroom,
                squarefoot: this.state.squarefoot,
                price: this.state.price,
                distance: this.state.distance,
                housing_type: this.state.housing_type,
                description: this.state.description
            })
            .then(res => {
    
                //step2: post tags
                let tags = this.state.tags
                tags = tags.replace(/\s/g,'')
                tags = tags.replace(/,/g, '+')
                axios.post(`/api/listing/tags/${tags}`, {
                    listingId: res.data.listing_id
                })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                })
              
                //step3: post images
                const { images } = this.state
                let formdata = new FormData()
                for (let i = 0; i < images.length; i++) {
                    formdata.append('photo', images[i])
                }
                axios({
                    method: 'post',
                    url: `/api/listing/photos/upload/${res.data.listing_id}`,
                    data: formdata,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(res => {
                    console.log(res.data)
                    this.props.history.push('/mylistings')
                })
                .catch(err => {
                    console.log(err)
                })
    
            })
            .catch(err => {
                if (err.response.status === 400) {
                    this.props.history.push('/404')
                }
            })
    
        } else {
            console.log('Submission Error')
        }
    
    }

    validate = () => {
        let isError = false
        const { address, city, zipcode, bedroom, bathroom, squarefoot, price, housing_type, images } = this.state

        if (address.length < 6 || city.length === 0 || zipcode.length !== 5 || bedroom.length === 0 || bathroom.length === 0
            || squarefoot.length === 0 || price.length === 0 || housing_type.length === 0 || images.length === 0) {

            isError = true
            alert('All fields required')
        }


        return isError
    }

    handleFile = e => {
        const images = e.target.files
        this.setState({ images })
    }

    changeZIP = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({zipcode: e.target.value})
        }
    }

    changePrice = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({price: e.target.value})
        }
      }
    
    changeSquareFoot = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({squarefoot: e.target.value})
        }
    }

    render() {
        if (!this.state.user_id) return <Redirect to='/list_your_rental' />
        
        return (
            <>
            <Navbar />
            <form className='post-form' onSubmit={this.handlePost}>
                <h1>List your property</h1>
                <section>
                    <h2>Location</h2>
                    <input placeholder='Address' onChange={e => {this.setState({address: e.target.value})}} />
                    <select onChange={e => {this.setState({city: e.target.value})}}>
                        <option value="">City</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Daly City">Daly City</option>
                        <option value="San Bruno">San Bruno</option>
                        <option value="South City">South City</option>
                        <option value="Colma">Colma</option>
                        <option value="Oakland">Oakland</option>
                    </select>
                    <input placeholder='State' value={this.state.state} onChange={() => {}} />
                    <input placeholder='ZIP Code' maxLength="5" value={this.state.zipcode} onChange={e => {this.changeZIP(e)}} />
                </section>
                <section>
                    <h2>Details</h2>
                    <input placeholder='Price $' maxLength="6" value={this.state.price} onChange={e => {this.changePrice(e)}} />
                    <select onChange={e => {this.setState({housing_type: e.target.value})}}>
                        <option value="">Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhome">Townhome</option>
                    </select>
                    <select onChange={e => {this.setState({bedroom: e.target.value})}}>
                        <option value="">Number of Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <select onChange={e => {this.setState({bathroom: e.target.value})}}>
                        <option value="">Number of Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input placeholder='Squarefoot' maxLength="6" value={this.state.squarefoot} onChange={e => {this.changeSquareFoot(e)}} />
                    <input placeholder='Tags ex. garage, kitchen, pets' maxLength="1000" onChange={(e) => {this.setState({tags: e.target.value})}} />
                    <label>Upload Images</label>
                    <input type='file' name='file' onChange={e => this.handleFile(e)} multiple />
                </section>
                <section>
                    <h2>Description</h2>
                    <textarea maxLength="1000" placeholder="Tell us more" rows="3" onChange={e => {this.setState({description: e.target.value})}} />
                </section>
                <button>Submit</button>
            </form>
            </>
        )
    }
}
