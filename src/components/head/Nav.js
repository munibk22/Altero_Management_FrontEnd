import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar sticky font600 width100 flexwrap navul" >  
            {/* <section className="flexwrap navul"> */}

                <li className="">
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
            {/* </section> */}

            
        </nav>
    )
}
