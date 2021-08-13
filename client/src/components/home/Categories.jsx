import React from 'react'
import {Button, makeStyles, StylesProvider, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import History from '../History'

const styleClass=makeStyles({
    createButton:{
        background:"#438BE8",
        color:"white",
        margin:20,
        width:200,
        '&:hover':{
            background:"#7BA3E8",
        }
    },
    table:{
        border:'1px solid rgba(224,224,224)'
    },
    categoryname:{
        cursor:"pointer"
    }
})

function Categories() {
    const categoryarray=['Music','Movies','Sports','Fashion','Tech']
    const styles=styleClass()
    return (
        <>
        <Button onClick={() => History.push('/create')} variant="contained" className={styles.createButton} >CREATE BLOG
        </Button>

       
        <Table className={styles.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Popular Categories
                    </TableCell>    
                </TableRow>
            </TableHead>

            <TableBody>
                {categoryarray.map(category=>(
                    <TableRow>
                    <TableCell className={styles.categoryname}>{category}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        

        </>
    )
}

export default Categories
