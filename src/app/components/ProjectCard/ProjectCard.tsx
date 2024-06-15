import React from "react";
import styles from "./ProjectCard.module.css";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  // Título
  title?: string;
  // Descrição
  desc?: string;
  // Tecnologias utilizadas
  stack?: string;
  // Link para o live preview
  urlPreview?: string;
  // Link para o código
  urlCode?: string;
  // Fonte p/ imagem de preview
  imgSrc?: string;
}

export const ProjectCard = ({
  title = "Project Title",
  desc = "Description",
  stack = "HTML, CSS, JavaScript",
  urlPreview = "",
  urlCode = "",
  imgSrc = "img/project_card_default.jpg"
}: ProjectProps) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.preview}>
        <img src={imgSrc} alt={`Imagem preview do projeto ${title}`} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.stack}><b>Tech stack: </b>{stack}</p>
      </div>
      <div className={styles.links}>
        <a href={urlPreview} target="_blank"><FiLink /> Live Preview</a>
        <a href={urlCode} target="_blank"><FaGithub /> Código-fonte</a>
      </div>
    </div>
  );
}
