import React from "react";
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import image from "../../images/Open.HIRE Logo.png"

// Card for a profile, displays the Full Name, city, state, technologies, and links to their resources inside of icons.

const Profile = props => {


    return (
        <>
        <Grid.Row>
            <Grid.Column  style={{padding: '40px'}}>
                <Card>
                <Image src={image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{display: "flex", justifyContent: "center"}}>
                            {props.profile.user.first_name} {props.profile.user.last_name}
                        </Card.Header>
                        <Card.Description style={{display: "flex", justifyContent: "center"}}>
                            {props.profile.city}, {props.profile.state}
                        </Card.Description>
                        <Card.Description style={{display: "flex", justifyContent: "center"}}>
                            Proficient in: {props.profile.techOne}, {props.profile.techTwo}, and {props.profile.techThree}
                        </Card.Description>
                        <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                            <a href={`mailto: ${props.profile.user.email}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='envelope open outline'></Icon>
                            </a>
                            <a href={`${props.profile.linkedin}` } rel="noopener noreferrer" target="_blank">
                                <Icon name='linkedin'></Icon>
                            </a>
                            <a href={`${props.profile.github}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='github'></Icon>
                            </a>
                            <a href={`${props.profile.resume}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='paperclip'></Icon>
                            </a>
                            <a href={`${props.profile.portfolio}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='paper plane'></Icon>
                            </a>
                            <a href={`${props.profile.codingchallenge}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='code branch'></Icon>
                            </a>
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Grid.Column>
            </Grid.Row>
        </>
    )
}

export default Profile