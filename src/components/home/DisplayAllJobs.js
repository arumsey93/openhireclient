import React, { useState, useEffect, useRef } from "react";
import Job from "./Job"
import { Card, Grid, Header, Label, Button,  } from 'semantic-ui-react';

const AllJobs = props => {
    const [jobs, setJobs] = useState([]);
    const search_city = useRef();
    const search_state = useRef();

    const getJobs = () => {
        fetch("http://localhost:8000/jobs", {
            method: "GET",
        })
        .then(response => response.json())
        .then(job => {
            setJobs(job)
        })
    }

    const fetchCity = () => {
        let search = search_city.current.value

        fetch(`http://localhost:8000/jobs?city=${search}`, {

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

        fetch(`http://localhost:8000/jobs?state=${search}`, {

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
            <section style={{paddingTop: '25px'}}>
                <Grid centered rows="1">
                    <Grid.Row>
                        <Header as='h1' style={{fontSize: '35px'}}>Search for <strong style={{color: 'orange'}}>Jobs</strong></Header>
                    </Grid.Row>
                </Grid>
                <Grid centered>
                    <Grid.Row>
                        <Label htmlFor="search_items">Search by City</Label>
                            <input type="search" id="search_input"  ref={search_city} placeholder="City"/>
                            <Button id="search_input" onClick={() =>{fetchCity()}}>Search</Button>
                        <Label htmlFor="search_items">Search by State</Label>
                            <input type="search" id="search_input"  ref={search_state} placeholder="State"/>
                            <Button id="search_input" onClick={() =>{fetchState()}}>Search</Button>
                            <Button id="reset" onClick = {() => {getJobs()}}>Reset</Button>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={3} style={{display: "flex"}}>
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