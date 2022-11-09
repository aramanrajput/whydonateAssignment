import { Input,Button,Typography } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <div>
         <Typography gutterBottom variant="h3" align="center">
       Search Tv show
       </Typography>
     <Input type="text"></Input> 
     <Button>Search</Button>
    </div>
  )
}

export default Search
