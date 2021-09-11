import React from 'react'
import { useState,useEffect } from 'react';
import {Box, FormControl, makeStyles,Button, InputBase, TextareaAutosize} from '@material-ui/core'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { getOnePostData ,updatePostData,uploadImage } from '../service/api';
import History from '../History';
import Header from '../Header';

const styleclass=makeStyles(theme => ({
    container:{
        marginTop:"64px",
        padding:"0px 100px",
        [theme.breakpoints.down("md")]:{
            padding:"0px"
        }
        
    },
    image:{
        height:"50vh",
        width:"100%",
        objectFit:"cover",
        
    },
    icon:{
        marginTop:"7px",
        cursor:"pointer"
    },
    form:{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        marginTop:"15px"
    },
    textfield:{
        flex:"1",
        margin:"0px 10px",
        fontSize:"25px"
    },
    textarea:{
        width:"100%",
        marginTop:"50px",
        border:"none",
        '&:focus-Visible':{
            outline:"none"
        },
        fontSize:"18px"
    }
})
)
/*Match is a default prop which can access various data like URL using match.params*/ 
function UpdatePost({match}) {
    const style=styleclass()

    const [post,setPost] =useState({})

    const [file,setFile] =useState("")

    const [image,setImage]=useState("")

    const url =post.image ? post.image:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'";
    
    useEffect(()=>{
        const getImage= async () =>{
            if(file){
                const data=new FormData();
                data.append("name",file.name)
                data.append("file",file)
                const image=await uploadImage(data)
                post.image=image.data;
                setImage(post.image);
            }
            else{
                console.log("Error while fetching the image inside (create post)");
            }
        }
        getImage();
    },[file])

    useEffect( () => {
        const fetchdata = async () =>{
            const data= await getOnePostData(match.params.id);
            setPost(data)
        }
        fetchdata();
    }  
    ,[])

    const handlechange=(e)=>{
        setPost(post => ({...post,[e.target.name] : e.target.value}))
        console.log(post);
    }

    const updateData = async () =>{
        console.log(post)
        await updatePostData(match.params.id,post)
        console.log("Data sent successfully");
        History.push(`/display/${match.params.id}`)
    }

    return (
        <>
        <Header>
      
        </Header>
        <Box className={style.container}>
             <img className={style.image} src={`${url}`}  alt="banner image" />
            <FormControl className={style.form}>
                <label htmlFor="imageinput">
                <ImageSearchIcon  className={style.icon} />
                </label>
                <input style={{display:"none"}} type="file" id="imageinput"
                onChange ={(e)=> {setFile(e.target.files[0])}} />
                
                <InputBase 
                className={style.textfield} 
                placeholder="title of blog" 
                value={post.title}
                name="title"
                onChange={e => handlechange(e)}>
                </InputBase> 
                <Button variant="contained" color="primary" onClick={() => updateData()}>Update</Button>
            </FormControl>
            <InputBase 
            placeholder="Category"
             value={post.category}
             name="category"
             onChange={e => handlechange(e)}
             ></InputBase>
            <TextareaAutosize 
            placeholder="Put Your Thoughts Here"
             minRows='5' 
             className={style.textarea} 
             name="description"
             value={post.description}
             onChange={e => handlechange(e)}>
            </TextareaAutosize>
        </Box>
        </>    
    )
}

export default UpdatePost
