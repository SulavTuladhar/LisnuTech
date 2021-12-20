import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// Loading components
import { Login } from "./auth/Login/Login.components";
import { Register } from "./auth/Register/Register.components";
import {PageNotFound } from "./common/PageNotFound/PageNotFound.components";
import { Dashboard } from "./Dashboard/Dashboard.components";
import { Home } from "./home/Home.components";
import { AddProduct } from "./products/AddProduct/AddProduct.components";

export const AppRouting = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/dashboard" component={  Dashboard } />
                <Route path="/add-product" component={  AddProduct } />
                <Route path="*" component={  PageNotFound } exact />
            </Switch>
        </BrowserRouter>
    )
}