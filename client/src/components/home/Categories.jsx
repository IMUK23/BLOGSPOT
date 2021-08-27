import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Button, InputBase, makeStyles, StylesProvider, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import History from '../History'

const styleClass=makeStyles({
    createButton:{
        background:"#438BE8",
        color:"white",
        margin:20,
        width:"85%",
        '&:hover':{
            background:"#7BA3E8",
        }
    },
    table:{
        border:'1px solid rgba(224,224,224)'
    },

    categoryname:{
        cursor:"pointer"
    },
    searchdiv:{
        display:"flex",
        flexDirection:"column",
        alignItems:"centre",
        justifyContent:"center",
    },
    searchbox:{
        border:"1px solid #0e0f0f",
        marginLeft:"15px",
        width:'85%'
    },
    searchbutton:{
        width:"40%",
        margin:"auto"
    }
})

function Categories() {
    const categoryarray=['Music','Movies','Sports','Fashion','Tech']
    const styles=styleClass()
    const [searchdata,inputdata]=useState("");

    const input=(e)=>{
        inputdata(e.target.value);
    }


    return (
        <>
        <Button onClick={() => History.push('/create')} variant="contained" className={styles.createButton} >CREATE BLOG
        </Button>

       
        <Table className={styles.table}>
            <TableHead>
                <TableRow>
                    <Box className={styles.searchdiv}>
                    <InputBase onChange={(e)=> input(e)}className={styles.searchbox} placeholder="Seach By Category" name="seachbox" />
                    <Button onClick={()=>{
                        History.push(`/?category=${searchdata}`)
                    }} variant="contained" className={styles.searchbutton} >Search </Button>
                    </Box>
                </TableRow>
                <TableRow>
                    <TableCell  className={styles.categoryname} onClick={()=>{
                        History.push(`/`)
                    }}>All Categories
                    </TableCell>    
                </TableRow>
            </TableHead>

            <TableBody>
                {categoryarray.map(category=>(
                    <TableRow>
                    <TableCell onClick={()=>{
                        History.push(`/?category=${category}`)
                    }} className={styles.categoryname}>{category}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        

        </>
    )
}

export default Categories
