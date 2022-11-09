import React, { useState } from 'react'


import { Grid, TextField,Input, Button, Card, CardContent, Typography,Stack,Snackbar,Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

const Login = () => {
let {signin}= useContext(AuthContext)
let navigate = useNavigate()
let [data,setdata]=useState({
    username:"",
    email:"",
    password:""
})

let [errormessage,seterrormessage]=useState({ username:"",
email:"",
password:""})

let handleChange = (e)=>{
let {name,value}= e.target
console.log(name,value)
setdata({...data,[name]:value})
}

const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};



let handleSubmit=(e)=>{
    e.preventDefault()
   
    let obj = validate(data)

    seterrormessage(obj)
    
    if(Object.keys(obj).length==0){
        fetch("http://localhost:8080/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((res)=>{
signin(res.data?.token)
            navigate("/search")
        })
    }else{
        handleClick()
    }
}

let validate=(formdata)=>{
    let error = {}
    const regex = new RegExp("^[a-zA-Z0-9]+$");

if(!formdata.username){
    error.username = "Username is required!"
}
if(!formdata.email){
    error.email = "email is required!"
}
if(!formdata.password){
    error.password = "password is required!"
}else if(formdata.password.length<8 && formdata.password>16 && !regex.test(formdata.password) ){

    console.log(formdata.password.length<8,formdata.password.length>16,!regex.test(formdata.password))

    error.password = "password should have 8-16 alphanumeric characters"
}

return error
}

  return (
    <div>
 <Typography gutterBottom variant="h3" align="center">
        Login
       </Typography>
     
     <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
         
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12}  item>
                  <TextField placeholder="Enter first name" onChange={handleChange} label=" Username" name="username" variant="outlined" fullWidth  />
                  <p style={{color:"red"}}>{errormessage.username}</p>
                </Grid>
               
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" onChange={handleChange} label="email" name="email" variant="outlined" fullWidth  />
                  <p style={{color:"red"}}>{errormessage.email}</p>
                </Grid>
             
                <Grid item xs={12}>
                  <TextField label="password"  placeholder="Type your password here" onChange={handleChange} name="password" variant="outlined" fullWidth  />
                  <p style={{color:"red"}}>{errormessage.password}</p>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Login Failed
        </Alert>
      </Snackbar>
          </CardContent>
        </Card>
      </Grid>
    
    </div>
  )
}

export default Login
