import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ContextGlobal } from './utils/global.context';
import React, { useContext, useState } from 'react';

const Footer = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  return (
    <Box sx={{ color: 'white', marginTop: "5%" }} style={state.bgFlag == "Dark" ? { background: '#2E3B55' } : { background: '#1976d2' }}>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>

          <Typography>
            Digital House
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    FAQ
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Ciro Rojas
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Privacy
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Messi 10
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Argentina 2022
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    10/10
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Information
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Only on DH
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Terms of Use
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white' }} component="a" href="#">
                    Contact Us
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>



          <Typography variant="caption">Front End Final Project</Typography>

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer