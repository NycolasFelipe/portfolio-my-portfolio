import React from "react";
import styles from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container_links}>
        <ul>
          <a href="#"><li>Início</li></a>
          <a href="#about"><li>Sobre mim</li></a>
          <a href="#tech"><li>Habilidades</li></a>
          <a href="#projects"><li>Projetos</li></a>
          <a href="#contact"><li>Contato</li></a>
        </ul>
      </div>
      <div className={styles.container_icons}>
        <a href="https://github.com/NycolasFelipe" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nycolas-felipe" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
