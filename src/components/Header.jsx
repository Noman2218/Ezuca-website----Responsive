import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="relative">
    {/* Top Bar with Email and Phone */}
<div className="bg-white pr-6 pl-6 pt-2 pb-2 shadow-md md:pr-12 md:pl-12 lg:pr-24 lg:pl-24">
  <div className="flex flex-wrap ml-10 md:ml-16 justify-between items-center">
    {/* Left Side with Email and Phone */}  
    <div className="flex items-center divide-x divide-gray-400">
      <div className="flex items-center pr-4 md:pr-6 lg:pr-8">
        <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-2" />
        <a href="mailto:tuanna.design@gmail.com" className="text-black">tuanna.design@gmail.com</a>
      </div>
      <div className="flex items-center pl-4 md:pl-6 lg:pl-8">
        <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-2" />
        <span>001-1234-88888</span>
      </div>
    </div>

    {/* Right Side Search Input */}
    <div className="flex items-center">
      <input
        type="search"
        placeholder="What would you like to learn?"
        className="border p-2 outline-none "
      />
      <button className="bg-green-500 text-white px-4 py-2 ">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <a href="#" className="ml-4 text-gray-600 hover:text-gray-900 md:ml-6 lg:ml-8">Register</a>
      <span className="mx-1">/</span>
      <a href="#" className="text-gray-600 hover:text-gray-900 md:ml-6 lg:ml-8">Login</a>
    </div>
  </div>
</div>

      {/* Hero Section with Background Image */}
      <header className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('images/hero-bg.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Ezuca Logo and Navigation (Overlapping the Image) */}
        <div className="absolute top-0 left-0 w-full z-20 bg-white bg-opacity-30 ">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold text-white"><img src="images/foot-logo.png" alt="logo" /></div>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white hover:text-green-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-green-500">About</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Courses</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Blog</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Left-aligned Content */}
       
          <div class=" ml-20 sm:ml-8  relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-12 max-w-[600px]">
            <p className='text-green-600 font-bold' >GET STARTED WITH ONLINE COURSES</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
              Best Online <br /> Learning System
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
            <a href="#" className="bg-transparent-500 border-solid border-2 border-green-600 rounded-lg px-8 py-4 text-lg font-semibold hover:bg-green-400 transition-transform transform hover:scale-105">
              Read More
            </a>
          </div>
     

      </header>
    </div>
  );
};

export default Header;
