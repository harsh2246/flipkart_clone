
import { Box, Typography } from "@mui/material";
import { bannerData,navData } from "./constants/data";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
//sabse pehle style create karne ke liye make style import karo use style 
//se style do then use style ka constructor se use project mein create karo
// then uske badd use classes.customTypohgraphy which is a class se use karo in className{}
const CustomTypography = styled(Typography)({
  color: 'black',
  fontWeight: 'bold',
  "&:hover": {
    color: "blue", // Text color on hover
  },
  // Add more custom styles here as needed
});
const CustomBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: "blue", // Text color on hover
  },
}));

// is tarah har component par lag saktaa hai image or any div or grid
  export default function Testing(){
    
    return (
     <> <Grid style={{display:'flex',flexdirection:'row',marginTop:'10px',justifyContent:'space-around'}}>
     {navData.map((data) => (
    <React.Fragment key={data.text}>
      <Link  to={`/${data.text}`} style={{textDecoration:'none'}}>
        <CustomBox sx={{boxShadow: 4,padding:'25px', borderRadius: 2,bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      }}>
        <img src={data.url} alt="nav" style={{ width: '64px' }} />
        <CustomTypography>{data.text}</CustomTypography>
        </CustomBox>
      </Link>
      
    </React.Fragment>
  ))}
   
  </Grid>
  </>
  
    )
  }