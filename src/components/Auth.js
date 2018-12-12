import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Auth extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }

    state = {
      email:'',
      password:''
    }

  render() {
    return (
        <Form inline onSubmit={this.handleSubmit}>
        <h1>😍Authentication😍</h1>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => this.setState({email: e.target.value})}/>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
        </FormGroup>
        {' '}
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default Auth
