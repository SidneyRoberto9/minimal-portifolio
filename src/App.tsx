import React, { useEffect, useState } from 'react';

import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';
import { Moon } from './components/Moon';
import { Portfolio } from './components/Portfolio';
import { Sun } from './components/Sun';
import { Timeline } from './components/Timeline';

function App() {
	const [theme, setTheme] = useState<string>('');

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleSwitchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<button
				type='button'
				onClick={handleSwitchTheme}
				className='fixed p-1 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md'>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</button>
			<div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
				<div className='max-w-5xl w-11/12 mx-auto'>
					<Intro />
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
