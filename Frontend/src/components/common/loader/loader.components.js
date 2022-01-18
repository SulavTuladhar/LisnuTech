import React, { Component } from 'react'
import './loader.components.css';
export class Loader extends Component {
    render() {
        return (
          <section className='loader-section'>
            <div class="loader">
            <div class="big-circle">
              <div class="small-circle"></div>
            </div>
          </div>
          </section>
        )
    }
}
