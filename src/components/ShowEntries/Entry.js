import React from 'react'

const Entry = (props) => {

    let tags = props.info.tag_list.map((tag) =>
        <button> {tag} </button>
    )
    
    function handleClick(e) {
        e.preventDefault()
        console.log(props)
        // this.displayModal(e)
    }

    function buttonClick(e){
        e.preventDefault()
        
    }

  

    return (
        <React.Fragment>
            <div onClick = {handleClick} style={{cursor: 'pointer'}} id= {props.info.id} className='one-entry' >
                <br></br>
                <button onClick = {buttonClick} style= {{cursor: 'pointer'}}>
                    edit
                </button>
                <br></br>
                <h4>{props.info.date}</h4>
                <h4>{tags}</h4>
                <h2>{props.info.title}</h2>
                <h3>{props.info.text}</h3>
                <br></br>
            </div>
        </React.Fragment>
    )
}
export default Entry