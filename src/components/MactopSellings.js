import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Mactopsellings() {
  return (
    <div className="flex h-[500px] mt-20">
      {/* Content side */}
      <div className="w-full p-8 flex flex-col items-center">
        {/* Combined heading */}
        <div className="w-full max-w-[800px] flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
          {/* Combined heading */}
          <div className="flex flex-col md:flex-row items-start md:space-x-2">
            <h2 className="text-4xl text-[#e2342d] font-bold">MACC</h2>
            <h2 className="text-4xl font-bold text-[#4a4b4d]">TOP SELLINGS</h2>
          </div>
          {/* Button */}
          <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
            View all
          </button>
        </div>

        {/* Card Container */}
        <div className="flex space-x-4 justify-center">
          {/* Card 1 */}
          <div className="relative flex-shrink-0 w-[350px] h-[350px] p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-200">
            <div className="flex justify-end">
              <span className="bg-red-500 text-white text-sm p-1 rounded">20% off</span>
            </div>
            <div className="flex justify-center">
              <img src="/assetss/perfume.png" alt="Body Spray" width={230} height={90} />
              {/* Icon Button */}
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
                <FaChevronLeft className="text-xl" />
              </button>
            </div>
            <p className="mt-2 text-center text-lg font-semibold">Body spray</p>
            <p className="text-gray-600 text-center">€400</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex-shrink-0 w-[350px] h-[350px] p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-200">
            <div className="flex justify-end">
              <span className="bg-red-500 text-white text-sm p-1 rounded">40% off</span>
            </div>
            <div className="flex justify-center">
              <img src="/assetss/mask.png" alt="Mask" width={310} height={90} />
            </div>
            <p className="mt-2 text-center text-lg font-semibold">Mask</p>
            <p className="text-gray-600 text-center">€400</p>
          </div>
        </div>
      </div>

      {/* Fixed side with the image */}
      <div className="w-[40%] bg-gray-200 flex items-center justify-center">
        <img
          src="/assetss/person.png"
          alt="Top Sellings"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Mactopsellings;
