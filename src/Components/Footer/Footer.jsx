import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" width={200} />
      </div>
      <div style={{ background: "gray" }}>
        <img width={50} src="./images/ico-facebook.png" alt="Facebook" />
        <img width={50} src="./images/ico-instagram.png" alt="Instagram" />
        <img width={50} src="./images/ico-tiktok.png" alt="Tik Tok" />
        <img width={50} src="./images/ico-whatsapp.png" alt="Whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
