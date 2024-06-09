import React from 'react'

export default function BodyHeader() {
    return (

        // <div className="flexwrap justifyaround width30 font600 ">
        <section className= 'body-header'>
            {/* <script src="https://kit.fontawesome.com/494ce4ee7f.js" crossorigin="anonymous"></script> */}

            <div className=" headerb flexcol alignitems ">
                <i className="fas fa-hand-holding-usd hicon"></i>
                Finance
        </div>
            <div className="headerb flexcol alignitems">
                <i className="fas fa-coins hicon"></i>
                Cryptos
            </div>

            <div className="headerb flexcol alignitems">
                <i className="fas fa-home hicon"></i>
                Real Estate
                </div>

        </section>
    )
}
