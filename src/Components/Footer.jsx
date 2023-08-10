import React from 'react'
import "./../App.css";
import imageFooter from "/Users/josecortez/Desktop/VisualCodeIronHack/Proyect2/carrito.com/src/assets/images/footerimage2.jpg";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="image-footer">
      <a href='#'>
          <img src={imageFooter}></img>
      </a>
      </div>
      <div className='foot'>
        <h3>_</h3>
      </div>
   
      <div className="footerone">
        <h1>  C'est la vie </h1>
      </div>
     
      <div className="footertwo">
        <address>📍 PARIS 
        </address>
      </div>
      <div className="footerthree">
        <p><a href="mailto:info@example.com" style={{color:'white'}}>amour@carrito.com</a></p>
      </div >
      <h3>_</h3>
      <div className="footerfour">
        <h1> ©️ Developers: Agathe, Nicolas & Jose  </h1>
      </div>
      <div>
        <h3>_</h3>
      </div>
    </div>
    </>
   
  )
}

export default Footer;