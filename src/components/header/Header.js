import React, { useEffect,useRef } from "react"
import './header.css';

const Header = () =>{
//     const headerRef = useRef(null);

// useEffect(() => {
//     const header = headerRef.current;
//     window.addEventListener('scroll',()=> window.scrollY >= 10 ? header.classList.add('active')
//     : header.classList.remove('active'));
// } , []);
    

    return(
        <header className=''>
        <h2 className="headerfont ">E-Girl Support & Room Rentals 💫</h2>
        <h3 className="headerfont2 text-shadow-header">Offering 5 ⭐ Services in St Louis, MO.</h3>
        </header>
    )
}


export default Header;