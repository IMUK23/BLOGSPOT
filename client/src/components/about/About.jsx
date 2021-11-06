import React from 'react'
import {Box} from '@material-ui/core'
import Header from '../Header'
function About() {
    return (
        <>
        <Header>
        {document.title="BLOGSPOT"}
        </Header>
        <Box style={{marginTop:"64px",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
            <Box style={{display:"block", margin:"20px"}}>

                About Application 

            </Box>
            <Box style={{display:"block", margin:"20px",width:"50%"}}>

                BLOGSPOT is a blogging web application which powers on MERN Stack. The frontend of the system is designed using React and
                Material UI and provides user a rich UI.The Backend of the system is built upon Nodejs and Express.js framework which uses
                Rest APIs for request and response between the front end and backend of the system. The system uses cloud based MongoDB database
                for data storage and accessing the stored data.
                <br /><br /><br />

                <b> Features of BLOGSPOT </b>
                <ul>
                    <li>The application allows users to create blogs of their choice with image addition feature and category
                        addition option.
                    </li>
                    <li>User can delete the created blog and update the blog if they want to</li>
                    <li>
                        The System provides user functionality to like the blog of their choice in real time. 
                    </li>
                    <li>
                        If the user want to comment on any blog of their choice they can do so that too in real time.
                    </li>
                    <li>
                        The system uses authorization methodology which means only authorized user can access the content 
                        and view the system.
                    </li>
                  
                </ul>


                <b> Upcoming Features of BLOGSPOT </b>
                <ul>
                    <li>More secure methodology.
                    </li>
                    <li>Follow and unfollow user feature</li>
                    <li>
                        Donations to user of your choice.
                    </li>
                    
                    
                </ul>

            </Box>
        </Box>
        </>
    )
}

export default About
