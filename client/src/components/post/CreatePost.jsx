import React from 'react'
import { useState,useEffect } from 'react';
import { Box, FormControl, makeStyles, Button, InputBase, TextareaAutosize } from '@material-ui/core'
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import {sendData,uploadImage} from './../service/api'
import History from '../History';

const styleclass = makeStyles(theme => ({
    container: {
        marginTop: "64px",
        padding: "0px 100px",
        [theme.breakpoints.down("md")]: {
            padding: "0px"
        }

    },
    image: {
        height: "50vh",
        width: "100%",
        objectFit: "cover",

    },
    icon: {
        marginTop: "7px",
        cursor: "pointer"
    },
    form: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        marginTop: "15px",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    textfield: {
        flex: "1",
        margin: "0px 10px",
        fontSize: "25px",

    },
    button: {
        marginRight: "10px",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    catergory: {    
        marginTop:"10px"
    },
    textarea: {
        width: "100%",
        marginTop: "45px",
        border: "none",
        '&:focus-Visible': {
            outline: "none"
        },
        fontSize: "18px"
    }
})
)

function CreatePost() {
    const style = styleclass()
  
    const initialvalues = {
        title: '',
        category: 'General',
        username: 'Utkarsh',
        date: new Date(),
        description: '',
        image: ''
    }

    const [ post, setPost ] = useState(initialvalues)

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

    const fillinfo=(e) => (
            setPost(post=>({...post,[e.target.name]:e.target.value} ))
    )

    const savePost = async () =>{
        await sendData(post)
        History.push("/");
    }
    
    console.log(post)
    return (
        <Box className={style.container}>
            <img className={style.image} src={`${url}`}  alt="banner image" />
            <FormControl className={style.form}>
                <label htmlFor="imageinput">
                <ImageSearchIcon  className={style.icon} />
                </label>
                <input style={{display:"none"}} type="file" id="imageinput"
                onChange ={(e)=> {setFile(e.target.files[0])}} />


                <InputBase className={style.textfield} name="title" onChange={(e)=>fillinfo(e) } placeholder="title of blog" />
                <Button onClick={()=> savePost()}variant="contained" color="primary" className={style.button}>Create</Button>
            </FormControl>
            <InputBase name="category" onChange={(e)=>{fillinfo(e)}} className={style.catergory} placeholder="Enter the Category Here" />
            <TextareaAutosize placeholder="Put Your Thoughts Here" name="description" onChange={(e)=>fillinfo(e) } minRows='5' className={style.textarea}>

            </TextareaAutosize>
        </Box>
    )
}

export default CreatePost
