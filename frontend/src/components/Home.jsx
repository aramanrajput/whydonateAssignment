import React from 'react'
import {AppBar,Toolbar,Button,Typography} from "@mui/material"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>Home</Typography>
            <Button sx={{marginLeft:"auto"}} color="warning"><Link to ="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home
