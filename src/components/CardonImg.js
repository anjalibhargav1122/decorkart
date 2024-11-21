import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase', fontSize: '1rem', fontFamily: '"Avenir Next Rounded", sans-serif' }}>
      We write really great emails.
      </Typography>
      <Typography variant="body2" className='pt-5 pb-5'>
      No Spam. Only updates about new launches and sales.<br/> Directly to your inbox.
       
      </Typography>
    </CardContent>

    <Grid container spacing={2}>
        <Grid item xs={6}>
   
        <TextField id="outlined-basic" label="Your e-mail" variant="outlined" required sx={{width:"100%"}} /> 
        </Grid>
        <Grid item xs={6}>
        <button className="relative  group w-full h-full bg-[#746b61] text-white font-semibold rounded-md overflow-hidden">
      SUBSCRIBE
      <span className="absolute inset-0 bg-[#6c635a] opacity-0 group-hover:opacity-50 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
    </button>
        </Grid>
       
      </Grid> 
  </React.Fragment>
);

export default function CardonImg() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className='p-10'>{card}</Card>
    </Box>
  );
}
