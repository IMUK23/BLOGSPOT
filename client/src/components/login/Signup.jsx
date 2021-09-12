import {React,useState} from 'react'
import {Box,colors,FormControl,InputBase,makeStyles, Typography,Input,Button,Checkbox} from '@material-ui/core'
import { borders } from '@material-ui/system';
import PasswordField from 'material-ui-password-field'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Facebook,GooglePlus,Linkedin} from "@trejgun/material-ui-icons-social-networks"
import History from '../History';

const styleClass = makeStyles((theme)=>(
    {
        container:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            scroll:"none",
            background:"linear-gradient(90deg, rgba(15,12,41,1) 0%, rgba(48,43,99,1) 36%, rgba(36,36,62,1) 100%);",
            height: window.innerHeight,
            flex:1
        },
        loginbox:{
            width:"30%",
            height:"62%",
            padding:"20px",
            display:"flex",
            background:"#FFFFFF",
            flexDirection:"column",
            alignItems:"center",
            [theme.breakpoints.down("sm")]:{
               width:"100%",
               border:"none",
               height:"100%",
               justifyContent:"center"
            }
        },
        heading:{
            fontWeight:"900",
            fontSize:"28px",
            color:"#302b63",
            marginBottom:"30px",
            [theme.breakpoints.down("sm")]:{
                fontSize:"18px"
            }
        },
        userdata:{
            width:"70%",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        },
        
        terms:{
            color:"gray",
        },
        
        
        inputfield:{
            marginBottom:"15px"
        },
        form:{
            width:"100%"
        },
        signup_button:{
            color:"white",
            background:"#302b63",
            '&:hover':{
                background:"#5b5aa5",
            },
            marginTop:"15px"
        },
        check:{
            width:"100%",
            display:"flex",
            flexDirection:"row",
            
        }
    }
))


const Signup=() =>{
const styles=styleClass()
return (
    <>
    <Box className={styles.container} >
        <Box border={2} borderColor="primary.main"  borderRadius={16} className={styles.loginbox}>
            <Typography className={styles.heading}>REGISTER</Typography>
            <Box className={styles.userdata}>
                <FormControl className={styles.form}>
                    Full Name
                    <Input  className={styles.inputfield} inputProps={{ 'aria-label': 'description' }} />
                </FormControl>
                <FormControl className={styles.form}>
                    Username
                    <Input  className={styles.inputfield} inputProps={{ 'aria-label': 'description' }} />
                </FormControl>
                <FormControl className={styles.form}>
                    Password
                    <PasswordField
                        hintText="At least 8 characters"
                        floatingLabelText="Enter your password"
                        errorText="Your password is too short"
                        className={styles.inputfield}
                        />
                </FormControl> 
                <Box className={styles.check}>
                     <Checkbox
                        checked={true}
                        name="checkedB"
                        color="primary"
                    />
                    <Typography className={styles.terms}>I agree to terms and conditions of Blogspot</Typography>
                </Box>    
                <Button variant="contained" className={styles.signup_button} onClick={()=> History.push('/login')}>SignUp </Button>
            </Box>
            
        </Box>    
    </Box>
    </> 
)
}

export default Signup
