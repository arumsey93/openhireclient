import React, { useRef, useEffect, useState } from "react";
import APIManager from "../../modules/APImanager"

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
        APIManager.getAll("profiles").then(profile => {
            console.log("profile", profile)
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
      linkedin: state.current.value,
      github: state.current.value,
      resume: state.current.value,
      portfolio: state.current.value,
      codingchallenge: state.current.value
    };


    //HTTP request from APIManager to update the customer object in DB
    APIManager.put("profiles", updatedUser).then(() => {
      props.history.push("/")
    })};

    useEffect(() => {
      getProfiles();
    }, []);

    //Edit form that user will use to fill out new information
    return (
        <>
        <main style={{ textAlign: "center" }}>
          <form className="form--login" onSubmit={handleUpdate}>
            <h1 className="h3 mb-3 font-weight-normal">
              Create Your Profile
            </h1>
        {profileEdit.map(profile => {
          if (profile.id == localStorage.getItem("user_id")) {
            return (
              <div>
            <fieldset>
              <label htmlFor="inputFirstName"> First Name </label>
              <input
                ref={firstName}
                type="text"
                name="firstName"
                className="form-control"
                defaultValue={profile.user.first_name}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputLastName"> Last Name </label>
              <input
                ref={lastName}
                type="text"
                name="lastName"
                className="form-control"
                defaultValue={profile.user.last_name}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputCity"> City </label>
              <input
                ref={city}
                type="text"
                name="city"
                className="form-control"
                defaultValue={profile.city}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputState"> State </label>
              <input
                ref={state}
                type="text"
                name="state"
                className="form-control"
                defaultValue={profile.state}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputLinkedin"> LinkedIn Link </label>
              <input
                ref={linkedin}
                type="text"
                name="linkedin"
                className="form-control"
                defaultValue={profile.linkedin}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputGithub"> Github Link </label>
              <input
                ref={github}
                type="text"
                name="github"
                className="form-control"
                defaultValue={profile.github}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputResume"> Resume Link </label>
              <input
                ref={resume}
                type="text"
                name="resume"
                className="form-control"
                defaultValue={profile.resume}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputPortfolio"> Portfolio Website Link </label>
              <input
                ref={portfolio}
                type="text"
                name="portfolio"
                className="form-control"
                defaultValue={profile.portfolio}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputCodingChallenge"> Completed Coding Challenge Link </label>
              <input
                ref={codingchallenge}
                type="text"
                name="codingchallenge"
                className="form-control"
                defaultValue={profile.codingchallenge}
                required
              />
            </fieldset>
            </div>
              );
            }
          })}
            <fieldset>
              <button type="submit">Submit Profile</button>
            </fieldset>
          </form>
        </main>
      </>
    );
};

export default CreateProfile;