import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" width={200} />
      </div>
      <div className="social-footer">
        <img src="./images/ico-facebook.png" alt="Facebook" />
        <img src="./images/ico-instagram.png" alt="Instagram" />
        <img src="./images/ico-tiktok.png" alt="Tik Tok" />
        <img src="./images/ico-whatsapp.png" alt="Whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
