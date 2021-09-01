import React, { useState } from 'react'
import {Box,makeStyles, TextareaAutosize, Typography} from '@material-ui/core'
import {Delete, Edit} from '@material-ui/icons'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';

const styleClass =makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
    },
    commentbox:{
        display:"flex",
        flexDirection:"column"
    },
    header:{
        display:"flex",
        flexDirection:"row",
        marginTop:"25px",
        marginBottom:"5px"
        
    },
    timeicon:{
        marginLeft:"5px",
        opacity:"0.5"
    },
    date:{
        marginLeft:"5px",
        opacity:"0.6"
    },
    comment:{
        marginTop:"5px",
        marginBottom:"5px",
        outline:"none",
        border:"none"
    },
    icon:{
        border:"1px solid #000",
        borderRadius:"5px",
        padding:"5px",
        margin:"5px"
    }
})

function Comment() {

    const styles=styleClass();
    const [visible,changeVisible]=useState(false);

    const [comment,setComment]=useState("comment");
    
    const editComment=(e)=>{
        setComment(e.target.value);
    }
    
    return (
        <Box className={styles.container}>
           <Box className={styles.commentbox}> 
                <Box className={styles.header}>
                    <Typography className={styles.author}> Author Name</Typography>
                    <AccessTimeIcon className ={styles.timeicon}></AccessTimeIcon>
                    <Typography className={styles.date}>Date</Typography>
                </Box>
                {
                !visible && <Typography className={styles.comment}>{comment}</Typography>
                }
                {
                visible && <TextareaAutosize onChange={(e)=> editComment(e)} className={styles.comment} value={comment}></TextareaAutosize>
                }
                
                
                
            </Box>    
            <Box className={styles.buttons}>
                {
                !visible && <Edit onClick={()=> changeVisible(!visible)} className={styles.icon} color="primary" />
                }
                {
                visible && <DoneIcon onClick={()=> changeVisible(!visible)} className={styles.icon} color="primary" />
                }

                <Delete onClick={()=> changeVisible(false)} className={styles.icon} color="error" />
            </Box>    

        </Box>    
    )
}

export default Comment
