import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collect } from '../redux/industryData';

const IndustryCard = ({ industry }) => {
  const dispatch = useDispatch();
  const {
    job_title,
    description,
    key_skills,
    city,
    state,
    stipend,
    opening_date,
    apply_by,
  } = industry;

  const handleRegister = () => {
    // Implement registration logic here
  };

  const handleViewDetails = () => {
    dispatch(collect(industry));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-4/5">
      <h2 className="text-xl font-bold text-blue-800">{job_title}</h2>
      <p className="text-gray-700 mb-2 mt-2">{description}</p>
      
      {/* Display Key Skills as a list */}
      <p className="text-sm text-gray-500">
        Key Skills: {key_skills && key_skills.length > 0 ? (
          <ul className="list-disc list-inside">
            {key_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          'N/A'
        )}
      </p>

      <p className="text-sm text-gray-500">Location: {city}, {state}</p>
      <p className="text-sm text-gray-500">Stipend: ${stipend}/month</p>
      <p className="text-sm text-gray-500">Opening Date: {new Date(opening_date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-500">Apply By: {new Date(apply_by).toLocaleDateString()}</p>

      {/* Buttons */}
      <div className="mt-4 flex justify-start">
        <Link to='/apply'>
          <button 
            onClick={handleRegister} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Apply
          </button>
        </Link>
        <Link to='/viewdetails'>
          <button 
            onClick={handleViewDetails} 
            className="bg-gray-200 ml-4 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
