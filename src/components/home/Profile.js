import React from "react";
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import image from "../../images/Open.HIRE Logo.png"

const Profile = props => {


    return (
        <>
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
                        <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                            <a href={`mailto: ${props.profile.user.email}`} target="_blank">
                                <Icon name='envelope open outline'></Icon>
                            </a>
                            <a href={`${props.profile.linkedin}` } target="_blank">
                                <Icon name='linkedin'></Icon>
                            </a>
                            <a href={`${props.profile.github}`} target="_blank">
                                <Icon name='github'></Icon>
                            </a>
                            <a href={`${props.profile.resume}`} target="_blank">
                                <Icon name='paperclip'></Icon>
                            </a>
                            <a href={`${props.profile.portfolio}`} target="_blank">
                                <Icon name='paper plane'></Icon>
                            </a>
                            <a href={`${props.profile.codingchallenge}`} target="_blank">
                                <Icon name='code branch'></Icon>
                            </a>
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </>
    )
}

export default Profile