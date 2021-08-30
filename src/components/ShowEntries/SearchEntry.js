import React, {Component} from 'react'

let searchedPosts = []
class SearchEntry extends Component {
    constructor(){
        super()

        this.state = {
            search: '',
            searchedPosts: ''
        }
    }

    changeHandler = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let posts = this.props.entries
        let valueSearched = e.target.search.value
        for (let i =0; i < posts.length; i++){
            debugger
            if (posts[i].tag_list.includes(valueSearched) === true) {
                searchedPosts.push(posts[i])
                // <EntryList allEntries= {this.state.allEntries} userID= {this.props.userInfo}/>
            } else {
                console.log('hi')
            }
        }
        
        // console.log(this.props.entries.map( (entry) => {console.log(entry.tag_list)}))
    }

    componentDidMount() {
        for (let post in searchedPosts) {
            console.log(post)
            debugger
        }

        // fetch(`http://127.0.0.1:3000/users/${this.props.userInfo.id}`)
        //   .then(response => response.json())
        //   .then(entryData => {
        //       this.setState({
        //           allEntries: entryData
        //           })
        //   })
      }

    

    render(){
        return (
            // action="/" method="get"
            <form onSubmit={this.submitHandler} >
                <label htmlFor="header-search">
                    {/* <span className="visually-hidden">Search blog posts</span> */}
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="search" 
                    autoComplete='off'
                    onChange= {this.changeHandler}
                    value={this.state.search}
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default SearchEntry;