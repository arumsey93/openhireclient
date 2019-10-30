import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Grid, Header, Button } from 'semantic-ui-react';
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import image from "../../images/Open.HIRE Logo.png";


const ProfileDetails = props => {
    const [oneProfile, setOneProfile] = useState({user: {}});
    const { isAuthenticated } = useSimpleAuth();

    const getOneProfile = () => {
        fetch(`http://localhost:8000/profiles/${localStorage.getItem("user_id")}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("openhire_token")}`
                }
        }).then(e => e.json())
        .then(oneProfile => {
        setOneProfile(oneProfile)})
    };

    const deleteMyProfile = () => {
        if (isAuthenticated()) {
          fetch(`http://localhost:8000/profiles/${oneProfile.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("openhire_token")}`
            }
          }).then(getOneProfile);
        }
      };

    useEffect(() => {
        getOneProfile();
    }, []);
    return (
        <>
        <Grid centered style={{paddingTop: '25px'}}>
            <Header as='h1' style={{fontSize: '50px'}}><u>Your <strong style={{color: 'orange'}}>Profile</strong></u></Header>
        </Grid>
        {oneProfile.linkedin && oneProfile.github && oneProfile.resume && oneProfile.portfolio ?
            <>
            <Grid.Column  style={{padding: '40px'}}>
                <Card centered>
                <Image src={image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{display: "flex", justifyContent: "center"}}>
                            {oneProfile.user.first_name} {oneProfile.user.last_name}
                        </Card.Header>
                        <Card.Description style={{display: "flex", justifyContent: "center"}}>
                            {oneProfile.city}, {oneProfile.state}
                        </Card.Description>
                        <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                            <a href={`mailto: ${oneProfile.user.email}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='envelope open outline'></Icon>
                            </a>
                            <a href={`${oneProfile.linkedin}` } rel="noopener noreferrer" target="_blank">
                                <Icon name='linkedin'></Icon>
                            </a>
                            <a href={`${oneProfile.github}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='github'></Icon>
                            </a>
                            <a href={`${oneProfile.resume}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='paperclip'></Icon>
                            </a>
                            <a href={`${oneProfile.portfolio}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='paper plane'></Icon>
                            </a>
                            <a href={`${oneProfile.codingchallenge}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='code branch'></Icon>
                            </a>
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={2} style={{marginTop: '10px', marginLeft: '150px'}}>
                        <Link to="/profiles/edit">Edit Your Profile</Link>
                    </Grid.Column>
                     <Grid.Column width={3}>
                        <Button style={{marginRight: '50px'}} onClick={() => {
                            if (window.confirm('Are you sure you want to delete your Profile?')) {
                                deleteMyProfile()
                            }
                        }}>Delete My Profile</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
            : <Grid centered><Link style={{fontSize: '25px', paddingTop: '25px'}} to="/profiles/create">Please Create a Profile</Link></Grid> }
        </>
    )

}

export default ProfileDetails