import React, { useRef, useEffect, useState } from "react";
import APIManager from "../../modules/APImanager"
import { Form, Label, Grid, Header, Button } from "semantic-ui-react"

const CreateProfile = props => {

  const [profileEdit, setEditFields] = useState ([])
  const city = useRef();
  const state = useRef();
  const linkedin = useRef();
  const github = useRef();
  const resume = useRef();
  const portfolio = useRef();
  const codingchallenge = useRef();
  const firstName = useRef();
  const lastName = useRef();

      // this function gets all profile information so it can be displayed in the input fields
      const getProfiles = () => {
        APIManager.get("profiles", localStorage.getItem("user_id")).then(profile => {
            setEditFields(profile);
        });
      }

  //function that updates the profile object in the DB
  //this is called on submit edit button
  const handleUpdate = e => {
    e.preventDefault();

    const updatedUser = {
      id: localStorage.getItem("user_id"),
      user_id: localStorage.getItem("user_id"),
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      city: city.current.value,
      state: state.current.value,
      linkedin: linkedin.current.value,
      github: github.current.value,
      resume: resume.current.value,
      portfolio: portfolio.current.value,
      codingchallenge: codingchallenge.current.value
    };


    //HTTP request from APIManager to update the customer object in DB
    APIManager.put("profiles", updatedUser).then(() => {
      props.history.push("/profile")
    })};

    useEffect(() => {
      getProfiles();
    }, []);

    //Edit form that user will use to fill out new information
    return (
        <>
        <main style={{ textAlign: "center" }}>
          <Form className="form--login" onSubmit={handleUpdate}>
            <Grid centered>
                <Header as='h1' style={{paddingBottom: '35px', fontSize: '50px'}}>
                <u><strong style={{color: 'orange'}}>Create</strong> Your Profile</u>
                </Header>
            </Grid>
            {
            profileEdit.id == localStorage.getItem("user_id") ? 
            <>
            <div>
            <Form.Field>
              <Label htmlFor="inputFirstName"> First Name </Label>
              <input
                ref={firstName}
                type="text"
                name="firstName"
                className="form-control"
                defaultValue={profileEdit.user.first_name}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputLastName"> Last Name </Label>
              <input
                ref={lastName}
                type="text"
                name="lastName"
                className="form-control"
                defaultValue={profileEdit.user.last_name}
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
                defaultValue={profileEdit.city}
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
                defaultValue={profileEdit.state}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputLinkedin"> LinkedIn Link </Label>
              <input
                ref={linkedin}
                type="text"
                name="linkedin"
                className="form-control"
                defaultValue={profileEdit.linkedin}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputGithub"> Github Link </Label>
              <input
                ref={github}
                type="text"
                name="github"
                className="form-control"
                defaultValue={profileEdit.github}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputResume"> Resume Link </Label>
              <input
                ref={resume}
                type="text"
                name="resume"
                className="form-control"
                defaultValue={profileEdit.resume}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputPortfolio"> Portfolio Website Link </Label>
              <input
                ref={portfolio}
                type="text"
                name="portfolio"
                className="form-control"
                defaultValue={profileEdit.portfolio}
                required
              />
            </Form.Field>
            <Form.Field>
              <Label htmlFor="inputCodingChallenge"> Completed Coding Challenge Link </Label>
              <input
                ref={codingchallenge}
                type="text"
                name="codingchallenge"
                className="form-control"
                defaultValue={profileEdit.codingchallenge}
                required
              />
            </Form.Field>
            </div>
            <Form.Field style={{display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
              <Button type="submit">Submit Profile</Button>
            </Form.Field>
            </>
            : "" }
          </Form>
        </main>
      </>
    );
};

export default CreateProfile;