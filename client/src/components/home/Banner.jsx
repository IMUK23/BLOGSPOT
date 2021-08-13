import React from 'react'
import {Box,makeStyles, Typography} from '@material-ui/core'

const stylesclass=makeStyles({

    banner_image:{
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        height:'50vh',
        width:'100vw',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    sitename:{
        color:"white",
        fontSize:"64px",
        fontWeight:"bolder",
        WebkitTextStrokeWidth: "3px",
        WebkitTextStrokeColor: "#000",
    },
    sitecaption:{
        background:"white",
        fontSize:"32px",
        fontWeight:"bolder",
        fontFamily:"Cedarville Cursive"
    }

})

function Banner() {
    const styles=stylesclass()
    return (
        <Box  className={styles.banner_image}>
            <Typography className={styles.sitename}> BLOGSPOT </Typography>
            <Typography className={`caption-font ${styles.sitecaption} `}> pen down your thoughts</Typography>
        </Box>
    )
}

export default Banner
