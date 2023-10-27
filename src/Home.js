import React from 'react';
import Header from './Header';
import CardsCarousel from './CardsCarousel';
import FooterLinks from './FooterLinks';
import Testing from './Testing';
import Slide from './Slide';
import { useEffect } from 'react';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
function Home(){

    return (
        <div style={{backgroundColor:'#EAECF0  '}}>
            <div style={{paddingBottom:'70px'}}>{<Header/>}</div>
            <div>{<Testing/>}</div>
            <div style={{marginTop:'10px',marginBottom:'10px'}}>{<CardsCarousel/>}</div>
            <div >{<MidSlide/>}</div>
            <div>{<MidSection/>}</div>
            <div ><Slide title="Discounts for You" timer={false}/></div>
            <div >{<Slide title="Suggesting Items" timer={false}/>}</div>
            <div >{<Slide title="Top Selection" timer={false}/>}</div>
            <div >{<Slide title="Recommeded Items" timer={false}/>}</div>
            <div >{<Slide title="Trending offers" timer={false}/>}</div>
            <div >{<Slide title="Season's top picks" timer={false}/>}</div>
            <div >{<Slide title="Top Deals on Accessories" timer={false}/>}</div>
            <div><FooterLinks/></div>
        </div>
    )
}
export default Home 