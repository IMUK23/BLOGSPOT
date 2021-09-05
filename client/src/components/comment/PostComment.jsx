import { Box,makeStyles, TextareaAutosize,Button } from '@material-ui/core'
import React,{useState,useEffect,useRef} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Comment from '../comment/Comment';
import { getComments } from '../service/api';
import { sendComment } from '../service/api';
import { updatePostData } from '../service/api';
import { getOnePostData } from '../service/api';
import History from '../History';

const styleClass=makeStyles({
    container:{
        display:"flex",
        flexDirection:"row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginTop:"30px"
    },
    commentbox:{
        width:"90%",
        '&:focus-visible':{
            outline:"none"
        }
    },
    like:{
        marginTop:"20px",
    }
})


const PostComment = (props) => {
    const styles=styleClass();
    
    const initialcommentvalue={
        postid: props.postid,
        commentauthor:"Utkarsh",
        commentdate: new Date(),
        commentdata:""
    }

    const [postdata,setPost]=useState({liked:[]})
    useEffect(()=>{
        const fetchdata = async() =>{
            let data=await getOnePostData(props.postid)
            setPost(data)
            console.log("Fetched data is" +data);
        }
        fetchdata()
    },[])

   
    let initialvisible=false;
   if(postdata.liked.indexOf('Utkarsh')==-1){
        initialvisible=false;
    }
    else{
        initialvisible=true;
    }
    
    const [visible,changeVisible]=useState(initialvisible);
    const [comments,setComments] =useState([]);

    const [comment,setComment] = useState(initialcommentvalue);

    const [trigger,update]=useState(false);

    const ref = useRef("")
    
    
    useEffect(()=>{
        const fetchdata= async ()=>{
            let data=await getComments(props.postid);
               let arraydata=Array.from(data);
                setComments(arraydata);
                console.log(arraydata);

        }
        fetchdata();
        console.log(comments);
    },[trigger])

    const addComment=(e)=>{
        setComment(co => ({...co,[e.target.name]:e.target.value}))
    }

    const sendCommentData= async ()=>{
        update(!trigger);
        if(comment.commentdata === ''){
            alert("Cannot post empty comments");
        }
        else
        {
            await sendComment(comment);
            ref.current.value="";
        }
    }

    const updatelike = async () => {
        changeVisible(!visible);
       if(postdata.liked.indexOf('Utkarsh')==-1){
            postdata.liked.push('Utkarsh');
        }
        else{
            let index=postdata.liked.indexOf('Utkarsh');
            postdata.liked.splice(index,1);
        }

        await updatePostData(props.postid,postdata);
    }

    return (
        <>
            {
                !visible && <FavoriteBorderIcon className={styles.like} onClick={()=>{updatelike()}} color="error"/>
            }
            {
                visible && <FavoriteIcon className={styles.like} onClick={()=>{updatelike()}}  color="error"/>
            }
            <Box className={styles.container}>
                <PersonIcon/>
                <TextareaAutosize ref={ref} onChange={(e=> addComment(e))} className={styles.commentbox} minRows={3} placeholder="Add Your Comment Here" name="commentdata"/>
                <Button variant="contained" color="primary" onClick={()=>sendCommentData()}> Post</Button>
            </Box>
            {comments.map(co=>(
                <Comment id={co._id} t={trigger} f={update}/>
            ))}
            
           
        </>

    )
}

export default PostComment
