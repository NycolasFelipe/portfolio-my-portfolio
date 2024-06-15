import React from "react";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container_title}>
        <h2>Olá,<br />Me chamo<br /><b>Nycolas Felipe</b><br />e sou Desenvolvedor Web</h2>
      </div>
      <div className={styles.container_picture}>
        <div className={styles.picture}>
          <img src="img/profile_picture.png" alt="Imagem de Perfil" />
        </div>
      </div>
    </div>
  );
}
