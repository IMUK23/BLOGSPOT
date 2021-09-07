import React from 'react'
import {useState,useEffect} from 'react'
import {Box,Link, makeStyles, StylesProvider, TextareaAutosize, Typography} from '@material-ui/core'
import { Delete,Edit} from '@material-ui/icons';
import  History  from './../History';
import { getOnePostData,deletecurrblog } from '../service/api';

import PostComment from '../comment/PostComment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Likes from '../likes/Likes';

const styleclass=makeStyles(theme=>({
    container:{
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image:{
        height:"50vh",
        width:"100%",
        objectFit:"cover",
        
    },
    icon:{
        border:"1px solid #000",
        borderRadius:"5px",
        padding:"5px",
        margin:"5px"
    },
    icons:{
        float:"right"
    },
    title:{
        textAlign:"center",
        margin:"50px 0px 10px 10px ",
        fontSize:"30px",
        fontWeight:"600"
    },
    link:{
        textDecoration:'none',
        color:'inherit',
        cursor:"pointer"
    },
    subhead:{
        display:"flex",
        flexDirection:"row",
        marginBottom:"20px",
        [theme.breakpoints.down("sm")]:{
            display:"block"
        }
    },
    date:{
        marginLeft:"auto"
    },
    category:{
        marginTop:"10px"
    },
    description:{
        marginTop:"45px"
    }
}))

function DisplayPost({match}) {
    const style=styleclass();
    const [post,setPost]=useState({})
    
    useEffect(()=>{
        const fetchdata = async() =>{
            let data=await getOnePostData(match.params.id)
            setPost(data)
            console.log(data);
        }
        fetchdata()
    },[])

    const deleteblog= async() =>{
       try {
        History.push('/');
           await deletecurrblog(match.params.id);
           
           console.log("Data Deleted Successfully");
        }
       catch(error){
           console.log("Error in deleting the blog");
       }
    }

    return (
        <Box className={style.container}>
            <img className={style.image} src={post.image || 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}/>
            <Box className={style.icons}>
                <Edit onClick={()=> History.push(`/update/${post._id}`)} className={style.icon} color="primary" />
                <Delete onClick={()=> deleteblog()} className={style.icon} color="error"/>
            </Box>
            <Typography className={style.title}>{post.title}</Typography>
            <Box className={style.subhead}>    
               
                    <Typography className={style.author}>Author : 
                        
                    <Link className={style.link} onClick={() => {
   History.push(`/?username=${post.username}`)
  }}>
                        <span>{post.username}</span>
                    </Link>    
                    </Typography>
                <Typography className={style.date}>Date : {new Date(post.date).toDateString()}</Typography>
            </Box>
                
                <Typography className={style.category}>Category :
                <Link className={style.link} onClick={() => {
   History.push(`/?category=${post.category}`)}}>          
                {post.category}
                </Link>
                </Typography>
            
            <Typography className={style.description}>
            {post.description}
            </Typography>
        <Likes postid={match.params.id}/>
        <PostComment postid={match.params.id} />    
        
        </Box>
    )
}

export default DisplayPost
