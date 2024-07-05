import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Analytics } from "@vercel/analytics/react";
import styles from "./page.module.css";

export default function Home() {
  const techStack = [
    { "name": "HTML5", "iconSrc": "img/icon_html5.svg" },
    { "name": "CSS3", "iconSrc": "img/icon_css3.svg" },
    { "name": "JavaScript", "iconSrc": "img/icon_javascript.svg" },
    { "name": "Jquery", "iconSrc": "img/icon_jquery.svg" },
    { "name": "TypeScript", "iconSrc": "img/icon_typescript.svg" },
    { "name": "React", "iconSrc": "img/icon_react.svg" },
    { "name": "Node.js", "iconSrc": "img/icon_nodejs.svg" },
    { "name": "Next.js", "iconSrc": "img/icon_nextjs.svg" },
    { "name": "Bootstrap", "iconSrc": "img/icon_bootstrap.svg" },
    { "name": "Git", "iconSrc": "img/icon_git.svg" },
    { "name": "GitHub", "iconSrc": "img/icon_github.svg" },
    { "name": "Liferay", "iconSrc": "img/icon_liferay.svg" },
    { "name": "MySQL", "iconSrc": "img/icon_mysql.svg" },
    { "name": "NPM", "iconSrc": "img/icon_npm.svg" },
    { "name": "VSCode", "iconSrc": "img/icon_vscode.svg" },
  ];

  const projects = [
    {
      "title": "Portfolio",
      "desc": "Página de portfólio para exibição de projetos, habilidades técnicas e informações para contato.",
      "stack": "HTML, CSS, JavaScript, TypeScript, React, Next.js, Storybook",
      "urlPreview": "",
      "urlCode": "https://github.com/NycolasFelipe/portfolio-my-portfolio",
      "imgSrc": "img/project_card_2.png"
    },
    {
      "title": "Loja Ecommerce",
      "desc": "Loja Ecommerce fictícia de produtos eletrônicos. Aplicação SPA responsiva e que suporta dispositivos desktop e mobile.",
      "stack": "HTML, CSS, JavaScript, React, Node, Express, MySQL, Auth0.",
      "urlPreview": "https://portfolio-react-ecommerce-website.vercel.app",
      "urlCode": "https://github.com/NycolasFelipe/portfolio-react-ecommerce-website",
      "imgSrc": "img/project_card_1.png"
    }
  ];

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
          <p>Meu nome é Nycolas Felipe, e sou um desenvolvedor front-end com uma profunda paixão por tecnologia e um talento especial para resolver problemas. Sou apaixonado por criar interfaces web responsivas e atraentes, e estou sempre em busca de aprender novas tecnologias para me aprimorar. No momento resido em Niterói - RJ, e estou cursando Ciência da Computação na Universidade Federal Fluminense, e buscando uma oportunidade de alocação no mercado de trabalho.</p>
          <h3>Experiência</h3>
          <h4>Opikode | Estágio em Desenvolvimento Front-End</h4>
          <p>
            Trabalhei de agosto de 2022 até março de 2023 na Opikode como estagiário. Durante esse período, ajudei no desenvolvimento e manutenção do Portal da Editora Senac SP. Contribuí com o desenvolvimento de interfaces responsivas através da tradução de modelos UI/UX feitos em Figma, e implementei integrações de APIs da base de livros do Senac para exibição de dados dos livros, seguindo um processo de desenvolvimento ágil.</p>
        </div>
        <div id="tech" className={styles.tech}>
          <h2>Habilidades técnicas</h2>
          <p>Tecnologias que possuo experiência</p>
          <div className={styles.tech_items}>
            {techStack.map((curElm, index) => {
              return (
                <div key={index} className={styles.tech_item}>
                  <div className={styles.tech_item_icon}>
                    <img src={curElm.iconSrc} alt={`Icone ${curElm.name}`} />
                  </div>
                  <div className={styles.tech_item_name}>
                    <span>{curElm.name}</span>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h2>Projetos</h2>
          <p>Aplicações que já desenvolvi</p>
          <div className={styles.projects_items}>
            {projects.map((curElm, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={curElm.title}
                  desc={curElm.desc}
                  stack={curElm.stack}
                  urlPreview={curElm.urlPreview}
                  urlCode={curElm.urlCode}
                  imgSrc={curElm.imgSrc}
                />
              )
            })
            }
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}
