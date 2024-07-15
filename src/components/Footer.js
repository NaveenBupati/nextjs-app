import Head from 'next/head';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Head>
        <title>Footer Example</title>
      </Head>
      <footer className="mt-24 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Mac Essentials Section */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <h1 className="text-4xl flex items-center mx-4">
                <span className="text-[#e4413a] font-serif italic">Macc</span>
              </h1>
              <h2 className="text-4xl flex items-center mx-4">
                <span className="text-[#004197] font-serif italic">Essentials</span>
              </h2>
            </div>
            {/* Links Section */}
            <div className="flex flex-col md:flex-row w-full md:space-x-16 space-y-4 md:space-y-0">
              {/* Left Column: Home, Collection, Products */}
              <ul className="space-y-4 text-center ml-14 md:text-left flex-1">
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">Home</a></li>
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">Collection</a></li>
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">Products</a></li>
              </ul>
              {/* Right Column: About, Contact, FAQ */}
              <ul className="space-y-4 text-center md:text-left flex-1">
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">About</a></li>
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 font-bold hover:text-blue-300">FAQ</a></li>
              </ul>
            </div>
            {/* Email Signup Section */}
            <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
              <h2 className="text-sm mb-4 text-center text-black md:text-left">
                Be the first to know about our biggest and best sales. We'll never send more than one email a 
                <h2> month.</h2>  
              </h2>
              <form className="flex items-center w-full md:w-80 relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border-b border-black bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black pl-10"
                  placeholder="ENTER YOUR EMAIL"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-0 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1 0 1 1 1 1v12c0 1-1 1-1 1H4c-1 0-1-1-1-1V5c0-1 1-1 1-1z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </button>
              </form>
              {/* Social Media Icons */}
              <div className="mt-8 flex justify-center mr-28 space-x-2">
                <a href="#" className="p-2 bg-[#003366] rounded-full text-white hover:bg-[#002244] transition duration-300 ease-in-out" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-[#003366] rounded-full text-white hover:bg-[#002244] transition duration-300 ease-in-out" aria-label="LinkedIn">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-[#003366] rounded-full text-white hover:bg-[#002244] transition duration-300 ease-in-out" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-[#003366] rounded-full text-white hover:bg-[#002244] transition duration-300 ease-in-out" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              All rights are reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
