import React from "react";
import { Card, Icon, Segment } from 'semantic-ui-react';

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
                    <Card.Content style={{display: "flex", justifyContent: "center", paddingTop: "15px"}}>
                        {props.job.description}
                    </Card.Content>
                    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
                    <Card.Content extra style={{position: 'absolute', bottom: '10px'}}>
                        <a href={`${props.job.application}`} rel="noopener noreferrer" target="_blank">
                            <Icon name='briefcase'></Icon>
                        </a>
                    </Card.Content>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}

export default Job