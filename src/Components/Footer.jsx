import React from 'react'
import "./../App.css";
import imageFooter from "./../assets/images/footerimage2.jpg";

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
        {/* <h3>_</h3> */}
      </div>
   
      <div className="footerone">
        <h1>  C'est la vie </h1>
      </div>
     
      <div className="footerthree">
        <p><a className="p-a" href="mailto:info@example.com">amour@carrito.com</a></p>
      </div >
      <div className="footertwo">
        <address>📍 Paris 
        </address>
      </div>
      {/* <h3></h3>
      <h3></h3> */}
      <div className="footerfour">
        <p> ©️ Developers: Agathe, Nicolas & Jose  </p>
      </div>
      {/* <h3>_</h3> */}
      <div>
        {/* <h3>_</h3> */}
      </div>
    </div>
    </>
   
  )
}

export default Footer;