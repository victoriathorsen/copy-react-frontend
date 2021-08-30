// import React from 'react'
// import { store } from "../store";

// const initUserState = {
//     posts: []
// }

function postReducer(state = { 
    posts: [], 
}, action) {
    // debugger
    switch (action.type){
        case 'ADD_POST':
            return { posts: state.posts.concat(action.posts) }
                // ...state,
                // posts: action.post
            // };
            default:
                return state
            }
        }
    

export default postReducer;

// function render(){
//     let container = document.getElementById('container');
//     if (store.getState()) {
//         container.textContent = store.getState.join(' ')
//     } else {
//         throw new Error('No Posts Defined in State yet')
//     }
// }