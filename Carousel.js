import React from 'react';

const Carousel = () => {
  return (
    <div className="flex flex-col justify-between  w-80 h-80 bg-white p-4 rounded-lg shadow-md"> {/* Adjust height and width */}
      {/* Logo Section */}
      <div className="flex items-center mb-2">
        <img 
          src="logo.jpg" // Replace with your logo URL
          alt="Logo" 
          className="h-12 w-auto mr-2" // Reduced height of the logo
        />
      </div>
      
      {/* Industry Category */}
      <div className="bg-yellow-300 text-blue-600 p-1 rounded-md text-xs font-bold"> {/* Smaller padding and font size */}
        Industry Category
      </div>

      {/* Industry Name */}
      <h2 className="text-xl text-blue-600 my-2"> {/* Reduced font size */}
        Industry Name
      </h2>

      {/* Basic Details Section */}
      <div className="flex flex-col justify-between flex-1">
        <p className="text-sm text-gray-600"> {/* Reduced font size */}
          This section contains basic details about the industry. Here you can provide additional information.
        </p>
        
        {/* View Button */}
        <button className="mt-2 self-start px-3 py-1 bg-blue-600 text-white rounded-md text-xs"> {/* Reduced padding and font size */}
          View
        </button>
      </div>
    </div>
  );
};

export default Carousel;