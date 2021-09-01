import { Box,makeStyles, TextareaAutosize,Button } from '@material-ui/core'
import React,{useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styleClass=makeStyles({
    container:{
        display:"flex",
        flexDirection:"row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginTop:"30px"
    },
    commentbox:{
        width:"90%"
    },
    like:{
        marginTop:"20px"
    }
})


function PostComment() {
    const styles=styleClass();
    const [visible,changeVisible]=useState(false);
    return (
        <Box>
            {
                !visible && <FavoriteBorderIcon className={styles.like} onClick={()=>{changeVisible(!visible)}} color="error"/>
            }
            {
                visible && <FavoriteIcon className={styles.like} onClick={()=>{changeVisible(!visible)}}  color="error"/>
            }
            <Box className={styles.container}>
                <PersonIcon/>
                <TextareaAutosize className={styles.commentbox} minRows={3} />
                <Button variant="contained" color="primary"> Post</Button>
            </Box>
        </Box>

    )
}

export default PostComment
