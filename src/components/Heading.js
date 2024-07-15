import Image from 'next/image';
import Header from './Header';
import { FaSearch, FaBell, FaShoppingCart, FaUser , FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Heading () {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <FaSearch className="text-xl cursor-pointer" />
        </div>

        <div className="flex items-center justify-center space-x-4">
          <nav className="flex space-x-4">
            <a className="hover:text-indigo-600 cursor-pointer">Shop</a>
            <a className="hover:text-indigo-600 cursor-pointer">Essentials</a>
          </nav>
          <h1 className="text-4xl flex items-center mx-4">
            <span className="text-[#e4413a] font-serif italic">Macc</span> 
            <span className="text-[#004197] font-serif italic">Essentials</span>
          </h1>

          <nav className="flex space-x-4">
            <a className="hover:text-indigo-600 cursor-pointer">Best Sellers</a>
            <a className="hover:text-indigo-600 cursor-pointer">About Us</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <FaUser className="text-xl cursor-pointer" />
          <FaBell className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
        </div>
      </header>

      <section className="my-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-7xl text-[#3a4083] font-semibold ">Providing Services At Your Door</h2>
            <p className="mt-4 text-xl">
              <strong>MACC Essentials</strong>  has an important role in making supplies and services available to customers
              and their patients during this critical time. This includes services from various domains. Our aim is to aid you as much as we can.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#E2342D]  text-white rounded">Learn More</button>
          </div>
          <Image src="/assetss/bodyimage.png" alt="Delivery Man" width={800} height={500} />
        </div>
      </section>

      <section className="my-8">
   <h1 className="text-4xl flex items-center justify-center mx-4">
  <span className="text-[#e4413a] text-2xl font-bold">NEW</span> 
  <span className="text-[#004197] text-2xl font-bold">PRODUCTS</span>
  </h1>
  <div className="relative flex items-center mt-4">
    <button className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
      <FaChevronLeft className="text-xl" />
    </button>
    <div className="flex space-x-4 w-full">
  <div className="flex-shrink-0 w-1/3">
    <div className="h-full p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-200">
      <div className="flex justify-end">
        <span className="bg-red-500 text-white text-sm p-1 rounded">Top Seller</span>
      </div>
      <div className="flex justify-center">
        <Image src="/assetss/mask.png" alt="Face Mask" width={250} height={150} />
      </div>
    </div>
    <p className="mt-2 text-center">Face Masks</p>
  </div>
  <div className="flex-shrink-0 w-1/3">
    <div className="h-full p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-200">
    <div className="flex justify-center">
        <Image src="/assetss/perfume.png" alt="perfume" width={200} height={150} />
      </div>
    </div>
    <p className="mt-2 text-center">Body Spray</p>
  </div>
  <div className="flex-shrink-0 w-1/3">
    <div className="h-full p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-200">
    <div className="flex justify-center">
        <Image src="/assetss/free.png" alt="stay-free-pad" width={230} height={150} />
      </div>
    </div>
    <p className="mt-2 text-center">Stay Free Ultra Pad</p>
  </div>
</div>

    <button className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
      <FaChevronRight className="text-xl" />
    </button>
  </div>
</section>
    </div>
  );
}
