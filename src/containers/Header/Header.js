/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../App/logo.svg';
import '../App/App.css';
import { Link } from 'react-router-dom';
import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';
import { Redirect } from 'react-router-dom';

class Header extends Component {


  constructor(props) {
    super(props);

    this.state = {
      showLogin : false,
      showRegister : false,
      redirect: false
    };
  }

  showLogin() {
    if(this.state.showLogin === true){
      this.setState({
        showLogin: false
      })
    }else{
      this.setState({
      showRegister : false,
      showLogin : true
      });
    }
  }

  showRegister() {
    if(this.state.showRegister === true){
      this.setState({
        showRegister: false
      })
    }else{
      this.setState({
        showLogin : false,
        showRegister : true
      });
    }
  }

  render() {
    if(this.state.redirect) {
      <Redirect to="/"/>
    }
    return (
      <div className="App-header">
        <div className="Login-reg">

            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/all'}>All Items</Link></div>

            <div>Welcome {localStorage.getItem('username')}</div>
            {!(this.props.user.logged_in) && localStorage.getItem('logged_in') !== 'true' ?
            <div>
            <div><a href="#" onClick={this.showRegister.bind(this)}>Register</a></div>
            {this.state.showRegister === true ?
            <div><NewUser /></div>
            : null}

            <div onClick={this.showLogin.bind(this)}>Login</div>
            {this.state.showLogin === true ?
            <div><LoginUser /></div>
            : null}
            </div>
            : null}


            {this.props.user.logged_in === true || localStorage.getItem('logged_in') === 'true' ?
            <div>
              <div><Link to={`/users/${localStorage.getItem('user_id')}/edit`}>Settings</Link></div>
              <div><Link to={`/users/${localStorage.getItem('user_id')}/items`}>My Items</Link></div>
              <div><Logout /> </div>
            </div>
            : null }

        </div>


        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Consume More Stuff</h1>
      </div>
    );

  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps
)(Header);


