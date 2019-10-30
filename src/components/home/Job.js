import React from "react";
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

const Job = props => {


    return (
        <>
            <Grid.Column style={{padding: '40px'}}>
                <Card>
                    <Card.Content>
                        <Card.Header style={{display: "flex", justifyContent: "center"}}>
                            {props.job.title}
                        </Card.Header>
                        <Card.Description style={{display: "flex", justifyContent: "center"}}>
                            {props.job.city}, {props.job.state}
                        </Card.Description>
                        <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                            {props.job.description}
                        </Card.Content>
                        <Card.Content>
                            <a href={`${props.job.application}`} rel="noopener noreferrer" target="_blank">
                                <Icon name='briefcase'></Icon>
                            </a> */}
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </>
    )
}

export default Job