import React, {useEffect } from 'react';
// import './css/default.css'
// import Body from './body/Body'
// import './body/body.css'
import './body/body.css';
import Head from './head/Head.js';
import Nav from './head/Nav.js';
import Banner from './head/Banner.js';
import Hero from './hero/Hero.js';
import Pricing from './pricing/Pricing.js';
import Card from './card/Card.js';
import Footer from './footer/Footer.js';
import Form from './form/Form.js';
import MobileHeader from './nav/MobileHeader.js';

import Main1 from './main/Main1.js';
import Main2 from './main/Main2.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Footer from './footer/Footer'
// import PricePanel from './pricepanel/PricePanel'
// import Team from './body/Team'
import BodyHeader from './body/BodyHeader';


export const art1 =  <article className='card-article' data-aos="fade-right">  
<h4>At Altero Management, we offer a wide range of investment options tailored to meet your financial goals. 
  </h4>
<ul className='card-article-list'>
 <li> We are dedicated to helping our clients achieve their financial goals through smart and strategic decisions.</li>
 <li>From buying expensive computer equipment to setting up social media accounts, we got you covered! 💯</li>
 <li>Offering services to steup and promote OnlyFans, Social Media, and Webcam accounts</li>
 <li><strong>Special offer:</strong> <em>No cost to get started today for new streamers & models</em></li>
 <li>Ready to get start? Contact us today!<a href="#formId"> ⬇️</a></li>
 
</ul>
</article>;
export const art2 =  <h4 className='card-article '>
Altero Management is a leading provider of high-quality real estate properties and
 financial investment services. We are dedicated to helping our clients achieve their
  financial goals through smart and strategic decisions. <span className='arrow text-wrap'>{"->"}</span>  
</h4>;

export const pricing1 = <Pricing />;
export const imgOne = <img alt='building poster' src='https://i.imgur.com/5U4NvM6.jpeg' className='imgOne box-shadow2'/> ;
export const img2 = <img alt='building poster' src='https://i.imgur.com/u525EqD.png' className='img2 box-shadow'/> ;





 function Imports(){

    useEffect(() =>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

  },[]);
    return <></>
    
 }


export  {
    Imports,Head,Nav,Banner,BodyHeader,
    Card, 
    Footer,
    Form,
    MobileHeader,
    Hero,
    Main1, Main2,
    Pricing, 
    AOS, 
    // Footer,PricePanel,Team ,ToastContainer, toast,
};