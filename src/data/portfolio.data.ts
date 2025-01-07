import { IPortfolioItem } from "@/interfaces/typesPortfolio"

export const portfolioData: IPortfolioItem[] = [
  {
    title: "Developer Portfolio",
    imgUrl: "/assets/dev-portfolio.jpg",
    stack: ["React", "Tailwind", "Vite"],
    link: "https://sidney-dev.vercel.app/",
  },
  {
    title: "TMDB Movie Search",
    imgUrl: "/assets/tmdb.png",
    stack: ["Angular", "RXjs", "SASS"],
    link: "https://tmdb-desafio-promobit-angular.netlify.app/home",
  },
  {
    title: "Timer",
    imgUrl: "/assets/timer.png",
    stack: ["React", "Zod", "React Hook Form", "Immer"],
    link: "https://timer-sid.netlify.app/",
  },
  {
    title: "Ignite Call",
    imgUrl: "/assets/call.png",
    stack: ["Next", "Next Auth", "React Query", "Stitches"],
    link: "https://ignite-call-sid.vercel.app/",
  },
  {
    title: "Generic Landing Page",
    imgUrl: "/assets/generic-landing-page.jpg",
    stack: ["React", "Tailwind", "Aos"],
    link: "https://product-lp.netlify.app/",
  },
  {
    title: "Ignite Shop",
    imgUrl: "/assets/ignite-shop.png",
    stack: ["Next", "Stripe", "Stitches", "Keen slider"],
    link: "https://ignite-shop-2.vercel.app/",
  },
]
