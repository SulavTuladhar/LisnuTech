import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AddBlog } from "./add/addBlog.components";
import { AddDigitalMarketing } from "./add/addDigitalMarketing.components";
import { AddGraphicsDesign } from "./add/addGraphicsDesign.components";
import { addSocialMediaManagement } from "./add/addSocialMediaManagement.components";
import AddWebDevelopment from "./add/addWebDevelopment.components";
// Loading components
import { Login } from "./auth/Login/Login.components";
import { Register } from "./auth/Register/Register.components";
import { Blog } from "./blog/blog.components";
import { ViewBlog } from "./blog/viewBlog.components";
import { Header } from "./common/header/Header.components";
import {PageNotFound } from "./common/PageNotFound/PageNotFound.components";
import { contact } from "./Contact/contact.components";
import { Dashboard } from "./dashboard/dashboard.components";
import { DigitalMarketing } from "./digitalMarketing/digitalMarketing.components";
import { editBlog } from "./edit/editBlog/editBlog.components";
import { editSingleBlog } from "./edit/editBlog/editSingleBlog.components";
import { EditDigitalMarketing } from "./edit/editDigitalMarketing/editDigitalMarketing.components";
import { EditDigitalMarketingContent } from "./edit/editDigitalMarketing/editDigitalMarketingContent.components";
import { EditGraphicsDesign } from "./edit/editGraphicsDesign/editGraphicsDesign.components";
import { EditGraphicsDesignContent } from "./edit/editGraphicsDesign/editGraphicsDesignContent.components";
import { editHome } from "./edit/editHome/editHome.components";
import { editFifthPage } from "./edit/editHome/editPage/editFifthPage.components";
import { editFourthPage } from "./edit/editHome/editPage/editFourthPage.components";
import { editSecondPage } from "./edit/editHome/editPage/editSecond.components";
import { editThirdPage } from "./edit/editHome/editPage/editThirdPage.components";
import { EditSocialMedia, editSocialMedia } from "./edit/editSocialMedia/editSocialMedia.components";
import { EditSocialMeidaManagement } from "./edit/editSocialMedia/editSocialMediaManagement.components";
import { EditWebDevelopment } from "./edit/editWebDevelopment/editWebDevelopment.components";
import { EditWebDevelopmentHeader } from "./edit/editWebDevelopment/editWebDevelopmentHeader.components";
import { EditWebDevelopmentPosts } from "./edit/editWebDevelopment/editWebDevelopmentPosts.components";
import { GraphicsDesign } from "./graphicsDesign/graphicsDesign.components";
import { Home } from "./home/Home.components";
import { SocialMediaManagement, socialMediaManagement } from "./socialMediaManagement/socialMediaManagement";
import { WebDevelopment } from "./webDevelopment/webDevelopment.components";

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
        <>
                <Header />
            <Component {...routerProps} />
        </>
    )} /> 
}

export const AppRouting = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" component={ Home } exact />
                <PublicRoute path="/login" component={ Login } />
                <PublicRoute path="/register" component={ Register } />
                <PublicRoute path="/blog" component={ Blog } />
                <PublicRoute path="/viewBlog/:id" component={ ViewBlog } />
                <PublicRoute path="/socialMediaManagement" component={ SocialMediaManagement } />
                <PublicRoute path="/webDevelopment" component={ WebDevelopment } />
                <PublicRoute path="/digitalMarketing" component={ DigitalMarketing } />
                <PublicRoute path="/graphicsDesign" component={ GraphicsDesign } />
                <PublicRoute path="/contact" component={  contact } />
                
                
                <ProtectedRoute path="/editDigitalMarketing" component={ EditDigitalMarketing } />
                <ProtectedRoute path="/editBlog" component={ editBlog } />
                <ProtectedRoute path="/editDigitalMarketingContent/:id" component={ EditDigitalMarketingContent } />
                <ProtectedRoute path="/editGraphicsDesign" component={ EditGraphicsDesign } />
                <ProtectedRoute path="/editGraphicsDesignContent/:id" component={ EditGraphicsDesignContent } />
                <ProtectedRoute path="/dashboard" component={  Dashboard } />
                <ProtectedRoute path="/editSingleBlog/:id" component={  editSingleBlog } />
                <ProtectedRoute path="/edit-home" component={  editHome } />
                <ProtectedRoute path="/editsocialMedia" component={  EditSocialMedia } />
                <ProtectedRoute path="/editWebDevelopment" component={  EditWebDevelopment } />
                <ProtectedRoute path="/editWebDevelopmentHeader/:id" component={  EditWebDevelopmentHeader } />
                <ProtectedRoute path="/editWebDevelopmentPost/:id" component={  EditWebDevelopmentPosts } />
                <ProtectedRoute path="/edit-socialMedia/:id" component={  EditSocialMeidaManagement } />
                <ProtectedRoute path="/secondPage/:id" component={  editSecondPage } />
                <ProtectedRoute path="/thirdPage/:id" component={  editThirdPage } />
                <ProtectedRoute path="/fourthPage/:id" component={  editFourthPage } />
                <ProtectedRoute path="/fifthPage/:id" component={  editFifthPage } />
                <ProtectedRoute path="/addSocialMedia" component={  addSocialMediaManagement } />
                <ProtectedRoute path="/addWebDevelopment" component={  AddWebDevelopment } />
                <ProtectedRoute path="/addDigitalMarketing" component={  AddDigitalMarketing } />
                <ProtectedRoute path="/addGraphicsDesign" component={  AddGraphicsDesign } />
                <ProtectedRoute path="/addBlog" component={  AddBlog } />
                
                <PublicRoute path="*" component={  PageNotFound } exact />
            </Switch>
        </BrowserRouter>
    )
}