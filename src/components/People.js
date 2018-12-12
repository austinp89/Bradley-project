import React, { Component } from 'react';


class People extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <p>{this.props.people}</p>
      </div>
    );
  }
}

export default People;
