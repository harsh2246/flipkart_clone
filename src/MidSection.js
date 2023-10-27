import { imageURL } from "./constants/data";
import React from 'react'
import {Grid,Box} from '@mui/material'
export default function MidSection(){
    return (
        // for responsivness we use grid instead of box 
        <>
        <Box style={{display:'flex',marginLeft:'20px'}} xs={12} sm={12} md={12} lg={12}>
            {
                imageURL.map((image)=>(
                    <Grid lg={3} md={4} xs={12} sm={12}>
                    <img src={image} alt={image} style={{width:'100%'}}/> 
                    {/* yahan 100 vw nahiin le sake  toh har image viewport ka size legi % matlab wrt to
                    parent container lega full pr nahi denge style toh overflow hoga*/}
                    </Grid>
                ))
            }
        </Box>
        <img src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" alt="covid" style={{width:'100%',marginTop:'10px'}}/>
        </>
    )
}