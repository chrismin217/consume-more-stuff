/* This is contained within HEADER at the top left. */

/* If logged in, the user can LOGOUT, and VIEW MY ITEMS. */
/* If not logged in, the user can LOGIN or REGISTER.*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserGuest.css';

/*CONTAINERS*/
import LoginForm from '../../LoginForm/LoginForm';
import RegisterForm from '../../RegisterForm/RegisterForm';

class UserGuest extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('UserGuest render');
    let user = localStorage.getItem('username');
    
    return (
      <div className="UserGuest">
        <div className="Welcome"><span>Welcome {!user ? 'Guest' : user}</span></div>

        {!user ? 
          <nav className="Login-reg">
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </nav>
          :
          <nav className="Logout-myItems">
            <ul>
              <li><Link to='/'>Logout</Link></li>
              <li><Link to='/myItems'>My Items</Link></li>
            </ul>
          </nav>
        }

      </div>
    );

  }

}
//end class

export default connect(
  null,
  null
)(UserGuest);
