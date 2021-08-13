import React from 'react'
import {Grid} from '@material-ui/core'
import Posttemplate from './Posttemplate'



function Posts() {
    let posts=[1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <>
        {posts.map(post => (
           <Grid item lg={3} sm={4} xs={12}>
           <Posttemplate/>
          </Grid>
         ))}
        </>   
                  
    )
}

export default Posts
