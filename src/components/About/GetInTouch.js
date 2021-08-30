import React from 'react'
// import { render } from 'react-dom'

function GetInTouch() {
    return(
        <div className="ContactContainer">
            <h5>
                Leave a Message
            </h5>
            <div className='ContactForm'>
                <form>
                    <input name="name" input="text" placeholder='Name'/>
                    <br></br>
                    <input name="email" input="email" placeholder='Email'/>
                    <br></br>
                    <input name="subject" input="subject" placeholder='Subject'/>
                    <br></br>
                    <input name="message" input="text" placeholder='Message'/>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Send Message" />
                    <br></br>
                    <br></br>
                </form>
            </div>
        </div>
    )
}
export default GetInTouch