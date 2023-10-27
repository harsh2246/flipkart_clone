import React from "react";
import { Grid,Typography,Button,ButtonGroup } from "@mui/material";
import { addElipsis } from "./utils/common-utils";

export default function Cartitems({item}) {
    
    return (
        <>
                    <Grid style={{display:'flex',borderTop:'0.5px solid #8f8f8f'}}>
                            <Grid style={{margin:'20px',display:'flex',flexDirection:'column'}}>
                            <img  src={item.url} height={80} width={70} style={{marginLeft:35}}/>
                                <ButtonGroup variant="outlined"  aria-label="outlined button group" style={{marginTop:'40px'}}>
                                <Button >+</Button>
                                <Button >1</Button>
                                <Button>-</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid style={{margin:'20px',alignItems:"flex-start",display:'flex',flexDirection:'column'}}>
                                <div><Typography>{addElipsis(item.title.longTitle)}</Typography></div>
                                <div><Typography style={{color:'#878787',marginTop:'10px',marginBottom:'20px'}}>Seller:RetailNet
                                <span style={{marginLeft:'10px'}}><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="fassured" height="20px" /></span>
                                </Typography></div>
                                <div><span style={{fontWeight:600,fontSize:18}}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{color:'#388E3C'}}>{item.price.discount} off</span>&nbsp;&nbsp;&nbsp;</div>
                                <Button  style={{marginTop:'10px',color:'black',fontSize:16,fontWeight:600}}>Remove</Button>
                           </Grid>

                    </Grid>
        </>
    )
}