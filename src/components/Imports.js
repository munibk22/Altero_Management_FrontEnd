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
import Header from './header/Header';

import Main1 from './main/Main1.js';
import Main2 from './main/Main2.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Footer from './footer/Footer'
// import PricePanel from './pricepanel/PricePanel'
// import Team from './body/Team'
import BodyHeader from './body/BodyHeader';


export const art1 =  <article className='card-article' data-aos="fade-right">  
<h3>Skip the dead end min wage jobs</h3>
<ul className='card-article-list'>
 <li>Did you know online modeling can earn between 5k-10k a month?!</li>
 <li>From buying expensive computer equipment to setting up social media accounts, we got you covered! 💯</li>
 <li>Offering services to steup and promote OnlyFans, Social Media, and Webcam accounts</li>
 <li><strong>Special offer:</strong> <em>No cost to get started today for new streamers & models</em></li>
 <li>Ready to get start? Contact us today!<a href="#formId"> ⬇️</a></li>
 
</ul>
</article>;
export const art2 =  <article className='card-article'>
Low Pricing, great way to get started without all the expenses{"->"}  
</article>;

export const pricing1 = <Pricing />;
export const catPostImg = <img alt='cat poster' src='https://i.imgur.com/KUbpeiF.png' className='cat-poster'/> ;
export const priceGirl = <img alt='price girl poster' src='https://i.imgur.com/m01XvNK.jpg' className='cat-poster  padding-1 border-radius-1 drop-shadow-filter'/>;
export const catgirl = <img src='https://i.imgur.com/qWNaxtj.png' className='cat-girl-hero' alt='cat girl' />;
export const catPromo = <img src='https://imgur.com/FNKFJHg.png' className='cat-poster drop-shadow-filter' alt='cat girl' />; 



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
    Header,
    Hero,
    Main1, Main2,
    Pricing, 
    AOS, 
    // Footer,PricePanel,Team ,ToastContainer, toast,
};