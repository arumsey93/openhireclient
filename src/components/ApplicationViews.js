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

    const getProfiles = () => {
        APImanager.getAll("profiles").then(setProfiles);
    };

    useEffect (() => {
        getProfiles();
    }, [])


    return (
        <React.Fragment>
            {/* Link to Home */}
            <Route
                exact path="/" render={props => {
                    return <Home {...props} profiles={profiles} />
                }}
            />
            {/* Link to Register */}
            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />
            {/* Link to Login */}
            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />
            {/* Link to create profile form */}
            <Route
                exact path="/profiles/create" render={props => {
                    if(isAuthenticated()) return (
                       <CreateProfile {...props} getProfiles = {getProfiles} profiles={profiles} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            {/* Link to create job form */}
            <Route
                exact path="/jobs/create" render={props => {
                    if(isAuthenticated()) return (
                       <CreateJob {...props} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            {/* Link to view users individual profile */}
            <Route
                path="/profile" render={props => {
                    if (isAuthenticated()) {
                        return <ProfileDetails {...props} getProfiles = {getProfiles} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            {/* Link to edit profile form */}
            <Route
                exact path="/profiles/edit" render={props => {
                    if(isAuthenticated()) return (
                       <EditProfile {...props} getProfiles = {getProfiles} profiles={profiles} />
                    )
                    else return <Redirect to="/profile" />
                }}
            />
            {/* Link to view all jobs */}
            <Route
                exact path="/jobs" render={props => {
                    return <AllJobs {...props} />
                }}
            />
            {/* Link to view all profiles */}
            <Route
                exact path="/profiles" render={props => {
                    return <AllProfiles {...props} />
                }}
            />
            {/* Link to view the jobs an individual user has posted */}
            <Route
                exact path="/jobs/yourjobs" render={props => {
                    if(isAuthenticated()) return (
                        <JobDetails {...props} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            {/* Link to edit a users selected job */}
            <Route
                exact path="/jobs/:jobsId(\d+)" render={props => {
                    if(isAuthenticated()) return (
                        <EditJobs {...props} />
                    )
                    else return <Redirect to="/login" />
                }}
            />
            {/* Link to resources page */}
            <Route
                exact path="/resources" render={props => {
                    return <Resources {...props} />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)