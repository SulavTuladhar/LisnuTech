import React, { Component } from 'react'

export class contact extends Component {
    render() {
        return (
            <section>
                <div className='container d-flex align-items-center justify-content-center'>
                    <div className='rows mt-5'>
                        <div className='text-center'>
                        <h1> Start a conversation </h1>
                        <p> 
                            Instrested in working together? <br />
                            we should chat. 
                        </p>
                        </div>
                       
                        <form className='form '>
                        <div className='col-12'>
                            <label htmlFor='name'> Name </label>
                            <input type="text" name="name" id="name"  className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <label htmlFor='email'> Email Address </label>
                            <input type="email" name="email" id="email" className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <label htmlFor='number'> Number </label>
                            <input type="number" name="number" id="number" className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <label htmlFor='subject'> Subject </label>
                            <input type="text" name="subject" id="subject" className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <label htmlFor='message'> Message </label>
                            <textarea rows={6} name="message" id="message" className='form-control'/>
                        </div>
                        <button className='mt-5 mb-5'> Sumbit </button>
                        </form>

                    </div>
                </div>
            </section>
        )
    }
}