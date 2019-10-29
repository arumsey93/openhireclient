import { Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { withRouter, Redirect } from "react-router-dom"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import APImanager from "../modules/APImanager";
import Register from "./auth/Register"
import Login from "./auth/Login"
import Home from "./home/Home"
import CreateProfile from "./home/createProfileForm"

const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    const [profiles, setProfiles] = useState([]);

    const getProfiles = () => {
        APImanager.getAll("profiles").then(setProfiles);
    };

    useEffect (() => {
        getProfiles();
    }, [])


    return (
        <React.Fragment>
            <Route
                exact path="/" render={props => {
                    return <Home {...props} profiles={profiles} />
                }}
            />
            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />

            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />
            <Route
                exact path="/profiles/create" render={props => {
                    if(isAuthenticated()) return (
                       <CreateProfile {...props} getProfiles = {getProfiles} profiles={profiles} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)