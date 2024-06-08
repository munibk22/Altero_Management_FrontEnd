import React from 'react'
import './header.css'
import Search from '../search/Search.js';
import Nav from './Nav'
import { HeadNav } from './HeadNav';
import { HeadSlogan } from './HeadSlogan';
import Icon from '../../assests/logo3.png';
// import CarouselApp from './Carousel'

export default function Head() {
    return (
        <section className="head ">

        {/* Row-1 */}
            {/* Row-1 Col-1/2 */}
            {/* <div className="headrow1 hide"></div> */}
            <span className='headrow1'>
                <HeadSlogan />                
            </span>          
            {/* Row-1 Col-2 */} 
            <span className="hide headrow1">          
                <Search />
            </span>              
           {/* Row-1 Col-2 */}
                {/* <span className="header-login headrow1">
                    <HeadNav />
                </span> */}
        <div className="logo-container headrow1">
            <img src={Icon} alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter" />
        </div> 
            <div className="headrow1 hide"></div>
{/* Row-1 End*/}

{/* Row-2 Start*/}
        {/* Row-2 Col-1/2 */}  
            <div className="headrow2 hide"></div>
            
{/* Row-2 Col-3 */}        
    <div className="flexwrap alignitems headrow2 row-2-attributes">
    {/* <div className="logo-container headrow2">
            <img src={Icon} alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter" />
        </div> */}

        <div className="font500 textalign text-shadow">
            <h1 style={{ color: "white" }}>ALTERO MANAGEMENT CORP</h1>
            <ul style={{
                color: "rgb(38 204 23)"
            }}>Your Trusted Invesment Partner</ul>
            <br />
            <div className="">
                <h3 style={{ color: "white;",fontSize:"1.8rem;",fontFamily:"sans-serif;" }}>   St. Louis, MO 63141</h3>

                <a href="tel:6368754054" className="tel" >Call us at 636-875-4055 </a>
            </div>
        </div>

    </div>

          
            <div className="header-login headrow3"></div>
            {/* <div className="headrow3 width100" >
                <Nav />
            </div>              */}
            <div className="header-login headrow3"></div>
            {/* <div className="header-login headrow3"></div> */}
            <div className="header-login headrow3"><HeadNav /></div>                      
            
            <div className="headrow3 hide"></div>
        </section>
    )
}
