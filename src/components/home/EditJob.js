import React, { useRef, useEffect, useState } from "react";
import APIManager from "../../modules/APImanager"
import { Form, Label, Grid, Header, Button } from "semantic-ui-react"

const EditJob = props => {

    const [jobEdit, setEditFields] = useState ([])
    const title = useRef();
    const description = useRef();
    const city = useRef();
    const state = useRef();
    const application = useRef();

    const getCurrentJob = () => {
        fetch(`http://localhost:8000/jobs/${props.match.params.jobsId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("openhire_token")}`
          }
        })
        .then(response => {
          return response.json()
        })
        .then((response) => { return setEditFields(response)})
      }
  
    //function that updates the job object in the DB
    //this is called on submit edit button
    const handleUpdate = e => {
        e.preventDefault();
    
        const updatedUser = {
          id: jobEdit.id,
          user_id: localStorage.getItem("user_id"),
          title: title.current.value,
          description: description.current.value,
          city: city.current.value,
          state: state.current.value,
          application: application.current.value
        };
    
    
        // HTTP request from APIManager to update the profile object in DB
        APIManager.put("jobs", updatedUser).then(() => {
          props.history.push("/jobs/yourjobs")
        }
        )};
      
    
        useEffect(() => {
          getCurrentJob();
        }, []);
  
      //Post form that user will use to fill out new information
      return (
          <>
          <main style={{ textAlign: "center" }}>
            <Form className="form--login" onSubmit={handleUpdate}>
              <Grid centered>
                  <Header as='h1' style={{paddingBottom: '35px', fontSize: '50px'}}>
                  <u><strong style={{color: 'orange'}}>Edit</strong> a Job Posting</u>
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
                  defaultValue={jobEdit.title}
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
                  defaultValue={jobEdit.description}
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
                  defaultValue={jobEdit.city}
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
                  defaultValue={jobEdit.state}
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
                  defaultValue={jobEdit.application}
                  required
                />
              </Form.Field>
              </div>
              <Form.Field style={{display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
                <Button type="submit">Post Job</Button>
              </Form.Field>
              </>
            }
            </Form>
          </main>
        </>
      );
  };
  
  export default EditJob;