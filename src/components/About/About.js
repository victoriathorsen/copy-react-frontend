import React from 'react';
import '../../App.css';

import GetInTouch from './GetInTouch';

function About() {
    return (
        <div className= 'FooterForm'>
            {/* <footer> */}
                <div className="AboutUsContactForm">
                    <div className='AboutUsContainer'>
                        <h3>
                            Our Goal
                        </h3>
                        <br></br>
                        <p>
                            Seeing everything written down and lined up can help you organize your goals and decide what's most important instead of trying to keep track of everything at once. After you write them down, use categories or give each one a ranking number to prioritize your goals.
                        </p>
                        <div className='CopyrightContainer'>
                            <h5>Copyright JournalPro est.2021</h5>
                        </div>
                    </div>
                    <div className='ContactUsContainer'>
                        <GetInTouch />
                    </div>
                </div>
            {/* </footer> */}
        </div>
    )
}
export default About