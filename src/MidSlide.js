import React from 'react';
import {Grid,Box,Typography,Button,makeStyles,styled} from '@mui/material'
import Slide from './Slide';

export default function MidSlide(){
    return (
        <Grid style={{display:'flex'}}>
            <Grid style={{width:'77vw',marginRight:'10px'}}>
                {<Slide title="Deal of the Day" timer={true}/>}
            </Grid>
            <Grid style={{display:'flex'}}>
                <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" style={{width:'20vw',padding:'5px 15px 5px 5px',textAlign:'center',backgroundColor:'white',height:'95%',marginTop:'10px'}} alt="ad"/>
            </Grid>
        </Grid>
        
    )
}
// banners carousel cards button grid box most timer typography most useful