import React,{useEffect,useContext, useRef, useState} from 'react';
import './default.css';


import {Head,Nav,Banner,BodyHeader,Hero, Card, Footer, Form, MobileHeader,Main1, Main2,
  Pricing,  AOS, ToastContainer, toast,
  art1,art2,pricing1,imgOne,priceGirl,catgirl,img2} from './components/Imports.js';

function App() {
  
  const stickyElementRef = useRef(null); 
  const [isStickyActive, setIsStickyActive] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const checkScrollTop = () => {
    const stickyElement = stickyElementRef.current;
    // Change the number 150 to the point you want the element to stick at
    if (stickyElement) {
      const stickyElementOffsetTop = stickyElement.offsetTop;
    setSticky(() => window.scrollY > 650);

    }

  };
  
  const handleScroll = () => {
    const stickyElement = stickyElementRef.current;
    if (stickyElement) {
      const stickyElementOffsetTop = stickyElement.offsetTop;
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition >= 50) {          
        setIsStickyActive(()=>true);
        // header.classList.toggle('show');
        // header.classList.toggle('show','active')
      //   window.scrollY >= stickyElementOffsetTop ? header.classList.add('show','active')
      // : header.classList.remove('show','active');

      } else {
        setIsStickyActive(false);
        // header.classList.remove('show','active');
      }
    }
  };

  useEffect(() =>{
    // const header = stickyElementRef.current;

    // window.addEventListener('scroll',()=> window.scrollY >= 40 ? header.classList.add('active')
    // : header.classList.remove('active'));   

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };

  },[]);

  
  return (
    <div className="app">     

    <Head />   
    <Nav  />
    <Banner />

    <section ref ={stickyElementRef} 
    className={isSticky ? 'drop-shadow-filter header-section sticky' : 'hide'}>  
    <MobileHeader  />
    </section>
  
    <BodyHeader />


    
{/*Hero Section 1*/}
<div className='hero-section text-shadow'>
      <Hero text={"Welcome to Altero Management"}
      //  img={catgirl}
      />
    </div>

{/* Info Section */}
    <section className='info-section ' data-aos="zoom-in-right"
    ><h3>Your Gateway to Premium Real Estate and Financial Investments</h3></section>

{/*Card Section */}
<section className='card-section margin-top-1'  >
  
  <Card article={art1} />
  <Card img={imgOne} aosStyle='fade-left'/>
</section>


{/*Mid-Hero Section 2*/}
<div className='hero-section mid-hero margin-top-3 text-shadow'>
     
       <Hero text = {` 
      🏠 Property Highlights 🏠
    
    ` }
       className={"clear-pricing "} />
       
    </div>

{/* Main Body */}


{/* Main Body */}
    <main className="body-section">
  
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
       <Hero text={"💎💎 Investment Opportunities Await 💎💎" } className={"clear-pricing hero-section"}/>
</div>

{/* Main Body 3rd*/}
<main className="body-section">
      
    
{/* Pricing Section */}
    <section className='card-pricing margin-top-1' >
      <section  className='card-col-1'> 
      <Card article={art2}   aosStyle='fade-right'/>
      <Card img={img2}  aosStyle='fade-right'/>
         </section>
      <Card article={pricing1} aosStyle='fade-left'/>
    </section>


    </main>
{/*Mid-Hero Section-4 Form Header */}
<div className='hero-section mid-hero margin-top-3'>
     
       <Hero text = {<span className="text-shadow" style={{fontSize:"1.5rem"}}><span className="hide">⬇️</span>
       Connect with Altero Management ⬇️</span> }
       className={"text-shadow"} />
       
    </div>

{/* Main Body-5 Form Section*/}
<main className="body-section ">

 {/* Section for Form submission */}
    <section className="form-section " id='formId'>
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
