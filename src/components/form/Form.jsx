// import React from 'react';
// import Display from './Display';
// import Control from './Control';

// class Form extends React.Component {
//   state = {
//     name: '',
//     age: '',
//     email: '',
//   };

//   // displayInfo = () => {
//   //   this.setState({
//   //     name: this.state.name,
//   //     age: this.state.age,
//   //   });
//   // };

//   render() {
//     return (
//       <div className="form">

//         <Control
//           displayInfo={(name, age, email) => this.setState({ name: name, age: age, email: email })}
//         />
//         <Display name={this.state.name} age={this.state.age} email={this.state.email} />
//       </div>
//     );
//   }
// }
// export default Form;
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import {Form} from 'react-bootstrap';
export default class Sign extends Component{
  render(){
    return(
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    
    );
  }
}
