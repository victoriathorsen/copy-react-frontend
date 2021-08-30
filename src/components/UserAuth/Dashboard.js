import React, {Component} from 'react';
import Register from './Register'

class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    handleAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/')
    }
    
    render(){
        return (
            <div>
                <Register loggedIn= {this.props.loggedInStatus} handleAuth= {this.handleAuth} />
            </div>
        )
    }
}
export default Dashboard