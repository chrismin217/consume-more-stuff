/* This is the old Login-reg ternary stuff. It was in the upper right corner and had the login logic. Change this. */

<div className="Login-reg">
  <ul>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/all'}>All Items</Link></li>

    <li>Welcome {localStorage.getItem('username')}</li>
    {!(this.props.user.logged_in) && localStorage.getItem('logged_in') !== 'true' ?
    <div>
    <li><a href="#" onClick={this.showRegister.bind(this)}>Register</a></li>
    {this.state.showRegister === true ?
    <NewUser />
    : null}

    <li><a href="#" onClick={this.showLogin.bind(this)}>Login</a></li>
    {this.state.showLogin === true ?
    <li><LoginUser /></li>
    : null}
    </div>
    : null}

    {this.props.user.logged_in === true || localStorage.getItem('logged_in') === 'true' ?
    <div>
      <li><Link to={`/users/${localStorage.getItem('user_id')}/edit`}>Settings</Link></li>
      <li><Link to={`/users/${localStorage.getItem('user_id')}/items`}>My Items</Link></li>
      <li><Logout handler={this.handleLogout.bind(this)}/> </li>
    </div>
    : null }
    
  </ul>
</div>