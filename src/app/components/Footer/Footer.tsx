import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container_contact}>
        <div className={styles.contact_info}>
          <span className={styles.phone}>+55 (21) 97274-3556</span>
          <span className={styles.email}>nycolasfelipe.contato@gmail.com</span>
        </div>
        <div className={styles.contact_icons}>
          <a href="https://github.com/NycolasFelipe" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nycolas-felipe" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.container_navigation}>
        <div className={styles.links}>
          <ul>
            <a href="#"><li>Início</li></a>
            <a href="#about"><li>Sobre mim</li></a>
            <a href="#tech"><li>Habilidades</li></a>
            <a href="#projects"><li>Projetos</li></a>
            <a href="#contact"><li>Contato</li></a>
          </ul>
        </div>
        <div className={styles.designed_by}><span>Feito por <b>Nycolas Felipe</b> @ 2024</span></div>
      </div>
    </div>
  );
}
