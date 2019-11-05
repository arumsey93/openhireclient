import React, { useRef } from "react";
import APIManager from "../../modules/APImanager"
import { Form, Label, Grid, Header, Button } from "semantic-ui-react"

const CreateJob = props => {

  const title = useRef();
  const description = useRef();
  const city = useRef();
  const state = useRef();
  const application = useRef();

  //function that updates the profile object in the DB
  //this is called on submit edit button
  const handleUpdate = e => {
    e.preventDefault();

    const addToJobs = {
      title: title.current.value,
      description: description.current.value,
      city: city.current.value,
      state: state.current.value,
      application: application.current.value,
      user_id: localStorage.getItem("user_id")
    };
    APIManager.post("jobs", addToJobs).then(() => {
        props.history.push("/jobs")
    })
};

    //Post form that user will use to fill out new information
    return (
        <>
        <main style={{ textAlign: "center"}}>
          <Form className="form--login" onSubmit={handleUpdate}>
            <Grid centered>
                <Header as='h1' style={{paddingBottom: '35px', fontSize: '50px'}}>
                <u><strong style={{color: 'orange'}}>Create</strong> a Job Posting</u>
                </Header>
            </Grid>
            {
            <>
            <div>
            <Form.Field>
              <Label htmlFor="inputTitle"> Job Title </Label>
              <input
                ref={title}
                type="text"
                name="title"
                className="form-control"
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputDescription"> Job Description </Label>
              <input
                ref={description}
                type="text"
                name="description"
                className="form-control"
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputCity"> City </Label>
              <input
                ref={city}
                type="text"
                name="city"
                className="form-control"
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputState"> State </Label>
              <input
                ref={state}
                type="text"
                name="state"
                className="form-control"
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputApplication"> Link to Job Application </Label>
              <input
                ref={application}
                type="text"
                name="application"
                className="form-control"
                required
              />
            </Form.Field>
            </div>
            <Form.Field style={{display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
              <Button type="submit">Create Job</Button>
            </Form.Field>
            </>
          }
          </Form>
        </main>
      </>
    );
};

export default CreateJob;