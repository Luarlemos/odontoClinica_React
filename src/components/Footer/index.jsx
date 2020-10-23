import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./styles.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="consultorio">
        Ama Odonto
      Clinica Odontológica
      </div>
      <div className="endereco">
        Ama Odonto S/S LTDA CNPJ: 18.908.299/0001-42
        EPAO: 489
        Responsável Técnico: Dra. Julia CRO-CE: 7074
     </div>
      <div className="footer__social">
        <a href="https://www.facebook.com">
          <FaFacebook size="40" color="#3b5998" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter size="40" color="#1da1f2" />
        </a>
        <a href="https://www.youtube.com">
          <FaYoutube size="40" color="#f00f" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram size="40" color="#000" />
        </a>


      </div>
    </footer>)
};

export default Footer;