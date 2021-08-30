import React, {Component} from 'react'


import {BrowserRouter as Router, 
    Link,
    // Switch,
    // Route
  } from 'react-router-dom'

export default class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <React.Fragment>
                <div className= 'UserStatus'>
                    <h4>Status: {this.props.loggedInStatus}</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="column-66">
                            <h1 className="xlarge-font"><b>JournalPro</b></h1>
                            <h1 className="large-font" style={{color:'Pink'}}><b>Digitize Your Journal</b></h1>
                            <p><span style={{font_size: '36px'}}> Write a paperless entry anytime.</span> A never-ending journal that is always at your fingertips and impossible to misplace. Add 'tags' and a digital 'date' to mark or locate any entry.</p>
                            <br></br>
                            <Router>
                                <Link to="/login" className="button" id="new-journal-entry">Get Started</Link>
                            </Router>
                        </div>
                        <div className="column-33">
                            <img src="https://bulliesout.com/wp-content/uploads/2020/09/Digital-Detox-Journal-Cover-scaled.jpg" alt="Journal" width="335" height="471"/>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}
