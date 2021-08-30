import React, {Component} from "react";
import './App.css';

import Home from './components/Body/Home'
import Dashboard from './components/UserAuth/Dashboard'
import Login from './components/UserAuth/Login'
import Logout from './components/UserAuth/Logout'
import EntryListContainer from './components/ShowEntries/EntryListContainer'
import About from './components/About/About'
// import { connect } from 'react-redux'

import {BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {  
    
  state = {
      loggedInStatus: 'Log In',
      user: {},
  }

  // componentDidMount() {
  //   this.props.fetchPosts()
  // }
  
  handleLogin = data => {
    this.setState({
      loggedInStatus: 'Signed In',
      user: data.user
    })
  }
  
  handleLogout = () => {
    this.setState({
      loggedInStatus: 'Logged Out',
      user: {}
    })
  }
  

      
      
      
      checkLoginStatus() {
        fetch('http://localhost:3000/login',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify({
          //   logged_in: true
          // }, {withCredentials: true})
        })
        .then(response => response.json())
        .then(data => {
          console.log('logged in?', data)
        })
      }
      
      componentDidMount(){
        this.checkLoginStatus()
      }
      
      render(){
        if (this.state.loggedInStatus === 'Signed In'){
          return(
            <div className= 'fullpage'>
            <Router>
              <React.Fragment>
                  <nav className= 'navBar'>
                      <ul>
                          <li className= 'eachNav'>
                              <Link to= '/all_posts'>Posts</Link>
                          </li>
                          <li className= 'eachNav'>
                              <Link to='/logout' onClick={this.handleLogout}>Log Out</Link>
                          </li>
                          <li className= 'eachNav'>
                              <Link to='/'>Home</Link>
                          </li>
                      </ul>
                  </nav>

                  <Switch>
                      <Route path= '/all_posts' render= {props => (
                        <EntryListContainer {...props} loggedInStatus= {this.state.loggedInStatus} userInfo={this.state.user} postInfo={this.props.posts} />
                        )}
                        />
                      <Route path= '/logout' render= {props => (
                        <Logout {...props} handleLogout={this.handleLogout} loggedInStatus= {this.state.loggedInStatus}/>
                        )}
                        />
                      <Route path= '/' render= {props => (
                        <Home {...props} loggedInStatus= {this.state.loggedInStatus}/>
                        )}
                        />
                  </Switch>
              </React.Fragment>
            </Router>
          <footer>
            <About />
          </footer>
      </div>
      )
    } else {
      return(
        <div className= 'fullpage'>
            <Router>
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
            </Router>
            <footer>
              <About />
            </footer>
        </div>
      )
    }
  }
}


export default App


// import ModalRoot from './ModalRoot'

// import { showModal, hideModal } from './actions/modal'

// const MESSAGE = "A redux modal component."

// const mapDispatchToProps = dispatch => ({
//   hideModal: () => dispatch(hideModal()),
//   showModal: (modalProps, modalType) => {
//     dispatch(showModal({ modalProps, modalType }))
//   }
// })


