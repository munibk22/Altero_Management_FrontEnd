import React from 'react'

export default function Nav() {
    return (
        <nav style={{marginTop: "-32px" }}
         className="navbar font600 width100 flexwrap navul sub-banner" >             
                <li className="home">
                    <a href="#home">Home</a>
                </li>

                <li className="mobilehide">
                    <a href="#learnmore">Learn More</a>
                </li>
                <li className="">
                    <a href="#about">About</a>
                </li>

                <li className="">
                    <a href="#contact">Contact</a>
                </li>

                <li className="">
                <a href="/signup">Sign Up</a>
                </li>  
        </nav>
    )
}
