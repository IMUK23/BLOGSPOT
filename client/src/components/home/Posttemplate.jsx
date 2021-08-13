import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styleclass=makeStyles({
  container:{
    display:"flex",
    flexDirection:"column",
    height:"350px",
    margin:"10px",
    border:"1px solid #9A9A9A",
    borderRadius:"5px",
    alignItems:"center"
  },
    postimage:{
    height:"150px",
    borderRadius:"5px",
    width:"100%",
    objectFit:"cover"
  },
  author:{
      fontWeight:"bold",
      fontSize:"13px",
      color:"#5C5C5C"
  },
  category:{
    fontWeight:"bold",
    fontSize:"13px",
    color:"#7D7D7D"
  },
   title:{
    fontWeight:"bold",
    fontSize:"18px",
    color:"#7D7D7D"
  },
   intro:{
    fontWeight:"bold",
    fontSize:"18px",
    color:"#5C5C5C",
    wordBreak:"break-word"
  },
  link:{
    textDecoration:"none",
    color:"inherit"

  }
})
function Posttemplate() {
    const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    const styles=styleclass();
    return (
        <Link className={styles.link} to="/display">
          <Box className={styles.container}>
              <img src={url} alt="image" className={styles.postimage}/>
              <Typography className={styles.category}>Category</Typography>
              <Typography className={styles.author}>Author</Typography>
              <Typography className={styles.title}>Title</Typography>
              <Typography className={styles.intro}>Intro</Typography> 
          </Box>
        </Link>
    )
}

export default Posttemplate
