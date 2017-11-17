/* This is contained within HEADER at the top right. The user can post a new item, and access their user settings here. */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../Header.css';

class PostAccount extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('PostAccount render');
    
    return (
      <div className="PostAccount">
        <h4>Post || Account</h4>
      </div>
    );

  }

}
//end class

export default connect(
  null,
  null
)(PostAccount);
