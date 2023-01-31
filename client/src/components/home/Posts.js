import React from 'react'
/*useLocation hook fetches the parameter from the url*/ 
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router'
import {Grid} from '@material-ui/core'
import Posttemplate from './Posttemplate'
import { getPostData } from './../service/api'



function Posts() {
    const initialvalue=[]
    const [posts,setPost]=useState(initialvalue)
    const {search} =useLocation();
    
    useEffect(()=>{
        const fetchdata= async ()=>{
            const data=await getPostData(search);
            if(data!==undefined)
                setPost(data);
            console.log(data);
        }
        fetchdata();
    },[search])

   
   
    return (
        
        posts.map(post => (
           <Grid item lg={3} sm={4} xs={12}>
           <Posttemplate post={post} />
          </Grid>
         ))
           
                  
    )
}

export default Posts
