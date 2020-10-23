import React from "react";
import "./styles.css";

// import { Container } from './styles';

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <a href="#">Nossa Estrutura</a>
        </li>
        <li>
          <a href="#">Especialidades</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Whatsapp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
