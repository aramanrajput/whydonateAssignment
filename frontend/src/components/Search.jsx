import { Input,Snackbar,Alert} from '@mui/material'

import { styled } from '@mui/material/styles';
import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthContext } from '../context/Authcontext';
const Search = () => {

let [searchValue,setsearchValue]=useState("")
const [open, setOpen] = React.useState(false);




const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

let [data,setData]=useState([])
let handleChange = (e)=>{
    setsearchValue(e.target.value)
}


let {token}=useContext(AuthContext)
let handleClick=()=>{



  fetch(`https://whydonate-assignment.vercel.app/api/search?query=${searchValue}`,{headers:{Authorization:`Bearer ${token}`}}).then((res)=>res.json()).then((res)=>{
    if(!res.error){
      setData(res.data)
    }else{
      console.log(res.message)
      setOpen(true)
    }
   
    
  })
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
         <Typography gutterBottom sx ={{fontFamily:"monospace"}}variant="h3" align="center">
       Search Tv show
       </Typography>
     <Input value={searchValue} onChange={handleChange} sx={{width:"400px" , marginRight:"20px"}}type="text"></Input> 
     <Button onClick={handleClick} variant='contained'>Search</Button>


     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  sx={{marginTop:"100px"}}>

        {data.map(({show})=> <Grid item   xs={3}>
     
   
   
         <Card sx={{ minWidth: 200,height:"100%" }}>
      <CardContent sx={{}}>
        {/* <img style={{width:"100%"}} src={show.image?.original}></img> */}
        <CardMedia
        component="img"
        height="300"
        image={show.image?.medium}
       
      />
        {/* <Typography >
          "summary :"{show.summary}
        </Typography> */}
       
        <Typography   sx ={{fontFamily:"monospace"}}variant="h6" component="div">
        name : {show.name}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         type :{show.type}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         genres :{show.genres.join(", ")}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         type :{show.type}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         status :{show.status}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         schedule :{show.schedule?.time}
        </Typography>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">
         language :{show.language}
        </Typography>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography sx ={{fontFamily:"monospace"}}variant="h6">summary:{show.summary}</Typography>
        </CardContent>
      </Collapse>
      </CardContent>
    
    </Card></Grid>)}
     
      </Grid>
    </Box>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please login first
        </Alert>
      </Snackbar>
    </div>

  )
}

export default Search
