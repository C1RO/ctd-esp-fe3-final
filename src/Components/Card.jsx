import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import CardMui from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import OdontologoPng from "../Images/doctor.jpg"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import Tooltip from '@mui/material/Tooltip';
import Notification from './Notification';
import {useNavigate} from "react-router-dom";

const Card = ({ props }) => {
  var a = JSON.parse(window.localStorage.getItem('Favs')) || []
  const [elevation, setElevation] = useState(1)
  const [likeState, setLikeState] = useState(a.findIndex(i => i.id === props.id) > -1);
  const[notify , setNotify] = useState({isOpen:false, message:"" , type:"info"})
  const navigate = useNavigate();

  const addFav = () => {

    // Aqui iria la logica para agregar la Card en el localStorage
    var a = [];
    a = JSON.parse(window.localStorage.getItem('Favs')) || [];
    if (a.findIndex(i => i.id === props.id) > -1) {
      const index = a.findIndex(i => i.id === props.id);
      a.splice(index, 1);
      
      window.localStorage.setItem('Favs', JSON.stringify(a));
     
    }
    else {
      a.push(props);
      window.localStorage.setItem('Favs', JSON.stringify(a));
      setNotify({
        isOpen: true,
        message: "Added to favorites successfully!",
        type:"success",
  
  
      })
    }
    setLikeState(!likeState);

  }
  const clickDetails = () =>{
   console.log("click here")
   navigate("/Detail"+"/" + props.id)


  }
    
  return (
    <CardMui
      sx={{ minWidth: 275 }}
      elevation={elevation}
      onMouseEnter={() => setElevation(8)}
      onMouseLeave={() => setElevation(1)}


    >
       <CardMedia
        component="img"
        height="194"
        image={OdontologoPng}
      />
      <CardContent>
      <Tooltip title="Details" arrow>
      <Button onClick={clickDetails}>{props.name}</Button>
    </Tooltip>
      
        <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1}}  color="text.secondary">
          {props.username}
        </Typography>
      
      </CardContent>
      <CardActions>
        <IconButton sx={{marginLeft:1}} aria-label="add to favorites" onClick={addFav} >
          <FavoriteIcon color={likeState == true ? "info" : "inherit"} />
        </IconButton>
      </CardActions>
      <Notification notify={notify} setNotify={setNotify}></Notification>

    </CardMui>
    
  );
};

export default Card;
