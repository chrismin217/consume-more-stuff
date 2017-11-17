/* This is contained within HEADER at the top right. The user can post a new item, and access their user settings here. */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Header.css';

class UserGuest extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('UserGuest render');
    
    return (
      <div className="UserGuest">
        <h4>Hello, User</h4>
        <span>Login || Register</span>
      </div>
    );

  }

}
//end class

export default connect(
  null,
  null
)(UserGuest);
