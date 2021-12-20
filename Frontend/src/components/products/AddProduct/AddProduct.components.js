import React, { Component } from 'react'
import ProductForm from '../ProductForm/ProductForm.components'

export class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isSubmitting: false
        }
    }

    add = (data)=>{
        console.log('function in add product componetn', data)
        this.setState({
            isSubmitting: true
        });
        // API CALL
    }
    
    render() {
        return (
            <ProductForm 
                isSubmitting={this.state.isSubmitting}
                title = "Add Product"
                isAdd= {true} 
                submitCallback = {this.add}
            />
        )
    }
}
