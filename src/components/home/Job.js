import React from "react";
import { Card, Icon } from 'semantic-ui-react';

// Card for a job, displays the title, city, state, description, and application link inside of an icon.

const Job = props => {


    return (
        <>
            <Card>
                <Card.Content style={{margin: '20px'}}>
                    <Card.Header style={{display: "flex", justifyContent: "center"}}>
                        {props.job.title}
                    </Card.Header>
                    <Card.Description style={{display: "flex", justifyContent: "center"}}>
                        {props.job.city}, {props.job.state}
                    </Card.Description>
                    <Card.Content extra style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                        {props.job.description}
                    </Card.Content>
                    <Card.Content style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                        <a href={`${props.job.application}`} rel="noopener noreferrer" target="_blank">
                            <Icon name='briefcase'></Icon>
                        </a>
                    </Card.Content>
                </Card.Content>
            </Card>
        </>
    )
}

export default Job