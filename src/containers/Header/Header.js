/* This is the HEADER component. It is primarily responsible for 'Post', 'Account', as well as 'Login', 'Logout', and 'Register.' */

/* It contains two child components: UserGuest and PostAccount */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

/*CHILD COMPONENTS*/
import PostAccount from './PostAccount/PostAccount';
import UserGuest from './UserGuest/UserGuest';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Header render');

    return (
      <div className="Header">
        <PostAccount />
        <UserGuest />
        <div className="Banner"><img src='/banner.jpg' alt='' /></div>
      </div>
    );

  }

}
//end class

export default connect(
  null,
  null
)(Header);


