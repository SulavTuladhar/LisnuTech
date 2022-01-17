import React, { Component } from 'react';
import './firstPage.components.css';

export class FirstPage extends Component {
    constructor(){
        super();
        this.state = ({

        })
    }
    
    render() {
        return (
            <>
                <section className='first-page d-flex align-items-center'>
                    <div className='container'>
                        <h1 style={{fontSize: '3rem'}}> GROW YOUR BUISNESS </h1>
                        <h2 className='mt-2'> TARGET NEW CUSTOMER THROUGH SOCIAL MEDIA </h2>
                        <div className='contact-btn mt-4'> <h6> C O N T A C T S </h6> </div>
                    </div>
                    <video src='./images/video.mp4' muted loop autoPlay/>
                </section>
            </>
        )
    }
}
