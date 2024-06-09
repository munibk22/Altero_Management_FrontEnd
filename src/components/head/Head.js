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
        <section className="head" id="home">
{/* Row-Top-Spacer */}
<section className="mobilehide headrow0"> </section> 
        {/* Row-1 */}
            {/* Row-1 Col-1/2 */}
            {/* <div className="headrow1 mobilehide"></div> */}
            <span className='headrow1 flexwrap justifybetween'>
                <HeadSlogan /> 
                <div className="logo-container headrow1 desktophide">
            <img src={Icon} alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter" />
        </div>                
            </span>          
            {/* Row-1 Col-2 */} 
            <span className="mobilehide headrow1">          
                <Search />
            </span>              
           {/* Row-1 Col-2 */}
                {/* <span className="header-login headrow1">
                    <HeadNav />
                </span> */}
        <div className="logo-container headrow1 desktophide">
            {/* <img src={Icon} alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter" /> */}
        </div> 
            <div className="headrow1 mobilehide"></div>
{/* Row-1 End*/}

{/* Row-2 Start*/}
        {/* Row-2 Col-1/2 */}  
            <div className="headrow2 mobilehide"></div>
            
{/* Row-2 Col-3 */}        
    <div className="flex alignitems headrow2 headrow-2-attributes">
    <div className="logo-container2 headerimg headrow2 mobilehide">
            <img src={Icon} alt='company logo' style={{ width: "", float: '' }} className="logo drop-shadow-filter" />
    </div>

        <div className="font500 textalign text-shadow">
            <h1 className="main-header">
                ALTERO MANAGEMENT CORP</h1>
            <p style={{
                color: "rgb(151, 212, 81)"
            }}>Your Trusted Invesment Partner 💵</p>
            <br />
            <div className="">
                <h5>St. Louis, MO 63141</h5>
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
            <div className="header-login headrow3 sub-banner"><HeadNav /></div>                      
            
            <div className="headrow3 hide"></div>
        </section>
    )
}
