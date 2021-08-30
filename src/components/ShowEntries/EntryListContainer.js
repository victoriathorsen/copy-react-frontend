import React, { Component } from 'react'
import EntryList from './EntryList'
import TherapistNotes from '../Body/TherapistNotes'
import Music from '../Body/Music'
import Random from '../Body/Random'
import { connect } from 'react-redux'
import { fetchPosts } from '../Redux/Actions/PostGetActions'
import FormController from '../AddEntries/FormController'

// import {BrowserRouter as Router, 
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom'



class EntryListContainer extends Component {

 
    componentDidMount() {
        if (this.props.loggedInStatus === 'Signed In'){
            this.props.fetchPosts(this.props)
        }
    }
                
        render(){
            if (this.props.loggedInStatus === 'Signed In') {
                return (
                <React.Fragment>
                    <div className='left-column'>
                        <FormController handlePostSubmit = {this.handlePostSubmit} userID={this.props.userInfo}/>
                        <EntryList allEntries= {this.props.allEntries} userID= {this.props.userInfo}/>
                    </div>
                    <div className= 'right-column'>
                        <TherapistNotes />
                        <Random />
                        <Music/>
                    </div>
                </React.Fragment>
                )
        } else {
            return (
                <React.Fragment>
                    <h1>Sign up or log in to add your journal</h1>
                </React.Fragment>
            )
        }
    }
    
}

function mapStateToProps(state) {
    console.log(state)
    return {
        allEntries: state.posts,

    }
}

export default connect(mapStateToProps, { fetchPosts })(EntryListContainer)


// {/* <Login loggedInStatus= {this.props.loggedInStatus}/> */}
// {/* <Switch>
//     <Route path='/login' render= {props => (
//         <Login {...props} handleLogin={this.handleLogin} loggedInStatus= {this.state.loggedInStatus}/>
//         )}
//         />
//     </Switch> */}