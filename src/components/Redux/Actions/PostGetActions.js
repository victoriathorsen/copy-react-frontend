

export function fetchPosts(props){
    // dispatch({type: 'LOADING_POSTS'})
    return dispatch => {
        fetch(`http://127.0.0.1:3000/users/${props.userInfo.id}`)
        .then(response => {
            return response.json()
        }).then(data => {
            dispatch({
                type: 'ADD_POST', 
                posts: data
            })
        })
    }
} 