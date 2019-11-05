import { Route } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { withRouter, Redirect } from "react-router-dom"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import APImanager from "../modules/APImanager";
import Register from "./auth/Register"
import Login from "./auth/Login"
import Home from "./home/Home"
import CreateProfile from "./home/createProfileForm"
import CreateJob from "./home/CreateJobForm"
import ProfileDetails from "./home/ProfileDetails"
import EditProfile from "./home/EditProfileForm"
import AllJobs from "./home/DisplayAllJobs"
import JobDetails from "./home/JobDetails";
import EditJobs from "./home/EditJob"
import AllProfiles from "./home/DisplayAllProfiles";
import Resources from "./home/Resources";

const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    const [profiles, setProfiles] = useState([]);
    const [jobs, setJobs] = useState([]);

    const getProfiles = () => {
        APImanager.getAll("profiles").then(setProfiles);
    };

    const getJobs = () => {
        APImanager.getAll("profiles").then(setJobs);
    }

    useEffect (() => {
        getProfiles();
        getJobs();
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
            <Route
                exact path="/jobs/create" render={props => {
                    if(isAuthenticated()) return (
                       <CreateJob {...props} />
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
            <Route
                exact path="/jobs" render={props => {
                    return <AllJobs {...props} />
                }}
            />
            <Route
                exact path="/profiles" render={props => {
                    return <AllProfiles {...props} />
                }}
            />
            <Route
                exact path="/jobs/yourjobs" render={props => {
                    if(isAuthenticated()) return (
                        <JobDetails {...props} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            <Route
                exact path="/jobs/:jobsId(\d+)" render={props => {
                    if(isAuthenticated()) return (
                        <EditJobs {...props} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            <Route
                exact path="/resources" render={props => {
                    return <Resources {...props} />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)