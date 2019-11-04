import React, { useState, useEffect } from "react";
import Job from "./Job"
import { Card, Grid, Header, } from 'semantic-ui-react';

const AllJobs = props => {
    const [jobs, setJobs] = useState([]);

    const getJobs = () => {
        fetch("http://localhost:8000/jobs", {
            method: "GET",
        })
        .then(response => response.json())
        .then(job => {
            setJobs(job)
        })
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
                <Card.Group itemsPerRow={3} style={{display: "flex", justifyContent: "center"}}>
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