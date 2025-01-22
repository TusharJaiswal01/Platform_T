import React from 'react'
import { useSelector } from 'react-redux'

const JobDetails = () => {
  const JobDetails=useSelector((state)=>state.data.value)
  console.log(JobDetails)
  return (
    <>
     <div className="flex flex-col md:flex-row items-start p-4 md:pl-16 mt-10  ">
        {/* Left Side */}
        <div className="md:w-1/2 w-full md:pr-8 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-customBlueHeading">
            About Job
          </h1>
          <br />

          <p className="text md:text-md mb-6 text-gray-600">
            {JobDetails.description}
      
          </p>

          
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <img
            src={JobDetails.img}
            alt="About Image"
            className="object-cover md:h-[60vh] h-full w-full md:w-[80%] rounded-lg shadow-lg"
          />
        </div>
      </div>

      

        </>
  )
}

export default JobDetails