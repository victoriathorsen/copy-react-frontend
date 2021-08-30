
export function postPost(props, userID){
    // debugger
    return dispatch => {
        fetch('http://127.0.0.1:3000/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: `${userID.id}`,
                date: `${props.date}`,
                title: `${props.title}`,
                text: `${props.text}`,
                tag_list: `${props.tag_list}`
            })
        })
        .then(resp => {
            return resp.json()
        })
        .then((data) => {
            dispatch({
                type: 'ADD_POST',
                posts: data
            })
            alert('Added Post')
        })
        .catch(error => {
            console.log(error)
        })
    }
}