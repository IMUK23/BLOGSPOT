import React from 'react'
import { useState,useEffect } from 'react'
import {Grid} from '@material-ui/core'
import Posttemplate from './Posttemplate'
import { getPostData } from '../service/api'



function Posts() {
    const initialvalue=[]
    const [posts,setPost]=useState(initialvalue)
    
    useEffect(()=>{
        const fetchdata= async ()=>{
            const data=await getPostData();
            setPost(data)
            console.log(data)
        }
        fetchdata();
    },[])

    console.log(posts)
   
    return (
        
        posts.map(post => (
           <Grid item lg={3} sm={4} xs={12}>
           <Posttemplate post={post} />
          </Grid>
         ))
           
                  
    )
}

export default Posts
