import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import APImanager from "../modules/APImanager";
import Register from "./auth/Register"
import Login from "./auth/Login"

const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();


    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)