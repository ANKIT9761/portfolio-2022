import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import NavbarDropdown from './sidebar';
import DarkLightModeSwitch from '../../assets/lottie/light-dark-mode-button.json';

export default function Navbar() {
	const [display, setDisplay] = useState(false);
	const [theme, setTheme] = useState('light');

	const displayNavbar = () => {
		setDisplay(true);
	};

	const removeNavbar = () => {
		setDisplay(false);
	};

	return (
		<nav
			className='z-20 w-full fixed top-0 transition-all duration-300'
			style={{ marginTop: display ? 0 : '-64px' }}
		>
			<div className='max-w-6xl backdrop-blur-md rounded-xs mx-1 md:mx-auto flex justify-between items-center bg-gray-900 bg-opacity-70 px-3 sm:px-6 md:px-10 lg:px-20 py-1 h-12 my-1 md:my-2'>
				<LinkScroll
					spy={true}
					smooth={true}
					offset={-32}
					duration={200}
					to='herosection'
					onSetActive={removeNavbar}
				>
					<span className='animate-text-bg before:bg-white hover:text-black font-league font-semibold tracking-wide text-xl leading-none pt-1 cursor-pointer'>
						NIMISH
					</span>
				</LinkScroll>
				<div className='hidden md:flex gap-2 items-center justify-center'>
					{navbarData.map((e, i) => (
						<LinkScroll
							activeClass='text-yellow-300'
							className='text-sm px-3 py-2 flex items-center justify-center cursor-pointer uppercase hover:text-yellow-200'
							spy={true}
							smooth={true}
							offset={-32}
							duration={200}
							to={e.section}
							onSetActive={displayNavbar}
							key={i}
						>
							<span>{e.title}</span>
						</LinkScroll>
					))}
				</div>
				<div className='flex gap-3 items-center'>
					<div className='md:hidden'>
						<NavbarDropdown />
					</div>
					<button
						onClick={() =>
							setTheme(theme === 'light' ? 'dark' : 'light')
						}
						className='text-xl'
					>
						{theme === 'light' ? <FaSun /> : <FaMoon />}
					</button>
				</div>
			</div>
		</nav>
	);
}

export const navbarData = [
	{
		title: 'About',
		section: 'about',
	},
	{
		title: 'Tools & Skills',
		section: 'skills',
	},
	{
		title: 'Projects',
		section: 'projects',
	},
	{
		title: 'Research',
		section: 'research',
	},
	{
		title: 'Hire me',
		section: 'contact',
	},
];
