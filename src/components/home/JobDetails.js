import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Grid, Header, Button } from 'semantic-ui-react';
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

// Fetches all jobs by user id, allows for delete by job id and authentication.  Uses GET, DELETE.

const JobDetails = props => {
    const [job, setJobs] = useState([]);
    const { isAuthenticated } = useSimpleAuth();

    const getJobs = () => {
        fetch(`http://localhost:8000/jobs?user=${localStorage.getItem("user_id")}`, {
            method:"GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("openhire_token")}`
            }
        }).then(e => e.json())
        .then(job => {
            setJobs(job)
        })
    };
    
    const deleteJob = id => {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/jobs/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("openhire_token")}`
                }
            }).then(getJobs)
        }
    };

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <>
        <Grid centered style={{paddingTop: '25px'}}>
            <Header as='h1' style={{fontSize: '50px'}}><u>Your <strong style={{color: 'orange'}}>Jobs</strong></u></Header>
        </Grid>
        <Grid columns={3} centered>
            <Grid.Row>
                    <>
                        {job.map(job => {
                            return (
                                <div key={job.id}>
                                    {job.title && job.description && job.city && job.state && job.application ?
                                        <Grid.Column style={{padding: '40px'}}>
                                            <Card>
                                                <Card.Content>
                                                    <Card.Header style={{display: "flex", justifyContent: "center"}}>
                                                        {job.title}
                                                    </Card.Header>
                                                    <Card.Description style={{display: "flex", justifyContent: "center"}}>
                                                        {job.city}, {job.state}
                                                    </Card.Description>
                                                    <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                                                        {job.description}
                                                    </Card.Content>
                                                    <Card.Content style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                                                        <a href={`${job.application}`} rel="noopener noreferrer" target="_blank">
                                                            <Icon name='briefcase'></Icon>
                                                        </a>
                                                    </Card.Content>
                                                </Card.Content>
                                                    <Grid>
                                                        <Grid.Row centered>
                                                            <Grid.Column width={4} style={{paddingTop: '7px'}}>
                                                                <Link to={`/jobs/${job.id}`}>Edit</Link>
                                                            </Grid.Column>
                                                            <Grid.Column width={4}>
                                                                <Button onClick={() => {
                                                                    if (window.confirm('Are you sure you want to delete this job?')) {
                                                                        deleteJob(job.id)
                                                                }
                                                                }}>Delete</Button>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Card>
                                        </Grid.Column>
                                    : <Grid centered><Link style={{fontSize: '25px', paddingTop: '25px'}} to="/jobs/create">Please Create a Job</Link></Grid> }
                                </div>
                            )
                        })}
                    </>
            </Grid.Row>
        </Grid>
        <Grid style={{display: 'flex', justifyContent: 'center', paddingBottom: '50px'}}>
            <Link style={{fontSize: '25px', paddingTop: '25px'}} to="/jobs/create">Post a Job</Link>
        </Grid>
        </>
    )
}

export default JobDetails