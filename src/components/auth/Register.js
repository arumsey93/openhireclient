import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import { Form, Label, Button, Grid, Header } from "semantic-ui-react";

const Register = props => {
  const email = useRef();
  const userName = useRef();
  const lastName = useRef();
  const password = useRef();
  const firstName = useRef();
  const city = useRef();
  const state = useRef();
  const verifyPassword = useRef();
  const phoneNumber = useRef();
  const { register } = useSimpleAuth();

  const handleRegister = e => {
    e.preventDefault();

    const newUser = {
      username: userName.current.value,
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      city: city.current.value,
      state: state.current.value,
      phone_number: phoneNumber.current.value,
      password: password.current.value
    };

    register(newUser).then(() => {
      props.history.push({
        pathname: "/"
      });
    });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <Form className="form--login" onSubmit={handleRegister}>
        <Grid centered>
          <Header as='h1' style={{paddingBottom: '25px'}}>Register an Account</Header>
        </Grid>
        <Form.Field>
          <Label htmlFor="userName"> Username </Label>
          <input
            ref={userName}
            type="text"
            name="userName"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="firstName"> First Name </Label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
            autoFocus
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="lastName"> Last Name </Label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            required
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="inputEmail"> Email address </Label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
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
            placeholder="City"
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
            placeholder="State"
            required
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="inputPhone"> Phone Number </Label>
          <input
            ref={phoneNumber}
            type="text"
            name="phone_number"
            className="form-control"
            placeholder="Phone Number"
            required
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="inputPassword"> Password </Label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </Form.Field>
        <Form.Field>
          <Label htmlFor="verifyPassword"> Verify Password </Label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </Form.Field>
        <Form.Field style={{display: 'flex', justifyContent: 'center'}}>
          <Button type="submit">Sign in</Button>
        </Form.Field>
      </Form>
    </main>
  );
};
export default withRouter(Register);