import React from 'react'
import {Box} from '@material-ui/core'
import Header from './../Header'
import {Facebook,GooglePlus,Linkedin,Whatsapp} from "@trejgun/material-ui-icons-social-networks"
function Contact() {
    return (
        <>
        <Header>
        {document.title="BLOGSPOT"}
        </Header>
        <Box style={{marginTop:"64px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            This Application is developed and maintained by Utkarsh Bahukhandi.
            <br/> <br/>
            Click on the icons below to connect.
            <Box>
               <Box style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}> <Whatsapp/> <Box> +91-9599406282 </Box> </Box> <br/>
                <a href="https://www.linkedin.com/in/utkarsh-bahukhandi" target="_blank"><Linkedin/></a> <tab />
                <a href="mailto:utkarshbahukhandi0002@gmail.com"><GooglePlus/></a> <tab />

                <a href="https://www.facebook.com/profile.php?id=100008173780081" target="_blank"><Facebook/></a>

            </Box>
        </Box>
        </>
    )
}

export default Contact
