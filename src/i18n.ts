import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      language: "en",
      subtitle: "Full Stack Web Developer",
      contato: "Contact",
      inputName: "Name",
      inputMessage: "Message",
      submitAbout: "Work With Me",
      footer: "All rights reserved",
      about:
        "I'm a programmer passionate about web development, especially when it comes to back-end solutions. With a degree in Computer Science, I’m constantly seeking new challenges—developing platforms and websites to expand my skills and stay up to date with the latest technologies. I'm driven by the desire to grow every day and build a solid career, with the long-term goal of becoming a reference in the field.",
      next: "View More Projects",
    },
  },
  pt: {
    translation: {
      language: "pt",
      subtitle: "Desenvolvedor Web Full Stack",
      contato: "Contato",
      inputName: "Nome",
      inputMessage: "Mensagem",
      submitAbout: "Trabalhe Comigo",
      footer: "Todos os direitos reservados",
      about:
        "Sou um programador apaixonado por desenvolvimento web, com foco especial em soluções back-end. Graduado em Ciência da Computação, estou sempre em busca de novos desafios, desenvolvendo plataformas e sites como forma de aprimorar minhas habilidades e me manter atualizado com as tendências do mercado. Tenho como motivação o crescimento contínuo e o objetivo de construir uma carreira sólida, tornando-me uma referência na área.",
      next: "Veja Mais Projetos",
    },
  },
}

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
