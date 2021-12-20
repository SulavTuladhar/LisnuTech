import React from "react";
import { Component } from "react";
import { Header } from "../common/header/Header.components";

import './Dashboard.components.css'

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <>
        <Header isLoggedIn />
      
        {/* Dashboard Page */}
        <div className="dashboard-container">
            <div className="product-container">
                <div className="tags-container">
                    <div className="day"> <h2> Monday </h2> </div>
                    <div className="tags"> <img src="/images/spoon-and-fork.png" alt="spoon-and-fork" /> Dishes </div>
                    <div className="tags"> <img src="/images/soda.png" className="drinks" alt="soda-img" />  Drinks </div>
                    <div className="tags"> <img src="/images/nachos.png" alt="nachos-img" /> Snacks </div>
                    <div className="tags"> <img src="./images/cupcake.png" alt="cupcake-img"/> Dessert </div>
                </div>
                
                <div className="product-content">
                <div className="product-description"> 
                        <img src="/images/burger.png" alt="burger-img" /> 
                        <h3 className="title"> Burger </h3>
                        <p> Our burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch.</p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
              </div>

              <div className="product-description"> 
                        <img src="/images/momo.png" alt="burger-img" /> <br /> 
                        <h3 className="title"> Momo </h3>
                        <p> Our burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch.</p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
              </div>

              <div className="product-description"> 
                        <img src="/images/drink.png" alt="burger-img" />  <br /> <br />
                        <h3 className="title"> Drink </h3>
                        <p> Our burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch.</p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
              </div>

              <div className="product-description"> 
                        <img src="/images/pizza.png" alt="burger-img" /> 
                        <h3 className="title"> Pizza </h3>
                        <p> Our burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch.</p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
              </div>

              
                </div>
            </div>

            <div className="add-product">
              
            </div>
        </div>
      </>
    );
  }
}
