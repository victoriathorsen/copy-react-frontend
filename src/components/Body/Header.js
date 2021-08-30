

export default class Home extends Component {
    return(){
            <React.Fragment>
              <nav className= 'navBar'>
                  <ul>
                      <li className= 'eachNav'>
                          <Link to='/'>Home</Link>
                      </li>
                      <li className= 'eachNav'>
                          <Link to='/login' >Login</Link>
                      </li>
                      <li className= 'eachNav'>
                          <Link to= '/register'>Sign Up</Link>
                      </li>
                      <li className= 'eachNav'>
                          <Link to= '/all_posts'>Posts</Link>
                      </li>
                  </ul>
              </nav>

              <Switch>
                  <Route path='/login' render= {props => (
                    <Login {...props} handleLogin={this.handleLogin} loggedInStatus= {this.state.loggedInStatus}/>
                    )}
                    />
                  <Route path= '/register' render= {props => (
                    <Dashboard {...props} handleLogin={this.handleLogin} loggedInStatus= {this.state.loggedInStatus} />
                    )}
                    />
                  <Route path= '/all_posts' render= {props => (
                    <EntryListContainer {...props} loggedInStatus= {this.state.loggedInStatus} userInfo={this.state.user}/>
                    )}
                    />
                  <Route path= '/' render= {props => (
                    <Home {...props} loggedInStatus= {this.state.loggedInStatus}/>
                    )}
                    />
              </Switch>
          </React.Fragment>

    }
}