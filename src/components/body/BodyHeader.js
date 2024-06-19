import React from 'react'

export default function BodyHeader() {
    return (

        // <div className="flexwrap justifyaround width30 font600 ">
        <section className= 'body-header'>
            {/* <script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script> */}

            <div className=" headerb flexcol alignitems"  data-aos="zoom-in">
                <i className="fas fa-hand-holding-usd hicon text-shadow2"></i>
                Finance
        </div>
            <div className="headerb flexcol alignitems"  data-aos="zoom-in">
                <i className="fas fa-coins hicon text-shadow2"></i>
                Cryptos
            </div>

            <div className="headerb flexcol alignitems"  data-aos="zoom-in">
                <i className="fas fa-home hicon text-shadow2"></i>
                Real Estate
                </div>

        </section>
    )
}
