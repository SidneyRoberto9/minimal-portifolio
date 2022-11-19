import { IPortfolioItem } from '../interfaces/typesPortifolio';

export const portfolioData: IPortfolioItem[] = [
	{
		title: 'Terminal Website',
		imgUrl: '/assets/terminal-website.jpg',
		stack: ['HTML', 'CSS', 'JavaScript'],
		link: 'https://fkcodes.com',
	},
	{
		title: 'Developer Portfolio',
		imgUrl: '/assets/dev-portfolio.jpg',
		stack: ['React', 'Tailwind', 'Vite'],
		link: 'https://sidney-dev.vercel.app/',
	},
	{
		title: 'TMDB Movie Search',
		imgUrl: '/assets/tmdb.png',
		stack: ['Angular', 'RXjs', 'SASS'],
		link: 'https://tmdb-desafio-promobit-angular.netlify.app/home',
	},
];
