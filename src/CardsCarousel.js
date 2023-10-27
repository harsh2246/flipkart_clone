import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from './constants/data';
import React from 'react';
const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
     slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
     slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },//screen size range will call it either mobile or tablet or desktop
    items: 1,//no. of items shown in a page
     slidesToSlide: 1// when u click on next button It determines how many items should move when the carousel is navigated
  }
};
//auto play speed means 4000 means 4 s mein ek slide move karega

export default function CardsCarousel() {
  
  return (
   <div>
    <Carousel responsive={responsive}  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px" containerClass="carousel-container" swipeable={false}
  draggable={false} infinite={true} autoPlay={true}  autoPlaySpeed={4000}  keyBoardControl={true}>
   
    {bannerData.map((item)=>(
       
        <img src={item.url} style={{width:'100vw',height:'230px'}} key={item.id} />//give key inside images always
        
    ))}
    
          
          
      </Carousel>
   </div>
  );
}