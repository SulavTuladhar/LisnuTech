import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { handleError } from '../../../../utils/errorHandler';
import { httpClient } from '../../../../utils/httpClient';
import Aos, { AOS } from 'aos';
import 'aos/dist/aos.css'

import './secondPage.components.css';
const IMG_URL = process.env.REACT_APP_IMG_URL;


export class SecondPage extends Component {
    constructor(){
        super();

        this.state = ({
            isLoading: false,
            contents: []
        })
        
    }
    componentDidMount(){
        Aos.init({duration: 2000});
        httpClient.GET('/page/second-page', true)
        .then(res=>{
            this.setState({
                contents: res.data
            })
        })
        .catch(err=>{
            handleError(err);
        }) 
        .finally(()=>{
            this.setState({
                isLoading: false
            })
        })
    }
    render() {
        let content = this.state.isLoading
            ? <p> Show loader </p>
            : <>
                        {
                            (this.state.contents || []).map((content,index) => (
                                this.props.dashboard
                                    ? 
                                    <section className='second-page container-fluid pt-2 mt-5' style={{borderTop: "1px solid grey" ,overflowX: 'hidden'}} >
                                        <button className='btn btn-primary mb-2'> <Link to={`/secondPage/${content._id}`} style={{color: "#fff"}}> edit </Link> </button>
                                        <div className='row'  key={index}>
                                                <div className='col-12 col-lg-5 d-flex d-lg-block flex-column align-items-center pt-5' style={{height: "80vh"}} >
                                                <h1> {content.firstTitle} </h1>
                                                <p> {content.firstDescription} </p>
                                                <div className='black-button'> DROP US A LINE </div>
                                            </div>
                                
                                            <div className='col-12 col-lg-4 px-0'  style={{height: "80vh"}}>
                                                <img src={`${IMG_URL}/${content.img}`} style={{height: "100%", width: "100%"}} />
                                            </div>
                                            <div className='col-12 col-lg-3 d-flex d-lg-block flex-column align-items-center aside-img pt-5 ' style={{color: "#fff", background: "#000", height: "80vh"}}>
                                                <h1 > {content.secondTitle} </h1>
                                                <p> {content.secondDescription} </p>
                                                <div className='white-button'> LEARN MORE </div>
                                                </div>
                                        </div>
                                    </section>
                                    :    
                                        <section className='second-page container-fluid mt-1' style={{overflowX: 'hidden'}} >
                                            <div className='row'  key={index}>
                                                <div className='col-12 col-lg-5 d-flex d-lg-block flex-column align-items-center pt-5' style={{height: "80vh"}} >
                                                <h1> {content.firstTitle} </h1>
                                                <p> {content.firstDescription} </p>
                                                <div className='black-button'> DROP US A LINE </div>
                                            </div>
                                
                                            <div className='col-12 col-lg-4 px-0'  style={{height: "80vh"}}>
                                            <img src={`${IMG_URL}/${content.img}`} style={{height: "100%", width: "100%"}} />

                                            </div>
                                            <div data-aos="fade-left" className='col-12 col-lg-3 d-flex d-lg-block flex-column align-items-center aside-img pt-5 ' style={{color: "#fff", background: "#000", height: "80vh"}}>
                                                <h1 > {content.secondTitle} </h1>
                                                <p> {content.secondDescription} </p>
                                                <div className='white-button'> LEARN MORE </div>
                                                </div>
                                        </div>
                                    </section>
                                ))
                        }
        
                </>
        return (
            <>
                {content}
            </>
        )
    }
}