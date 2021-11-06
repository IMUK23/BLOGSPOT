/*This file consist of header data which each and every page of web app consist of*/
import React from 'react'
import { AppBar,makeStyles,Toolbar,Typography, withTheme } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styleClass = makeStyles({
    /*Classes are declared here*/
    container:{
        background:"#FFFFFF",
        color: "black"
    },
    component:{
        justifyContent:"center",
        cursor:"pointer",
        '& > *':{
            padding:"15px"
        }
    },
    link:{
        textDecoration:"none",
        color:"inherit"
      } 
})

function Header() {
    const styles=styleClass()

    return (
        <React.Fragment>
        <AppBar className={styles.container}>
            <Toolbar className={styles.component}>
            <Link className={styles.link} to="/home">
                <Typography>HOME</Typography>
            </Link>
            <Link className={styles.link} to="/about">
            <Typography>ABOUT</Typography>
            </Link>
            <Link className={styles.link} to="/contact">
            <Typography>CONTACT</Typography>
            </Link>
            <Link className={styles.link} to="/">
            <Typography>LOGOUT</Typography>
            </Link>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    )
}

export default Header



