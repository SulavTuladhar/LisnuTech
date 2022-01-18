import React, { Component } from 'react'
import { handleError } from '../../../utils/errorHandler';
import { httpClient } from '../../../utils/httpClient';
import { notify } from '../../../utils/toaster';
const IMG_URL = process.env.REACT_APP_IMG_URL;


const defaultForm = {
    title : '',
    description: '',
    content: ''
}

export class editSingleBlog extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                ...defaultForm
            },
            isLoading: false,
            isSubmitting: false,
            fileToUpdate: []
        }
    }

    componentDidMount(){
        this.contentId = this.props.match.params['id'];
        httpClient.GET(`/blog/${this.contentId}`)
            .then(res=>{
                this.setState({
                    data: res.data
                })
            })
            .catch(err=>{
                handleError(err)
            })
    }

    
    handleChange = e =>{
        let {name, value, type, files} = e.target;
        if(type === 'file'){
            console.log('file zero index>>', files)
            // Single File Upload
            return this.setState({
                fileToUpdate: files
            })
        }
        this.setState(preState=>({
            data: {
                ...preState.data,
                [name]: value
            }
        }))
    }

    onSubmit = e =>{
        e.preventDefault();
        this.setState({
            isSubmitting: true
        })
        httpClient.UPLOAD('PUT',`/blog/${this.contentId}`, this.state.data ,this.state.fileToUpdate)
            .then(res=>{
                notify.showInfo('content updated sucessfully');
                this.props.history.push('/editBlog');
            })
            .catch(err=>{
                notify.showError(err)
                this.setState({
                    isSubmitting: false
                })
            })
            .finally(()=>{
                this.setState({
                    isSubmitting: false
                })
            })
    }

    render() {
        return (
            <>
                 <section section className='container-fluid ' >
            <div className='container  d-flex align-items-center justify-content-center'>
                <form onSubmit={this.onSubmit} className='form ' noValidate>
                    <div className='rows'>
                        <div className='col-12 text-center'>
                        <h1> Edit Graphics Design Content </h1> 
                        </div>
                        <div className='col-12 container-fluid '>
                            <label htmlFor='description'> Image </label>
                            <input type='file' onChange={this.handleChange} className='form-control' />
                            <img src={`${IMG_URL}/${this.state.data.img}`} className='img-fluid' />
                        </div>
                        <div className='col-12'>
                            <label htmlFor='title'> Title </label>
                            <input type='text' name='title' id='title' value={this.state.data.title} onChange={this.handleChange} className='form-control' />
                        </div>

                        <div className='col-12'>
                            <label htmlFor='description'> Description </label>
                            <input type='text' name='description' id='description' value={this.state.data.description} onChange={this.handleChange} className='form-control' />
                        </div>

                        <div className='col-12'>
                            <label htmlFor='content'> Content </label>
                            <textarea cols={12} name='content' id='content' value={this.state.data.content} onChange={this.handleChange} className='form-control' />
                        </div>
                        
                        <div className='col-12 text-center'>
                            <button className='btn btn-primary mb-5 mt-2' style={{width: "14vw", height: '6vh'}}> Submit </button>
                        </div>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                </form>
            </div>
        </section>
            </>
        )
    }
}
