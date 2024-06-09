import React,{useEffect,useContext, useRef} from 'react';
import './default.css';


import {Head,Nav,Banner,BodyHeader,Hero, Card, Footer, Form, Header,Main1, Main2,
  Pricing,  AOS, ToastContainer, toast,
  art1,art2,pricing1,catPostImg,priceGirl,catgirl,catPromo} from './components/Imports.js';

function App() {
  const headerRef = useRef(null);

  useEffect(() =>{
    const header = headerRef.current;

    // window.addEventListener('scroll',()=> window.scrollY >= 10 ? header.classList.add('active')
    // : header.classList.remove('active'));

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

  },[]);

  
  return (
    <div className="app">     

    <Head />
    <Nav />
    <Banner />
    <BodyHeader />


    
{/*Hero Section 1*/}
<div className='hero-section text-shadow'>
      <Hero text={"Welcome Streamers and OnlyFan Models"}
      //  img={catgirl}
      />
    </div>

{/* Info Section */}
    <section className='info-section ' data-aos="zoom-in-right"><h2> Ready to get started in the lucrative industry of online streaming? 
      We got you! <a href='#formId' className='arrow' >↓</a></h2></section>

{/*Card Section */}
<section className='card-section margin-top-1'  >
  
  <Card article={art1} />
  <Card img={catPostImg} aosStyle='fade-left'/>
</section>


{/*Mid-Hero Section 2*/}
<div className='hero-section mid-hero margin-top-3 text-shadow'>
     
       <Hero text = {` 
      Why work with us? Click arrows to learn more
    
    ` }
       className={"clear-pricing "} />
       
    </div>

{/* Main Body */}


{/* Main Body */}
    <main className="body-section">

    {/* <article className="sub-header margin-top-2 " data-aos="zoom-in-right">
      <h1>Why work with us? <span className='learn-more '>Click to learn more
       <a href='#infoSection' className='arrow'> ↓</a> &nbsp;</span> 
    </h1>   <hr />
    </article> */}
    <section className='card-pricing margin-top-1'>
      <section className="main1" id='infoSection' data-aos="fade-right">
        <Main1 />
      </section>
      <section className="main2" data-aos="fade-left">
        <Main2 />
      </section>
    </section>
    </main>
{/*Mid-Hero Section 3 Pricing*/}
<div className='hero-section mid-hero margin-top-3 text-shadow'>
     
       <Hero text={"💎💎 Clear Pricing 💎💎" } className={"clear-pricing hero-section"}/>
       
    </div>

{/* Main Body 3rd*/}
<main className="body-section">
      
    
{/* Pricing Section */}
    <section className='card-pricing margin-top-1' >
      <section  className='card-col-1'> 
      <Card article={art2}   aosStyle='fade-right'/>
      <Card img={catPromo}  aosStyle='fade-right'/>
         </section>
      <Card article={pricing1} aosStyle='fade-left'/>
    </section>


    </main>
{/*Mid-Hero Section-4 Form Header */}
<div className='hero-section mid-hero margin-top-3'>
     
       <Hero text = {<span className="text-shadow" style={{fontSize:"1.5rem"}}><span className="hide">⬇️</span>
       Ready to get started? Enter your deets blelow ⬇️</span> }
       className={"text-shadow"} />
       
    </div>

{/* Main Body-5 Form Section*/}
<main className="body-section ">

 {/* Section for Form submission */}
    <section className="form-section " id='formId'>
        {/* <section data-aos='fade-down'>Ready to get started? Enter your deets below..</section> */}
        <Form aosStlye="zoom-in"/>      
    </section>
    </main>

{/* Section for Footer/Contact us */}
      <section className='footer' >
        <hr />
        <Footer aosStlye=""/>
      </section>
    
    </div>
  );
}

export default App;
