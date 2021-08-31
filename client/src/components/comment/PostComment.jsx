import { Box,makeStyles, TextareaAutosize,Button } from '@material-ui/core'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person';

const styleClass=makeStyles({
    container:{
        display:"flex",
        flexDirection:"row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    commentbox:{
        width:"90%"
    }
})


function PostComment() {
    const styles=styleClass();
    return (
        <Box className={styles.container}>
            <PersonIcon/>
            <TextareaAutosize className={styles.commentbox} minRows={3} />
            <Button variant="contained" color="primary"> Post</Button>
        </Box>

    )
}

export default PostComment
