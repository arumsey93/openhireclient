import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Job from "./Job"
import { Card, Grid, Header, } from 'semantic-ui-react'

// Displays all jobs and profiles created by users to be viewed by anyone without authentication

const Home = props => {
    const [profiles, setProfiles] = useState([]);
    const [jobs, setJobs] = useState([]);

    const useGetLast15 = () => {
         fetch("https://openhireapi.herokuapp.com/profiles?quantity=15", {
            method: "GET",
            })
            .then(response => response.json())
            .then(profile => {
              setProfiles(profile);
            })
        };

    const last15Job = () => {
        fetch("https://openhireapi.herokuapp.com/jobs?quantity=15", {
            method: "GET",
        })
        .then(response => response.json())
        .then(job => {
            setJobs(job)
        })
    }
    
    useEffect(useGetLast15, []);
    useEffect(last15Job, []);

    return (
        <>
            <Grid centered rows="1">
                <Grid.Row>
                    <Header as='h1' style={{fontSize: '50px'}}><u>Open.<strong style={{color: 'orange'}}>HIRE</strong></u></Header>
                </Grid.Row>
            </Grid>
            <Grid centered rows="1">
                <Grid.Row>
                    <Header as='h1' style={{fontSize: '20px', marginTop: '-35px'}}><strong style={{color: 'orange', paddingRight: '15px'}}> For Developers </strong>By Developers</Header>
                </Grid.Row>
            </Grid>
            <section style={{paddingTop: '25px'}}>
                <Grid centered rows="1">
                    <Grid.Row>
                        <Header as='h1' style={{fontSize: '35px'}}>Search for <strong style={{color: 'orange'}}>Talent</strong></Header>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={3} style={{display: "flex"}}>
                    {profiles.map(profile => (
                        profile.linkedin && profile.github && profile.resume && profile.portfolio ?
                            <Profile
                            key={profile.id}
                            profile={profile}
                            />: ""
                            ))}
                </Card.Group>
            </section>
            <section style={{paddingTop: '25px', paddingBottom: '40px'}}>
            <Grid centered rows="1">
                    <Grid.Row>
                        <Header as='h1' style={{fontSize: '35px', paddingBottom: '25px'}}>Search for <strong style={{color: 'orange'}}>Jobs</strong></Header>
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

export default Home