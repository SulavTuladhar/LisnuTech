import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { handleError } from '../../utils/errorHandler';
import { httpClient } from '../../utils/httpClient';
import { notify } from '../../utils/toaster';

export class DigitalMarketing extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: false,
            content: []
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        httpClient.GET('/digitalMarketing', true)
            .then(res=>{
                this.setState({
                    content: res.data
                })
            })
            .catch(err=>{
                handleError(err)
            })
            .finally(()=>{
                this.setState({
                    isLoading: false
                })
            })
    }

    removeContent(id,index){
        const confirmation = window.confirm("Are you sure to remove ?");
        if(confirmation){
            httpClient.DELETE(`/digitalMarketing/${id}`,true)
                .then(res=>{
                    notify.showInfo('Content removed Sucessful');
                    const { content } = this.state;
                    content.splice(index,1);
                    this.setState({
                        content
                    })
                })
                .catch(err=>{
                    handleError(err)
                })
        }
    }

    render() {
        let content = this.state.isLoading
            ? <p> loader here </p>
            : <>
                {
                    (this.state.content || []).map((content,index) => (
                        this.props.dashboard
                            ? <div className='row mb-5' key={index}>
                                    <div className='col-4'> <h2> hello {content.title} </h2> </div>
                                    <div className='col-6'> 
                                        <p>  
                                            {content.description}
                                        </p> 
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-2 d-flex flex-column align-items-center justify-content-around'>
                                            <button className='btn btn-primary'> <Link to={`/editDigitalMarketingContent/${content._id}`} style={{color: "#fff"}}>  edit </Link> </button>
                                            <button className='btn btn-primary' onClick={()=>this.removeContent(content._id,index)}> delete </button>
                                    </div>
                            </div>
                            : 
                            <div className='row mb-5' key={index}>
                                <div className='col-12 col-lg-4'> <h2> {content.title} </h2> </div>
                                <div className='col-12 col-lg-8'> 
                                    <p>  
                                        {content.description}
                                    </p> 
                                </div>
                            </div>

                            
                    ))
                }
            </>
        return (
            <section>
                <section className='d-flex align-items-center text-center mb-5' style={{height: "60vh", background: "#000", color: "#fff"}}>
                    <div className='container'>
                        <h1> Digital Marketing </h1>
                    </div>
                </section>

                <section className='pt-5'>
                    <div className='container'>
                        {content}
                    </div>
                </section>
            </section>
        )
    }
}
