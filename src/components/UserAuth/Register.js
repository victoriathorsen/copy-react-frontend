import React, { Component }  from 'react';
// import Entry from './Entry';
// import EntryList from './EntryList'

class Register extends Component {
  constructor(props){
    super(props)

    this.state = { 
      name: '',
      email: '',
      username: '', 
      password: '',
      password_confirmation: '',
      registrationErrors: ''
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
      e.preventDefault()
      console.log('user registered')
      fetch('http://127.0.0.1:3000/registrations', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            name: `${this.state.name}`,
            email: `${this.state.email}`,
            username: `${this.state.username}`,
            password: `${this.state.password}`,
            password_confirmation: `${this.state.password_confirmation}`
          }
        }, { withCredentials: true}
        )
    })
    .then(response => response.json())
    .then((data) => {
      if (data.status === 'created'){
        this.props.handleAuth(data)
      } else {
        this.setState = {
          registrationErrors: data
        }
      }
    }).catch(error => {
      console.log(error)
    })

  } 

  render(){
        return (
          <div className= 'registerForm'>
            <h3>Sign Up</h3>
            <form onSubmit={this.submitHandler}>
              <input type="name" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler} name="name" required/>
              <br></br>                             
              <input type="email" placeholder="Email" value={this.state.email} onChange={this.onChangeHandler} name="email" required/>
              <br></br>                             
              <input type="username" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler} name="username" required/>
              <br></br>   
              <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandler} name="password" minLength= '7' required/>
              <br></br>  
              <input type="password" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.onChangeHandler} name="password_confirmation" minLength= '7' required/>
              <br></br>                                                       
              <input type="submit" value="Create User"/>
            </form>
          </div>
        )
  }
}
export default Register
