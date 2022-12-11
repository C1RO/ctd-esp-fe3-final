import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';


export default function Notification(props) {
  const{notify, setNotify} = props;

const handleClose = (event, reason) =>{
  setNotify({
    ...notify,
    isOpen: false
  })
}

  return (
   <Snackbar open = {notify.isOpen}
   autoHideDuration = {6000}
   anchorOrigin={{vertical:"top" , horizontal:"right"}}
   
   onClose ={handleClose}>
<Alert
   onClose ={handleClose}

 severity ={notify.type}
>
  {notify.message}
  
</Alert>


   </Snackbar>
  );
}