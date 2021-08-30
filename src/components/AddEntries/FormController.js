import React, {Component} from 'react'
import '../../App.css';
import Select from 'react-select'
import {connect} from 'react-redux';
import { postPost } from '../Redux/Actions/PostPostAction'

// import {BrowserRouter, Switch} from 'react-router-dom'

class FormController extends Component {
    constructor(props){ 
        super(props);
        
        this.state = { 
            showButton: true,
            fetched_tags: [],
            tag_list: [],
            date: "", 
            title: "", 
            text: "" 
        }
    }


    // FETCHING TAGS
    
    componentDidMount() {
        fetch('http://127.0.0.1:3000/tags')
        .then(response => response.json())
        .then(data => {
            this.setState({
              fetched_tags: data
            })
        })
    }

    // CLEARING FORM

    // componentWillUnmount(){
    //     this.setState({ tag_list: [], date: '', title: '', text: '' })
    //  }

    // ADDING EACH TAG FOR POST

    onSelectHandler = (e) => {
        for (let tag of e) {
            this.setState({
                tag_list: [...this.state.tag_list, tag.value]
            })
        }
    }

    // UPDATING TEXT AND DATE ON POST
    
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // SUBMIT POST 

    submitHandler = (e) => {
        this.user = this.props.userID.id

        e.preventDefault()

        this.setState({
            showButton: true,
            date: e.target.date.value,
            title: e.target.title.value,
            text: e.target.text.value
        })

        // debugger      
        this.props.postPost(this.state, this.props.userID)  

        // return dispatch => {
        //     fetch('http://127.0.0.1:3000/posts', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             user_id: `${this.props.userID.id}`,
        //             date: `${this.state.date}`,
        //             title: `${this.state.title}`,
        //             text: `${this.state.text}`,
        //             tag_list: `${this.state.tag_list}`
        //         })
        //     })
        //     .then(resp => {
        //         return resp.json()
        //     })
        //     .then((data) => {
        //         alert('Added Post')
        //         dispatch({
        //             type: 'ADD_POST',
        //             posts: data
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // }
    }

    
    render(){
        if (this.state.showButton) {
            return (
                <div>
                    <button onClick={() => this.setState({showButton: false})}>Add Entry</button>
                </div>
            )
        } else {
            let tags = this.state.fetched_tags
            let tagOptions = tags.map((tag) => (
                {key: `${tag.id}`, value: `${tag.name}`, label: `${tag.name}`}
                ))
                
                return(
                    <div className= 'row'>
                        <button onClick={() => this.setState({showButton: true})}>Close Form</button>
                        <br></br>
                        <br></br>
                        <div className= "entryForm">
                            <form onSubmit={this.submitHandler} >
                                <input type="date" placeholder="Date" value={this.state.date} onChange={this.onChangeHandler} name="date" />
                                <br></br>                             
                                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onChangeHandler} name="title" autoComplete='off'/>
                                <br></br>                             
                                <input type="text" placeholder="Text" value={this.state.text} onChange={this.onChangeHandler} name="text" autoComplete='off'/>
                                <Select options= {tagOptions} isMulti name='tags' onChange={this.onSelectHandler} />
                                <br></br>   
                                <br></br>                                                       
                                <input type="submit" value="Add Post"/>
                            </form>
                        </div>
                    </div>
            )
        }
    } 
}
    const mapDispatchToProps = dispatch => ({
        addEntry: formData => dispatch({type: 'ADD_POST', payload: formData})
    })

export default connect(mapDispatchToProps, { postPost })(FormController)