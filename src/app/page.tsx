'use client';
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <nav className={styles.nav}>
        <Navbar />
      </nav>
      <main className={styles.main}>
        <div className={styles.profile}>
          <Profile />
        </div>
        <div id="about" className={styles.about}>
          <h2>Sobre mim</h2>
          <p>Sou um desenvolvedor front end proativo e apaixonado por tecnologia, com 2 anos de experiência em criar interfaces web responsivas e visuais. Tenho sólida experiência com <b>jQuery, Bootstrap, Figma, Liferay e GitLab</b>, e me mantenho atualizado com as últimas tendências do mercado. Sou capaz de traduzir designs <b>UI/UX</b> em código limpo e eficiente, utilizando <b>metodologias ágeis</b> para garantir entregas rápidas e de alta qualidade. Busco constantemente aprimorar minhas habilidades e explorar novas tecnologias para oferecer soluções inovadoras e personalizadas.</p>
          <h3>Experiência</h3>
          <div className={styles.experience}>
            <div className={styles.item}>
              <div className={styles.header}>
                <div className={styles.logo}>
                  <img src="https://media.licdn.com/dms/image/D4D0BAQH8wd8gyhCILw/company-logo_200_200/0/1680296418667?e=2147483647&v=beta&t=fTgRHwF_Pp4gnee2szz5zjE4aVvatmjILi_y_X-Gwjc" alt="Logo Opikode" />
                </div>
                <h4>Desenvolvedor front end</h4>
                <p className={styles.enterprise}>Opikode · Tempo integral</p>
                <p className={styles.timespan}>Agosto 2022 · Julho 2024 · 2 anos</p>
                <p className={styles.location}>Rio de Janeiro (Remoto)</p>
              </div>
              <div className={styles.body}>
                <p>Trabalhei durante 2 anos na Opikode como Desenvolvedor Front End. Durante esse período, auxiliei no desenvolvimento e manutenção do Portal da Editora Senac SP. Contribuí com o desenvolvimento de interfaces responsivas através da tradução de modelos UI/UX feitos em Figma, e implementei integrações de APIs da base de livros do Senac para exibição de dados dos livros, seguindo um processo de desenvolvimento ágil.</p>
                <div className={styles.stack}>
                  <ul>
                    <li>Stack:</li>
                    <li><img src="img/icon_jquery.svg" alt="Icone jQuery" /><p>jQuery,</p></li>
                    <li><img src="img/icon_bootstrap.svg" alt="Icone Bootstrap" /><p>Bootstrap,</p></li>
                    <li><img src="img/icon_figma.png" alt="Icone Figma" /><p>Figma,</p></li>
                    <li><img src="img/icon_liferay.svg" alt="Icone Liferay" /><p>Liferay,</p></li>
                    <li><img src="img/icon_gitlab.svg" alt="Icone GitLab" /><p>GitLab</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h2>Projetos pessoais</h2>
          <div className={styles.item}>
            <div className={styles.header}>
              <h3><a target="_blank" href="https://portfolio-react-ecommerce-website.vercel.app">Loja Ecommerce</a></h3>
              <p className={styles.timespan}>Maio 2024 · hoje</p>
            </div>
            <div className={styles.body}>
              <p><a className={styles.link} target="_blank" href="https://portfolio-react-ecommerce-website.vercel.app">Loja Ecommerce <FaExternalLinkAlt className={styles.icon} /></a> fictícia para venda de produtos eletrônicos. Aplicação fullstack com React no front end, Node.js e Express no back end, banco de dados MySQL e autenticação de usuários através de integração com a plataforma Auth0.</p>
              <p>A aplicação é responsiva e suporta todos os tamanhos de tela. O usuário é capaz de pesquisar, filtrar, favoritar e adicionar produtos ao carrinho de compras e visualizar um resumo do pedido.</p>
              <div className={styles.stack}>
                <h4>Stack do projeto</h4>
                <ul>
                  <li className={styles.title}>Stack:</li>
                  <li><img src="img/icon_react.svg" alt="Icone React" /><p>React.js,</p></li>
                  <li><img src="img/icon_nodejs.svg" alt="Icone Node" /><p>Node.js,</p></li>
                  <li><img src="img/icon_express.svg" alt="Icone Express" /><p>Express,</p></li>
                  <li><img src="img/icon_mysql.svg" alt="Icone MySQL" /><p>MySQL,</p></li>
                  <li><img src="img/icon_auth0.svg" alt="Icone Auth0" /><p>Auth0,</p></li>
                  <li><img src="img/icon_github.svg" alt="Icone GitHub" /><p>GitHub,</p></li>
                  <li><img src="img/icon_vercel.svg" alt="Icone Vercel" /><p>Vercel</p></li>
                </ul>
              </div>
              <div className={styles.repo}>
                <h4>Repositórios do projeto</h4>
                <ul>
                  <li className={styles.title}>Repositórios:</li>
                  <li><a target="_blank" href="https://github.com/NycolasFelipe/portfolio-react-ecommerce-website"><img src="img/icon_github.svg" alt="Icone GitHub" /><p>Front end</p></a></li>
                  <li><a target="_blank" href="https://github.com/NycolasFelipe/portfolio-react-ecommerce-server"><img src="img/icon_github.svg" alt="Icone GitHub" /><p>Back end</p></a></li>
                </ul>
              </div>
              <div className={styles.carousel}>
                <h4>Imagens:</h4>
                <Slider {...settings}>
                  <img src="img/screenshot_ecommerce_01.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_02.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_03.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_04.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_05.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_06.png" alt="Screenshot Loja Ecommerce" />
                  <img src="img/screenshot_ecommerce_07.png" alt="Screenshot Loja Ecommerce" />
                </Slider>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.header}>
              <h3><a target="_blank" href="https://portfolio-react-contacts.vercel.app/">Agenda de Contatos</a></h3>
              <p className={styles.timespan}>Julho 2024 · Julho 2024</p>
            </div>
            <div className={styles.body}>
              <p><a className={styles.link} target="_blank" href="https://portfolio-react-contacts.vercel.app/">Aplicação responsiva <FaExternalLinkAlt className={styles.icon} /></a> que simula uma agenda de contatos. O usuário é capaz de criar, editar, atualizar e excluir contatos. Dados dos contatos são salvos no browser localmente.</p>
              <div className={styles.stack}>
                <h4>Stack do projeto</h4>
                <ul>
                  <li className={styles.title}>Stack:</li>
                  <li><img src="img/icon_react.svg" alt="Icone React" /><p>React.js,</p></li>
                  <li><img src="img/icon_github.svg" alt="Icone GitHub" /><p>GitHub,</p></li>
                  <li><img src="img/icon_vercel.svg" alt="Icone Vercel" /><p>Vercel</p></li>
                </ul>
              </div>
              <div className={styles.repo}>
                <h4>Repositório do projeto</h4>
                <ul>
                  <li className={styles.title}>Repositório:</li>
                  <li><a target="_blank" href="https://github.com/NycolasFelipe/portfolio-react-contacts"><img src="img/icon_github.svg" alt="Icone GitHub" /><p>Projeto</p></a></li>
                </ul>
              </div>
              <div className={styles.carousel}>
                <h4>Imagens:</h4>
                <Slider {...settings}>
                  <img src="img/screenshot_contacts_01.png" alt="Screenshot Agenda" />
                  <img src="img/screenshot_contacts_02.png" alt="Screenshot Agenda" />
                  <img src="img/screenshot_contacts_03.png" alt="Screenshot Agenda" />
                  <img src="img/screenshot_contacts_04.png" alt="Screenshot Agenda" />
                  <img src="img/screenshot_contacts_05.png" alt="Screenshot Agenda" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </main >
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}
