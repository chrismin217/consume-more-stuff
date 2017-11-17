import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import './LoginForm.css';

/*ACTIONS*/
import { loginUser } from '../../actions/users';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleSubmit(e) {
    console.log('SUBMIT');
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(user);
    this.props.loginUser(user);
  }


  render() {
   
    console.log('LoginForm render');

    return (

      <div className="Login-form">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel className="label">Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="label">Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      
    );
  }
};
//end class

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser : (user) => {
      dispatch(loginUser(user));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);