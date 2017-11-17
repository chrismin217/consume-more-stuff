

<div className="Login-reg">
  <ul>

    

    
    <div>
    <li><a href="#" onClick={this.showRegister.bind(this)}>Register</a></li>
    {this.state.showRegister === true ?
    <NewUser />
    

    <li><a href="#" onClick={this.showLogin.bind(this)}>Login</a></li>
    
    <li><LoginUser /></li>
    
    </div>
    

    <div>
      <li><Link to={`/users/${localStorage.getItem('user_id')}/edit`}>Settings</Link></li>
      <li><Link to={`/users/${localStorage.getItem('user_id')}/items`}>My Items</Link></li>
      <li><Logout handler={this.handleLogout.bind(this)}/> </li>
    </div>
    
  </ul>
</div>