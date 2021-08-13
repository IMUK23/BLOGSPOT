import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'
import {Box,Button, Grid} from '@material-ui/core'


function Home() {
    return (
        <>
        <Banner />
        <Grid container >
            <Grid item lg={2} xs={12} sm={12}>
                <Categories  />
            </Grid>
            <Grid container item  lg={10} xs={12} sm={12}>  
                <Posts />
            </Grid>
        </Grid>
        </>
    )
}

export default Home
