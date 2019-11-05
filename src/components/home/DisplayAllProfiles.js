import React, { useState, useEffect, useRef } from "react";
import { Card, Grid, Header, Label, Button, Input } from 'semantic-ui-react';
import Profile from "./Profile";

const AllProfiles = props => {
    const [profiles, setProfiles] = useState([]);
    const search_city = useRef();
    const search_state = useRef();
    const search_tech = useRef();

    const getProfiles = () => {
        fetch("http://localhost:8000/profiles", {
            method: "GET",
        })
        .then(response => response.json())
        .then(profile => {
            setProfiles(profile)
        })
    }

    const fetchCity = () => {
        let search = search_city.current.value

        fetch(`http://localhost:8000/profiles?city=${search}`, {

            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then((response) =>
            setProfiles(response))
    }

    const fetchState = () => {
        let search = search_state.current.value

        fetch(`http://localhost:8000/profiles?state=${search}`, {

            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then((response) =>
            setProfiles(response))
    }
    const fetchTech = () => {
        let search = search_tech.current.value

        fetch(`http://localhost:8000/profiles?tech=${search}`, {

            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then((response) =>
            setProfiles(response))
    }

    useEffect(getProfiles, []);

    console.log(search_city)
    return (
        <>
            <section style={{paddingTop: '25px'}}>
                <Grid centered rows="1">
                    <Grid.Row>
                        <Header as='h1' style={{fontSize: '35px'}}>Search for <strong style={{color: 'orange'}}>Talent</strong></Header>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row style={{paddingLeft: '130px'}}>
                        <Label htmlFor="search_items">Search by City</Label>
                            <input type="search" id="search_input"  ref={search_city} placeholder="City"/>
                            <Button id="search_input" onClick={() =>{fetchCity()}}>Search</Button>
                        <Label htmlFor="search_items">Search by State</Label>
                            <input type="search" id="search_input"  ref={search_state} placeholder="State"/>
                            <Button id="search_input" onClick={() =>{fetchState()}}>Search</Button>
                        <Label htmlFor="search_items">Search by Technology</Label>
                            <input type="search" id="search_input"  ref={search_tech} placeholder="Technology"/>
                                <Button id="search_input" onClick={() =>{fetchTech()}}>Search</Button>
                            <Button id="reset" onClick = {() => {getProfiles()}}>Reset</Button>
                    </Grid.Row>
                </Grid>
                <Card.Group itemsPerRow={3} style={{display: "flex"}}>
                    {profiles.map(profile => (
                        profile.linkedin && profile.github && profile.resume && profile.portfolio ?                            
                        <Profile
                            key={profile.id}
                            profile={profile}
                            />
                            : ""
                            ))}
                </Card.Group>
            </section>
        </>
    )
}

export default AllProfiles