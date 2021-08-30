import React from 'react'
import Entry from './Entry'
// import FormController from '../AddEntries/FormController'
// import SearchEntry from './SearchEntry'
// import ModalEntry from './ModalEntry'

class EntryList extends React.Component {
    allTheEntries = () => {
        return this.props.allEntries.reverse().map( entry => <Entry key={entry.id} info={entry} />)
    }
    
    render() {
        // debugger
        if (this.props.allEntries.length < 1) {
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                    <h3>
                        No Posts
                    </h3>
            </React.Fragment>
        )} else {
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <div className='all-entries'>    
                        {this.allTheEntries()}
                </div>
            </React.Fragment>
        )}
    }
}
export default EntryList