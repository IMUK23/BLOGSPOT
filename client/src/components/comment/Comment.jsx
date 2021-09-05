import React, { useState,useEffect } from 'react'
import {Box,makeStyles, TextareaAutosize, Typography} from '@material-ui/core'
import {Delete, Edit} from '@material-ui/icons'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import { deleteComment, editComment, getCommentData } from '../service/api';
import History from '../History';

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
        border:"none",
        wordBreak:"break-word"
    },
    icon:{
        border:"1px solid #000",
        borderRadius:"5px",
        padding:"5px",
        margin:"5px"
    }
})

const Comment= (props) => {
    const id=props.id;
    const p_update=props.f;
    const p_trigger=props.t;
    const styles=styleClass();
    const [visible,changeVisible]=useState(false);

    const [comment,setComment]=useState({});
    const [trigger , update] =useState(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data=await getCommentData(id);
            setComment(data);
            console.log(data);
        }
        fetchData();
    },[trigger])
    
    const editCommentField=(e)=>{
        setComment(co => ({...co,[e.target.name]:e.target.value}));
    }


    const changecomment=async ()=>{
        await editComment(id,comment);
        update(!trigger);
        changeVisible(!visible);
    }
    
    const removeComment =() =>{
        console.log("Comment Deletion started Successfully");
        deleteComment(id);
        console.log("Comment Delete completed Successfully");
        History.go(0);
        //p_update(!p_trigger);
       
    }


    return (
        <Box className={styles.container}>
           <Box className={styles.commentbox}> 
                <Box className={styles.header}>
                    <Typography className={styles.author}>{comment.commentauthor}</Typography>
                    <AccessTimeIcon className ={styles.timeicon}> </AccessTimeIcon>
                    <Typography className={styles.date}>{new Date(comment.commentdate).toDateString()}</Typography>
                </Box>
                {
                !visible && <Typography className={styles.comment}>{comment.commentdata}</Typography>
                }
                {
                visible && <TextareaAutosize onChange={(e)=> editCommentField(e)} name="commentdata" className={styles.comment}>{comment.commentdata}</TextareaAutosize>
                }
                
                
                
            </Box>    
            <Box className={styles.buttons}>
                {
                !visible && <Edit onClick={()=> changeVisible(!visible)} className={styles.icon} color="primary" />
                }
                {
                visible && <DoneIcon onClick={()=> changecomment()} className={styles.icon} color="primary" />
                }

                <Delete onClick={()=> removeComment()} className={styles.icon} color="error" />
            </Box>    

        </Box>    
    )
}

export default Comment
