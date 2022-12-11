import React, { useState, useEffect } from 'react';
import axios from 'axios'
import{useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import OdontologoPng from "../Images/doctor.jpg"
import CardMui from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detailData, setDetailData] = useState(null);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const getData = async () => {
    const Data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setDetailData(res)
  console.log(res)
      })
      .catch(err => console.log(err))
  
  }
  
  useEffect(() => {
    getData()
  }, [])
    

  return (



<Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
 marginTop="3%"
  style={{ minHeight: '100vh' }}>
    {
      detailData ? (
        <CardMui
        sx={{ minWidth: 500}}
       
  
  
      >
         <CardMedia
          component="img"
          height="500"
          image={OdontologoPng}
        />
        <CardContent>
        <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1 }}variant="h6" color="#1976d2">
            {detailData.data.name}
          </Typography>
        
          <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1}}  color="text.secondary">
            {detailData.data.username}
          </Typography>
          <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1}} color="text.secondary">
            {detailData.data.email}
          </Typography>
          <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1}} color="text.secondary">
            {detailData.data.phone}
          </Typography>
          <Typography sx={{ mb: 1.5 , marginLeft:1 , marginTop:1}} color="text.secondary">
            {detailData.data.website}
          </Typography>
        </CardContent>
       
      </CardMui>
      

      ) : (
        <CircularProgress  />
      )





    }

    </Grid> 



  )

}


export default Detail