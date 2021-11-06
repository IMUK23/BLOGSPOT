import React,{useState,useEffect,useRef} from 'react';
import { makeStyles} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { updatePostData } from '../service/api';
import { getOnePostData } from '../service/api';
import { globaluser } from '../login/Login';

const styleClass= makeStyles({
    like:{
        marginTop:"20px",
    }
})

function Likes(props) {
    const styles=styleClass()
    const [postdata,setPost]=useState({liked:[]})
    const curruser=globaluser;
    let initialvisible=false;
   if(postdata.liked.indexOf(curruser.username)==-1){
        initialvisible=false;
    }
    else{
        initialvisible=true;
    }
    
    const [visible,changeVisible]=useState(initialvisible); 
    useEffect(()=>{
        const fetchdata = async() =>{
            let data=await getOnePostData(props.postid)
            setPost(data)
            console.log("Fetched data is" +data);
            if(data.liked.indexOf(curruser.username)==-1){
                changeVisible(false);
            }
            else{
                changeVisible(true);
            }
        }
        fetchdata()
    },[])
    

    const updateLike = async () => {
        if(postdata.liked.indexOf(curruser.username) ==-1)
        {postdata.liked.push(curruser.username);}
        else{
            let index=postdata.liked.indexOf(curruser.username);
        postdata.liked.splice(index,1);
        }
        await updatePostData(props.postid,postdata);
        changeVisible(!visible);
    }





    return (
        <>
         {
                !visible && <FavoriteBorderIcon className={styles.like} onClick={()=>{updateLike()}} color="error"/>
            }
            {
                visible && <FavoriteIcon className={styles.like} onClick={()=>{updateLike()}}  color="error"/>
            }
        </>
            
    )
}

export default Likes

