import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { handleError } from '../../utils/errorHandler';
import { httpClient } from '../../utils/httpClient';
import { notify } from '../../utils/toaster';

export class GraphicsDesign extends Component {
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
        httpClient.GET('/graphicsDesign', true)
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
            httpClient.DELETE(`/graphicsDesign/${id}`,true)
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
        console.log('content state>>', this.state.content)
        let content = this.state.isLoading
            ? <p> Showing Loader </p>
            : <>
            
            {
                (this.state.content || []).map((content,index) =>(
                    this.props.dashboard
                        ?   <div className='row mb-5' key={index}>
                                <div className='col-12 col-lg-4'>
                                    <h1> {content.title} </h1>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        {content.description}
                                    </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-2 d-flex flex-column align-items-center justify-content-around'>
                                    <button className='btn btn-primary'> <Link to={`/editGraphicsDesignContent/${content._id}`} style={{color: "#fff"}}>  edit </Link> </button>
                                    <button className='btn btn-primary' onClick={()=>this.removeContent(content._id,index)}> delete </button>
                                </div>
                            </div>
                        :   <div className='row mb-5' key={index}>
                                <div className='col-12 col-lg-4'>
                                    <h1> hello {content.title} </h1>
                                </div>
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
                <section className='d-flex align-items-center text-center mb-5' style={{height: "80vh", background: "#000", color: "#fff"}}>
                    <div className='container'>
                        <h1> Graphics Design </h1>
                    </div>
                </section>

                <section>
                    <div className='container pt-5 mb-5'>
                    {content}
                    </div>
                </section>
            </section>
        )
    }
}
