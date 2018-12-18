import React, { Component } from 'react';


class Form extends Component {
  state = {
    emailAddress:"",
    password:""
  }

  handleSubmit = (e)=>{
    e.preventDefault()
      const data = JSON.stringify({...this.state})
      fetch('http://localhost:4000',{
        method: 'POST',
        body: data,
        headers: {
          "Content-Type": "Application/json"
        }
      })
  }

  render() {
    console.log(this)
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.setState({emailAddress: e.target.value})}/>
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

