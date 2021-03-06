import React, { useState, useEffect, useRef } from "react";
import Job from "./Job"
import { Card, Grid, Header, Label, Button,  } from 'semantic-ui-react';

// Allows the user to display all jobs posted by all users without authentication, allows them to filter through their search by city and state.  Uses GET.

const AllJobs = props => {
    const [jobs, setJobs] = useState([]);
    const search_city = useRef();
    const search_state = useRef();

    const getJobs = () => {
        fetch("https://openhireapi.herokuapp.com/jobs", {
            method: "GET",
        })
        .then(response => response.json())
        .then(job => {
            setJobs(job)
        })
    }

    const fetchCity = () => {
        let search = search_city.current.value

        fetch(`https://openhireapi.herokuapp.com/jobs?city=${search}`, {

            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then((response) =>
            setJobs(response))
    }

    const fetchState = () => {
        let search = search_state.current.value

        fetch(`https://openhireapi.herokuapp.com/jobs?state=${search}`, {

            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then((response) =>
            setJobs(response))
    }

    useEffect(getJobs, []);

    return (
        <>
            <section style={{paddingTop: '25px', paddingBottom: '40px'}}>
                <Grid centered rows="1">
                    <Grid.Row>
                        <Header as='h1' style={{fontSize: '35px'}}>Search for <strong style={{color: 'orange'}}>Jobs</strong></Header>
                    </Grid.Row>
                </Grid>
                <Grid centered>
                    <Grid.Row style={{paddingBottom: '50px'}}>
                        <Label htmlFor="search_items">Search by City</Label>
                            <input type="search" id="search_input"  ref={search_city} placeholder="City"/>
                            <Button id="search_input" onClick={() =>{fetchCity()}}>Search</Button>
                        <Label htmlFor="search_items">Search by State</Label>
                            <input type="search" id="search_input"  ref={search_state} placeholder="State"/>
                            <Button id="search_input" onClick={() =>{fetchState()}}>Search</Button>
                            <Button id="reset" onClick = {() => {getJobs()}}>Reset</Button>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={4} style={{display: "flex", paddingRight: '15px', paddingLeft: '15px'}}>
                    {jobs.map(job => (
                        job.title && job.description && job.city && job.state && job.application ?
                            <Job
                            key={job.id}
                            job={job}
                            />
                            : ""
                            ))}
                </Card.Group>
            </section>
        </>
    )
}

export default AllJobs