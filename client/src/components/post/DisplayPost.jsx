import React from 'react'
import {Box, makeStyles, StylesProvider, TextareaAutosize, Typography} from '@material-ui/core'
import { Delete,Edit} from '@material-ui/icons';
import  History  from './../History';
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
}))

function DisplayPost() {
    const style=styleclass();
    return (
        <Box className={style.container}>
            <img className={style.image} src='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'/>
            <Box className={style.icons}>
                <Edit onClick={()=> History.push("/update")} className={style.icon} color="primary" />
                <Delete className={style.icon} color="error"/>
            </Box>
            <Typography className={style.title}>Title of the blog</Typography>
            <Box className={style.subhead}>    
                <Typography className={style.author}>Author : <span>Utkarsh Bahukhandi</span></Typography>
                <Typography className={style.date}>Date</Typography>
            </Box>
            <Typography >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Typography>
            
        
        </Box>
    )
}

export default DisplayPost
