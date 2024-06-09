import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='bg-gray-800 text-white p-2 sticky w-full top-0 z-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold py-1'>My Portfolio</h1>
                <nav className='hidden md:flex'>
                    <a href="#home" className='mx-2 hover:text-gray-300'>Home</a>
                    <a href="#introduction" className='mx-2 hover:text-gray-300'>Introduction</a>
                    <a href="#skills" className='mx-2 hover:text-gray-300'>Skills</a>
                    <a href="#projects" className='mx-2 hover:text-gray-300'>Projects</a>
                    <a href="#roles" className='mx-2 hover:text-gray-300'>Roles</a>
                    <a href="#contact" className='mx-2 hover:text-gray-300'>Contact</a>
                </nav>
                <button onClick={toggleMenu} className='md:hidden focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <nav className='md:hidden bg-gray-800'>
                    <a href="#home" className='block px-4 py-2 hover:bg-gray-700'>Home</a>
                    <a href="#introduction" className='block px-4 py-2 hover:bg-gray-700'>Introduction</a>
                    <a href="#skills" className='block px-4 py-2 hover:bg-gray-700'>Skills</a>
                    <a href="#projects" className='block px-4 py-2 hover:bg-gray-700'>Projects</a>
                    <a href="#roles" className='block px-4 py-2 hover:bg-gray-700'>Roles</a>
                    <a href="#contact" className='block px-4 py-2 hover:bg-gray-700'>Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
