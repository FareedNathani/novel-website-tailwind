"use client";

import { useState } from 'react';
import { GiRose } from "react-icons/gi";
import NavbarLi from './NavbarLi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container flex flex-wrap justify-between items-center text-white p-4 mt-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 font-bold text-2xl font-serif shadow-lg">
        <span>Dil Se <span className="text-gray-400 text-3xl">Qalam</span></span>
        <GiRose className="text-red-700" />
      </div>

      <nav className={`flex-col md:flex md:flex-row md:items-center ${isMenuOpen ? "flex" : "hidden"} md:flex md:justify-center md:w-full`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <NavbarLi href="/" name='Home' />
          <NavbarLi href="/aboutUs" name='About Us' />
          <NavbarLi href="/novels" name='Novels' />
          <NavbarLi href="/contactUs" name='Contact Us' />
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center ml-auto">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;