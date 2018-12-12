import React, { Component } from 'react';


class Form extends Component {
  state = {
    emailAddress:"",
    password:""
  }
  render() {
    console.log(this)
    console.log(this.state)
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.setState({emailAddress: e.target.value})}/>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

