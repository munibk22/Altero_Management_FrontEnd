import React from 'react'
import './header.css'
import Search from '../search/Search.js';
import Nav from './Nav.js'
import { LoginModule } from '../utils/LoginModule.js';
import { HeadSlogan } from './HeadSlogan.js';
// import Icon from '../../assests/fav.png';
// import CarouselApp from './Carousel'

export default function HeadModule() {
    return (
        <section className="head relative" id="home">
{/* Row-Top-Spacer */}
<section className="mobilehide headrow0"> </section> 
        {/* Row-1 */}
            {/* Row-1 Col-1/2 */}
            {/* <div className="headrow1 mobilehide"></div> */}
            <section className='headrow1 flexwrap justifybetween'>
                <HeadSlogan /> 
            <div className="logo-container headrow1 desktophide">
            <img src='https://i.imgur.com/VPecYgG.png' alt='company logo' className="logo drop-shadow-filter" />
        </div>                
            </section>          
            {/* Row-1 Col-2 */} 
            <section className="mobilehide headrow1 search-container">          
                <Search />
            </section>              
           {/* Row-1 Col-2 */}
           <section className="header-login headrow1 sub-banner " style={{borderRadius:"2rem"}}>
                <LoginModule />
            </section>  
       {/* <div className="logo-container2 headerimg headrow1 mobilehide">
            <img src='https://i.imgur.com/VPecYgG.png' alt='company logo'  className="logo drop-shadow-filter" />
        </div>  */}
            {/* <div className="headrow1 mobilehide"></div> */}
{/* Row-1 End*/}

{/* Row-2 Start*/}
        {/* Row-2 Col-1/2 */}  
            <div className="headrow2 mobilehide"></div>
            
{/* Row-2 Col-3 */}        
    <div className="flex alignitems headrow2 headrow-2-attributes">
    <div className="logo-container2 headerimg headrow2 mobilehide">
            <img src='https://i.imgur.com/VPecYgG.png'
             alt='company logo' style={{ width: "", float: '' }} 
             className="logo drop-shadow-filter" />
    </div>

        <div className="font500 textalign text-shadow" data-aos='zoom-in'>
            <h1 className="main-header">
                ALTERO MANAGEMENT CORP</h1>
            <p style={{
                color: "rgb(151, 212, 81)"
            }}>Your Trusted Invesment Partner 💵</p>
            <br />
            <div className="">
                <h5>TOLEDO, OH  43623</h5>
                <a href="tel:6368754054" className="tel" >Call us at 636-875-4055 </a>
            </div>
        </div>

    </div>

          
            <div className="header-login headrow3"></div>
         
            <div className="header-login headrow3"></div>
            {/* <div className="header-login headrow3"></div> */}
            {/* <section className="header-login headrow3 sub-banner " style={{borderRadius:"2rem"}}>
                <LoginModule />
            </section>                       */}
            
            <div className="headrow3 mobilehide"></div>
        </section>
    )
}
