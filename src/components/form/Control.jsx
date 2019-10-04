import React from 'react';
import propTypes from 'prop-types';
import {browserHistory} from 'react-router';

class Control extends React.Component {
  state = {
    Email_id: '',
    Password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    browserHistory.push('./Home')
    //window.location.href="./components/Home"
    // alert(
    //   'A name was submitted: ' +
    //     this.state.name +
    //     '\r\n' +
    //     'An age was submitted:' +
    //     this.state.age,
    //);
  };

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Enter Email-id"
          value={this.state.Email_id}
          name="Email_id"
          required={true}
          onChange={this.handleChange}
        />
        <br />
        <input
          placeholder=" Password"
          value={this.state.Password}
          name="Password"
          onChange={this.handleChange}
        />
        <br />
        <button type="submit" onClick={() => this.onSubmit()}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}

Control.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default Control;
