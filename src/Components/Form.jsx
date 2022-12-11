import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Notification from './Notification';
import { useState } from 'react'
import axios from 'axios';
function containsNumber(str) {
  return /\d/.test(str);
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
function ValidateEmail (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
export default function Form() {

  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "info" })

  const [name, setName] = React.useState("")
  const [nameHelp, setNameHelp] = React.useState("")
  const [errorName, setErrorName] = React.useState(false)

  const [surname, setSurname] = React.useState("")
  const [surnameHelp, setSurnameHelp] = React.useState("")
  const [errorSurname, setErrorSurname] = React.useState(false)

  const [email, setEmail] = React.useState("")
  const [emailHelp, setEmailHelp] = React.useState("")
  const [errorEmail, setErrorEmail] = React.useState(false)
  

  const handleClick = () => {
    if (errorName == false && errorSurname == false && errorEmail == false && surname != "" && surname != " " && name != "" && name != " " && email != " " && email != "") {
      setNotify({
        isOpen: true,
        message: name + " " + surname + " you will be contacted soon" ,
        type: "success"


      })
      

    } else {
      setNotify({
        isOpen: true,
        message: "You must fill the fields correctly",
        type: "error"


      })
      if (email == "") {
        setErrorEmail(true)
        setEmailHelp("You must fill the email field")
      }
      if (surname == "") {
        setErrorSurname(true)
        setSurnameHelp("You must fill the surname field")
      }
      if (name == "") {
        setErrorName(true)
        setNameHelp("You must fill the name field")
      }
    }


  };
  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      {<h2 style={{ color: "#1976d2", fontFamily: "fantasy", marginTop: "3.5%", marginBottom: "1.5%" }}>Want to know more?</h2>}
      {<h4 style={{ color: "#1976d2", fontFamily: "fantasy", marginBottom: "1.5%" }}>Send us your questions and we will contact you</h4>}
      <TextField sx={{ input: {color: "#1976d2"  } }}  onChange={(e) => {

        setName(e.target.value)
        if (containsNumber(e.target.value) || containsSpecialChars(e.target.value)) {
          setErrorName(true)
          setNameHelp("Name field can only contain letters")
        } else {
          setErrorName(false)
          setNameHelp("")
        }
      }} id="filled-basic"  label="Name" variant="outlined" focused={true} error={errorName} helperText={nameHelp} />


      <TextField sx={{ input: {color: "#1976d2"  } }}  onChange={(e) => {
        setSurname(e.target.value)
        if (containsNumber(e.target.value) || containsSpecialChars(e.target.value)) {
          setErrorSurname(true)
          setSurnameHelp("Surname field can only contain letters")
        }
        else {
          setErrorSurname(false)
          setSurnameHelp("")
        }
      }}  id="filled-basic"  label="Surname" variant="outlined"  focused={true} error={errorSurname} helperText={surnameHelp} />
      <TextField sx={{ input: {color: "#1976d2"  } }}  onChange={(e) => {

        setEmail(e.target.value)
        if (ValidateEmail(e.target.value) == false && e.target.value != "") {
          setErrorEmail(true)
          setEmailHelp("Fill the email field correctly")
        } else {
          setErrorEmail(false)
          setEmailHelp("")
        }
      }} id="filled-basic"  label="E-mail" variant="outlined"  focused={true}  error={errorEmail} helperText={emailHelp} />

      <Button style={{ marginTop: "2%" }} onClick={() => handleClick()} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Notification notify={notify} setNotify={setNotify}></Notification>

    </Box>
  );
}