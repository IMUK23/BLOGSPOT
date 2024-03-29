import {React,createContext} from 'react'
import {Box,FormControl,makeStyles, Typography,Input,Button} from '@material-ui/core'
import PasswordField from 'material-ui-password-field'
import {Facebook,GooglePlus,Linkedin} from "@trejgun/material-ui-icons-social-networks"
import History from './../History';
import { useState} from 'react'
import { getuserData } from './../service/api'; 

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
            height:"65%",
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
            marginBottom:"50px",
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
        sociallogin:{
            width:"70%",
            padding:"20px"
        },
        login_alternate_heading:{
            color:"gray",
            marginBottom:"15px"
        },
        icon: {
            marginRight: theme.spacing(5)
        },
        transfer_links:{
            color:"gray",
            marginBottom:"15px",
            cursor:"pointer"
        },
        inputfield:{
            marginBottom:"15px"
        },
        form:{
            width:"100%"
        },
        login_button:{
            color:"white",
            background:"#302b63",
            '&:hover':{
                background:"#5b5aa5",
            },
            marginTop:"15px"
        },
        directiveBox:{
            width:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }
    }
))

export let globaluser={}
const Login= ()=> {
    /*Style function which helps us in styling the web page*/ 
    const styles=styleClass()
    /*Initial value of the user data */
    const initial={fullname:"",username:"",Password:""};
    
    /*A state hook which stores the userdata and update when any change occurs in the data */
    const [userdata,updatedata]=useState(initial)

    /*Function which fills info of the updated user data */
    const fillinfo=(e) => (
        updatedata(userdata=>({...userdata,[e.target.name]:e.target.value} ))
)

/*This is the asynchronous login user function which first fetches the userdata from the backend system using entered 
user's information*/
    const loginuser= async () =>{
        const returneddata= await getuserData(userdata.username);
        /*If we received empty user name from backend we will generate alert window */ 
        if(returneddata.data.username===''){alert("Username or password is wrong");}
        
        /*Or if password matches then we move onto the the home page of the system */
        else if(returneddata.data[0].Password===userdata.Password){
            console.log(userdata);
            
             globaluser={...userdata};

            History.push('/home')
           
        }

        /*Otherwise we will still get alert window*/ 
        else{
            alert("Username or password is wrong");
        }
    }

    return (
        <>
        <Box className={styles.container} >
            <Box border={2} borderColor="primary.main"  borderRadius={16} className={styles.loginbox}>
                <Typography className={styles.heading}>WELCOME TO BLOGSPOT</Typography>
                <Box className={styles.userdata}>
                    <FormControl className={styles.form}>
                        Username
                        <Input name="username"onChange={(e)=>{fillinfo(e)}} className={styles.inputfield} inputProps={{ 'aria-label': 'description' }} />
                    </FormControl>
                    <FormControl className={styles.form}>
                        Password
                        <PasswordField
                        name="Password"
                            onChange={(e)=>{fillinfo(e)}}
                            hintText="At least 8 characters"
                            floatingLabelText="Enter your password"
                            errorText="Your password is too short"
                            className={styles.inputfield}
                            />
                    </FormControl>    
                    <Box className={styles.directiveBox}>
                        <Typography className={styles.transfer_links}> Forgot Password</Typography>
                        <Typography className={styles.transfer_links} onClick={()=> History.push('/signup')}> Sign In</Typography>
                    </Box>
                    <Button variant="contained" className={styles.login_button} onClick={() => loginuser()} >Login </Button>
                </Box>
                <Box className={styles.sociallogin}>
                
                      
                    <Typography className={styles.login_alternate_heading}>or login using </Typography>
                    <Facebook className={styles.icon} /> 
                    <GooglePlus className={styles.icon} />
                    <Linkedin className={styles.icon} />
                    
                </Box>

            </Box>    
        </Box>
        </> 
    )
}

export default Login

