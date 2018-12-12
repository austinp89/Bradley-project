import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Auth extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }

  render() {
    return (
      <div classname='name'>
        <h1>😍Authentication😍</h1>
        <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    );
  }}


export default Auth
