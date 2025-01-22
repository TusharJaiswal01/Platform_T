// src/components/PhotoGrid.js
import React from 'react';

const PhotoGrid = () => {
  
    const design='w-44 xl:mt-0 mt-10'
    return (

    <div className="flex lg:flex-row flex-col flex-wrap items-center justify-evenly mt-10 mb-10 xl:h-24 p-4 xl:ml-6 ">
      <img src="company1.jpg" alt="Photo 1" className={design} />
      <img src="company2.jpg" alt="Photo 2"  className={design}   />
      <img src="company3.jpg" alt="Photo 3"  className={design}   />
      <img src="company4.jpg" alt="Photo 4" className={design} />
      <img src="company5.jpg" alt="Photo 5" className={design}   />
      <img src="company6.jpg" alt="Photo 6" className={design} />
    </div>
  );
};

export default PhotoGrid;