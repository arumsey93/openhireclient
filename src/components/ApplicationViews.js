import { Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { withRouter, Redirect } from "react-router-dom"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import APImanager from "../modules/APImanager";
import Register from "./auth/Register"
import Login from "./auth/Login"
import Home from "./home/Home"
import CreateProfile from "./home/createProfileForm"
import ProfileDetails from "./home/ProfileDetails"
import EditProfile from "./home/EditProfileForm"

const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    const [profiles, setProfiles] = useState([]);
    const [jobs, setJobs] = useState([]);

    const getProfiles = () => {
        APImanager.getAll("profiles").then(setProfiles);
    };

    const getJobs = () => {
        APImanager.getAll("jobs").then(setJobs)
    };

    useEffect (() => {
        getProfiles();
        getJobs();
    }, [])


    return (
        <React.Fragment>
            <Route
                exact path="/" render={props => {
                    return <Home {...props} profiles={profiles} jobs={jobs} />
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
            <Route
                path="/profile" render={props => {
                    if (isAuthenticated()) {
                        return <ProfileDetails {...props} getProfiles = {getProfiles} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                exact path="/profiles/edit" render={props => {
                    if(isAuthenticated()) return (
                       <EditProfile {...props} getProfiles = {getProfiles} profiles={profiles} />
                    )
                    else return <Redirect to="/profile" />
                }}
            />
            {/* <Route
                path="/jobs" render={props => {
                    return <Jobs {...props} getJobs = {getJobs} jobs = {jobs} />
                }}
            /> */}
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)