import React from "react";
import { Component } from "react";

import "./Home.component.css";
import salad from './images/salad.png';
import search from './search.svg';
import dessert from './images/dessert.png';
import drink from './images/drink.png';
import snack from './images/snack.png';
import burger from './images/burger.png';
import coffee from './images/coffee.png';
import momo from './images/momo.png';
import pizza from './images/pizza.png';
import chef1 from './images/young-chief.png';
import chef2 from './images/chef1.png';
import chef3 from './images/chef2.png';
import chef4 from './images/chef3.png';
import chef5 from './images/chef4.png';
import { Header } from "../common/header/Header.components";


export class Home extends Component{



    render(){
        return(
            <div className="main-container">
                <Header isLoggedIn={false} />
               
                {/* Hero Container */}
                <div className="hero-container">

                    <div className="content">
                        <h1 className="title"> We Serve The Test You Love &#128525;</h1>
                        <h5> 
                            This is a type of resturant which typically serves food and drinks. in addtion
                            to light refreshments such as baked goods or snacks. The term comes from the rench word meaning food.
                        </h5>
                        <button> Explore Food </button>
                        <button className="search-btn"> <img src={search} alt="search-img" className="search-img" /> Search </button>
                    </div>


                    <div className="img-sec">
                        <div className="circle">  </div>
                        <img src={salad} alt="salad-img"/>

                        <div className="side-menu one">
                            <img src={salad} alt="salad-img" className="side-img side-top"/>
                            <p> Dishes </p>
                        </div>

                        <div className="side-menu two">
                            <img src={drink} alt="coffee" className="side-img side-top"/>
                            <p> Drinks </p> 
                        </div>

                        <div className="side-menu three">
                        <img src={dessert} alt="dessert" className="side-img"/>
                         <p> Dessert </p>
                        </div>

                        <div className="side-menu four">
                        <img src={snack} alt="snack" className="side-img"/>
                         <p> Dessert </p>
                        </div>

                    </div>


                </div>

            {/* Second page */}
                <div className="second-page">
                    <div className="page-heading">
                    <h1 className="title"> Popular Dishes </h1>
                        <div className="two-btns">
                            <button className="arrow"> 	&#8592; </button>    
                            <button className="arrow right"> &#8594; </button>    
                         </div>
                    </div>
                    <div className="menu-description-container">

                    <div className="menu-description"> 
                        <img src={burger} alt="burger-img" /> 
                        <h3 className="title"> Burger </h3>
                        <p> Our burgers offer a combination of tastes and textures – sweet, sour, salt – with a bit of crunch.</p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
                    </div>

                    <div className="menu-description"> 
                        <img src={momo} alt="burger-img" /> 
                        <h3 className="title"> Momo </h3>
                        <p> Momo is prepared with special spices, which add unique and original taste to suit the Nepalese palate. </p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
                    </div>

                    <div className="menu-description"> 
                        <img src={pizza} alt="burger-img" /> 
                        <h3 className="title" style={{marginTop: "1rem"}}> Pizza </h3>
                        <p>
                        Our special blend of 100% fresh natural cheeses, our secret recipe pizza sauce, and your choice of crust.
                        </p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
                    </div>

                   
                    <div className="menu-description"> 
                        <img src={coffee} alt="burger-img" /> 
                        <h3 className="title"> Coffee </h3>
                        <p> 
                        Enjoy one of our light, medium, dark, decaffeinated, or flavored brews of the day.
                        </p>
                        <span> 
                            <h5> 150 </h5> 
                            <button className="see-more-btn"> See More </button>
                        </span>
                    </div>
                
                    </div>

                </div>

                 {/* Third Page  */}
                <div className="third-page">
                    <div className="img-div">
                        <img className="chief-img" src={chef1} alt="young-chief" />
                    </div>
                    <div className="side-div">
                        <h1 className="title"> We Are More Than Multiple Service </h1>
                        <h5 className="description"> 
                            This is a type of resturant which typically serves food and drinks, 
                            in addition to light refreshments such as baked goods or snacks.
                            The term comes from the rench word meaning food.
                        </h5>
                    <div className="features-container">
                        <div className="features">
                            <img src={salad} alt="salad-img" className="side-img side-top"/>
                            <p> Clean Kitchen </p>
                        </div>

                        <div className="features">
                            <img src={salad} alt="salad-img" className="side-img side-top"/>
                            <p> Professional Chief </p>
                        </div>

                        <div className="features">
                            <img src={salad} alt="salad-img" className="side-img side-top"/>
                            <p> Organized foodie place </p>
                        </div>

                        <div className="features">
                            <img src={salad} alt="salad-img" className="side-img side-top"/>
                            <p> Pre-order </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Fourth Pages */}
                <div className="fourth-page">
                    <div className="page-heading">
                        <h1 className="title"> Meet Our Chefs </h1>
                            <div className="two-btns">
                                <button className="arrow"> 	&#8592; </button>    
                                <button className="arrow right"> &#8594; </button>    
                             </div>
                        </div>
                    <div className="chef-description-container">
                        <div className="chef-description"> 
                        <img src={chef2} alt="burger-img" /> 
                        <h3 className="title" style={{marginTop: "1rem"}}> Justin </h3>
                        </div>

                        <div className="chef-description"> 
                        <img src={chef3} alt="burger-img" /> 
                        <h3 className="title" style={{marginTop: "1rem"}}> Karen </h3>
                        </div>

                        <div className="chef-description"> 
                        <img src={chef4} alt="burger-img" /> 
                        <h3 className="title" style={{marginTop: "1rem"}}> Michel </h3>
                        </div>

                        <div className="chef-description"> 
                        <img src={chef5} alt="burger-img" /> 
                        <h3 className="title" style={{marginTop: "1rem"}}> Natasha </h3>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}