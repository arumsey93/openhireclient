import React from "react";
import { Grid, Header, List } from 'semantic-ui-react';


const Resources = props => {
    return (
        <>
            <section style={{paddingTop: '25px'}}>
                <Grid centered>
                    <Grid.Row>
                    <Header as='h1' style={{fontSize: '35px'}}>Get <strong style={{color: 'orange'}}>Hired</strong></Header>
                    </Grid.Row>
                </Grid>
                <Grid style={{paddingLeft: '50px'}}>
                    <Grid.Row>
                        <Header as='h1'>WhiteBoarding:</Header>
                    </Grid.Row>
                    <List>
                        <List.Item><a href='https://skillcrush.com/2016/03/29/rock-your-next-whiteboard-test/' rel="noopener noreferrer" target="_blank">Rock Your Next Whiteboard Test</a></List.Item>
                        <List.Item><a href='https://www.freecodecamp.org/news/lets-talk-about-whiteboarding-interviews-fed040e20cc9/' rel="noopener noreferrer" target="_blank">Let's Talk about Whiteboarding</a></List.Item>
                        <List.Item><a href='https://www.youtube.com/watch?v=51gc7-eskU8' rel="noopener noreferrer" target="_blank">Whiteboarding Coding Interview</a></List.Item>
                    </List>
                </Grid>
                <Grid style={{paddingLeft: '50px', paddingTop: '15px'}}>
                    <Grid.Row>
                        <Header as='h1'>Interviewing:</Header>
                    </Grid.Row>
                    <List>
                        <List.Item><a href='https://simpleprogrammer.com/10-developer-job-interview-tips-to-land-the-best-job-you-can/' rel="noopener noreferrer" target="_blank">10 Developer Interview Tips</a></List.Item>
                        <List.Item><a href='https://medium.com/swlh/7-tips-for-a-software-developer-job-interview-ef4e9a332ac3' rel="noopener noreferrer" target="_blank">7 Tips for a Software Developer Interview</a></List.Item>
                        <List.Item><a href='https://www.youtube.com/watch?v=GmxwNIVqhOM' rel="noopener noreferrer" target="_blank">Interviewing Tips and Tricks</a></List.Item>
                    </List>
                </Grid>
                <Grid style={{paddingLeft: '50px', paddingTop: '15px'}}>
                    <Grid.Row>
                        <Header as='h1'>Asking Questions:</Header>
                    </Grid.Row>
                    <List>
                        <List.Item><a href='https://www.roberthalf.com/blog/how-to-interview-candidates/7-must-ask-tech-interview-questions' rel="noopener noreferrer" target="_blank">7 Must Ask Interview Questions</a></List.Item>
                        <List.Item><a href='https://www.thebalancecareers.com/questions-to-ask-during-your-job-interview-2071488' rel="noopener noreferrer" target="_blank">Questions to Ask During Your Interview</a></List.Item>
                        <List.Item><a href='https://www.youtube.com/watch?v=Y95eI-ek_E8' rel="noopener noreferrer" target="_blank">The Best Questions to ask Employers</a></List.Item>
                    </List>
                </Grid>
                <Grid style={{paddingLeft: '50px', paddingTop: '15px'}}>
                    <Grid.Row>
                        <Header as='h1'>Resume:</Header>
                    </Grid.Row>
                    <List>
                        <List.Item><a href='https://www.indeed.com/career-advice/resumes-cover-letters/10-resume-writing-tips' rel="noopener noreferrer" target="_blank">10 Resume Writing Tips</a></List.Item>
                        <List.Item><a href='https://www.themuse.com/advice/43-resume-tips-that-will-help-you-get-hired' rel="noopener noreferrer" target="_blank">43 Resume Tips that Will Get you Hired</a></List.Item>
                        <List.Item><a href='https://www.youtube.com/watch?v=bhwEsfXS6y8' rel="noopener noreferrer" target="_blank">Resume Tips and Tricks</a></List.Item>
                    </List>
                </Grid>
                <Grid style={{paddingLeft: '50px', paddingTop: '15px', paddingBottom: '50px'}}>
                    <Grid.Row>
                        <Header as='h1'>LinkedIn:</Header>
                    </Grid.Row>
                    <List>
                        <List.Item><a href='https://www.themuse.com/advice/the-31-best-linkedin-profile-tips-for-job-seekers' rel="noopener noreferrer" target="_blank">The 31 Best LinkedIn Tips for Jobseekers</a></List.Item>
                        <List.Item><a href='https://careersidekick.com/best-linkedin-profile-tips/' rel="noopener noreferrer" target="_blank">Best LinkedIn Profile Tips</a></List.Item>
                        <List.Item><a href='https://www.youtube.com/watch?v=YFkqp9W1xTc' rel="noopener noreferrer" target="_blank">LinkedIn Pointers</a></List.Item>
                    </List>
                </Grid>
            </section>
        </>
    )
}

export default Resources