import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="b h-24 flex items-center px-6 shadow-lg">
      {/* Logo on the left */}
      <div className="text-white text-2xl font-bold">
        <img src="logo.jpg"  className='w-60 h-20' alt="" />
      </div>
      
      {/* Links on the right */}
      <div className="flex-grow flex justify-end items-center space-x-8 text-black">
        <Link to="/" className=" hover:text-blue-300 transition duration-200">
          Home
        </Link>
        <a href="#about" className=" hover:text-blue-300 transition duration-200">
          About Us
        </a>
        <Link to="/industries" className=" hover:text-blue-300 transition duration-200">
          Industries
        </Link>
        <Link to="/institutions" className=" hover:text-blue-300 transition duration-200">
          Institutions
        </Link>
        <Link to="/profile" className=" hover:text-blue-300 transition duration-200">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;