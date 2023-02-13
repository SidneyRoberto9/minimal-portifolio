import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      language: 'en',
      a: 'Welcome to React and react-i18next',
      subtitle: 'Full Stack Web Developer',
      contato: 'Contact',
      inputName: 'Name',
      inputMessage: 'Message',
      submitAbout: 'Work With Me',
      footer: 'All rights reserved',
      about:
        "I'm a programmer with a passion for web development, with a strong emphasis on back-end development, I am currently majoring in computer science and from time to time I challenge myself to develop platforms and websites to acquire more knowledge and deepen my knowledge in the area, my goal is to one day become a reference in the area.",
    },
  },
  pt: {
    translation: {
      language: 'pt',
      a: 'Bem vindo ao React e react-i18next',
      subtitle: 'Desenvolvedor Web Full Stack',
      contato: 'Contato',
      inputName: 'Nome',
      inputMessage: 'Mensagem',
      submitAbout: 'Trabalhe Comigo',
      footer: 'Todos os direitos reservados',

      about:
        'Sou um programador apaixonado pelo desenvolvimento web, com bastante ênfase no desenvolvimento back-end, atualmente estou graduando em ciência da computação e de vez em quando eu me desafio a desenvolver plataformas e sites para adquirir mais conhecimento e me aprofundar na área, tenho como objetivo um dia me referencia na área.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
