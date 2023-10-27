import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {Grid,Box,Typography,Button,makeStyles,styled} from '@mui/material'
import { products } from './constants/data';
import Countdown from 'react-countdown';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
const styles = `
/* Add the zoom effect on hover */
.image-container {
    overflow: hidden; 
  transition: transform 0.7s ease; /* Add a smooth transition on hover */
}

.image-container:hover img {
  transform: scale(1.05); /* Increase the scale to zoom in (you can adjust this value) */
}
`;

//box ka use wrap karne ke liye hota hai usme css likhte hai it is used as div grid can also be used
const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
       slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
       slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },//screen size range will call it either mobile or tablet or desktop
      items: 1,//no. of items shown in a page
       slidesToSlide: 1// when u click on next button It determines how many items should move when the carousel is navigated
    }
  };
    const Component=styled(Box)({
        marginTop:'100px'
   })
export default function Slide({timer,title}) {
    const renderer=({hours,minutes,seconds})=>{
        return  <Box>{hours} : {minutes} : {seconds} Left</Box>;
    }
    return(
        <Box style={{marginTop:'10px',backgroundColor:'white',boxShadow:3}}>
            <Grid style={{display:'flex',color:'grey',alignItems:'center'}}>
                <Typography style={{fontWeight:'600',padding:'15px 20px',fontSize:'20px',color:'black'}} >{title}</Typography>
                {/* <Box style={{display:'flex'}}> */}
                   
                    {(timer)?
                        <>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" width="24px"alt="Timer"  style={{marginRight:'10px'}}/>
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </>:<></>
                    }
                    
                    <Button variant='contained' color='primary'style={{margin:'10px 10px auto auto'}} >View All</Button>
                    
                    {/*  isme hum milliseconds dalte hai ab se 14 hours means 5.04e+7 */}
                {/* </Box> */}
                
            </Grid>
            <Divider   light={true}   style={{ backgroundColor: 'grey', opacity: 0.2 }}/>
            <Grid style={{marginTop:'25px',paddingBottom:'25px'}}>
            
                {/* when you give display flex automatically it takes flex direction as row not column so 
                without giving flex direction it worked */}
                <style>{styles}</style>
            <Carousel responsive={responsive}  dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false}
        draggable={false} infinite={true} autoPlay={true}  autoPlaySpeed={4000}  keyBoardControl={true}
        centerMode={true}>
            {
                products.map(product =>(
                    <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                        <>
                        <div className="image-container">
                                <img
                                    src={product.detailUrl}
                                    style={{ width: 'auto', height: '120px',margin:'5px 70px 30px 70px' }}
                                />
                            </div>
                            <Typography style={{color:'black',fontWeight:'600',padding:'3px'}}>{product.title.shortTitle}</Typography>
                            <Typography style={{color:'green',padding:'10px'}}>{product.discount}</Typography>
                            <Typography style={{color:'grey'}}>{product.tagline}</Typography>
                        </>
                    </Link>
                ))
            }
        </Carousel>
            </Grid>
        </Box>
    )
}