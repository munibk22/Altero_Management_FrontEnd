import React from 'react';
import './footer.css';

function Footer({aosStyle}) {
    return (
      <footer className='contact' data-aos={aosStyle} >
        <div>
        <div className="textalign padding1" style={{ marginTop: '3%' }}>
                        <h2>Visit Us:</h2>
                    </div>
                    <div className="flex justify margintop " style={{ width: "auto" }}>
                        <iframe title="stlouis"

                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48684898255!2d-90.38388875470163!3d38.653016509678444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1619128150811!5m2!1sen!2sus" width="320" height="250" style="border:0;" allowfullscreen="" loading="lazy'>

                        </iframe>
                    </div>
        </div>
        <article>
          <p>Interested in our services or need more information? Reach out to us through the contact form above
             or call us at (123) 456-7890. At Altero Management, we are always ready
            to assist you.</p>
          <span className='footer-info-section'>email us at:</span><h4>whisperwind22@gmail.com</h4>  
        </article>
        
                    <div className="flexcol justifyend  padding1" style={{ color: 'burlywood', }}>
                        <p className="" >
                            &ldquo;All stated earnings reflect potential earnings, might not be the amount you earn.&rdquo;
                        <em>
                            </em>
                        </p>
                        <br></br>
                        <div id="app">
                        </div>
                        <a href="https://theperfectdev.info/" target="blank" className="anchor">
                            @ThePerfectDev</a>
                    </div>

                
      </footer>
      );
}

export default Footer;