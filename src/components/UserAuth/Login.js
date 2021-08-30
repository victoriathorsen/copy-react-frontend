import React, { Component }  from 'react';

class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      errors: ''
    }
  }

  onChangeHandler = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }


  submitHandler = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      }, { withCredentials: true}
      )
    })
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'created'){
        alert('logged in')
        this.props.handleLogin(data)
        this.props.history.push('/')
      } else {
        alert('Username or Password is incorrect')
        this.setState= {
          errors: data.status
          
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){

    return (
      <div className= 'loginForm'>
        <h3>Log In</h3>
        <form onSubmit={this.submitHandler}>                           
          <input type="username" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler} name="username" required/>
          <br></br>   
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandler} name="password" required/>
          <br></br>
          <input type="submit" value="Log In" />
        </form>
      </div>
    )

  }
}
export default Login