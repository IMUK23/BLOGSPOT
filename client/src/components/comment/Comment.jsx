import React from 'react'
import {Box,makeStyles, Typography} from '@material-ui/core'
import {Delete, Edit} from '@material-ui/icons'

const styleClass =makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
    },
    commentbox:{
        display:"flex",
        flexDirection:"column"
    }
})

function Comment() {

    const styles=styleClass();

    return (
        <Box className={styles.container}>
           <Box className={styles.commentbox}> 
                <Typography> Author Name</Typography>
                <Typography> Date </Typography>
                <Typography>Comment </Typography>
            </Box>    
            <Box className={styles.buttons}>
                <Edit color="primary" />
                <Delete color="error" />
            </Box>    

        </Box>    
    )
}

export default Comment
