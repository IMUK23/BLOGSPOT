import React from 'react'
import {Box} from '@material-ui/core'
import Header from '../Header'
function About() {
    return (
        <>
        <Header>
        {document.title="BLOGSPOT"}
        </Header>
        <Box style={{marginTop:"64px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            About Me
        </Box>
        </>
    )
}

export default About
