import {React,useState} from 'react'
import {Box,FormControl,InputBase,makeStyles, Typography,Input,Button,Checkbox} from '@material-ui/core'
import PasswordField from 'material-ui-password-field'
import History from '../History';
import {addUserData} from '../service/api'

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
            fontSize:"12px"
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
            alignItems:"center"
            
        }
    }
))


const Signup=() =>{
const styles=styleClass()
const [checked,changeChecked] =useState(false)
const initialuserdata={fullname:"",username:"",Password:""}
const [userdata,updatedata] =useState(initialuserdata) 

const changeData= (e)=> {
    updatedata({...userdata,[e.target.name]:e.target.value});
    console.log(userdata);
}

const pushData= async () => {
    if(!checked){
        alert("Please agree to the terms before procedding")
    }
    else{
        if(userdata["fullname"]==="" || userdata["username"]==="" || userdata["Password"]===""){
            alert("Please Fill all the fields to proceed further");
        }
        else{
            
        History.push('/')
        await addUserData(userdata)}
    }
}


return (
    <>
    <Box className={styles.container} >
        <Box border={2} borderColor="primary.main"  borderRadius={16} className={styles.loginbox}>
            <Typography className={styles.heading}>REGISTER</Typography>
            <Box className={styles.userdata}>
                <FormControl className={styles.form}>
                    Full Name
                    <Input name="fullname" 
                           onChange={(e)=> changeData(e)}
                           className={styles.inputfield}
                           inputProps={{ 'aria-label': 'description' }} />
                </FormControl>
                <FormControl className={styles.form}>
                    Username
                    <Input name="username"
                           onChange={(e)=> changeData(e)}
                           className={styles.inputfield} 
                           inputProps={{ 'aria-label': 'description' }} />
                </FormControl>
                <FormControl className={styles.form}>
                    Password
                    <PasswordField name="Password"
                        onChange={(e)=> changeData(e)}
                        hintText="At least 8 characters"
                        floatingLabelText="Enter your password"
                        errorText="Your password is too short"
                        className={styles.inputfield}
                        />
                </FormControl> 
                <Box className={styles.check}>
                     <Checkbox
                        onChange={()=> changeChecked(!checked)}
                        checked={checked}
                        name="checkedB"
                        color="primary"
                    />
                    <Typography className={styles.terms}>I agree to terms and conditions of Blogspot</Typography>
                </Box>    
                <Button variant="contained" className={styles.signup_button} onClick={()=>pushData()}>SignUp </Button>
            </Box>
            
        </Box>    
    </Box>
    </> 
)
}

export default Signup
