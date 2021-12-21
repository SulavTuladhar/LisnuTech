import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Loading components
import { Login } from "./auth/Login/Login.components";
import { Register } from "./auth/Register/Register.components";
import { Header } from "./common/header/Header.components";
import {PageNotFound } from "./common/PageNotFound/PageNotFound.components";
import { Dashboard } from "./Dashboard/Dashboard.components";
import { Home } from "./home/Home.components";
import { AddProduct } from "./products/AddProduct/AddProduct.components";

const ProtectedRoute = ({component: Component, ...rest}) =>{
    return <Route {...rest} render={(routerProps) => (
        localStorage.getItem('token')
            ? <> 
                <Header isLoggedIn />
                <div>
                    <Component {...routerProps} />
                </div>
             </>
            : <Redirect to="/"> </Redirect> // TODO Props from where it is redirected
    )} /> 
}

const PublicRoute = ({component: Component, ...rest}) =>{
    return <Route {...rest} render={(routerProps) => (
                    <Component {...routerProps} />
    )} /> 
}

export const AppRouting = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" component={ Home } exact />
                <PublicRoute path="/login" component={ Login } />
                <PublicRoute path="/register" component={ Register } />
                <ProtectedRoute path="/dashboard" component={  Dashboard } />
                <ProtectedRoute path="/add-product" component={  AddProduct } />
                <PublicRoute path="*" component={  PageNotFound } exact />
            </Switch>
        </BrowserRouter>
    )
}