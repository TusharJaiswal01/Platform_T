import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Openings = () => {
    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch job openings from the backend
    const fetchOpenings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/openings/openings');
            // Assuming the data structure is { success: true, data: [...] }
            if (response.data.success) {
                setOpenings(response.data.data);
            } else {
                setError('Failed to fetch openings');
            }
        } catch (err) {
            console.error('Error fetching openings:', err);
            setError('Error fetching openings. Please try again later.');
        } finally {
            setLoading(false); // Set loading to false after the request is complete
        }
    };

    // useEffect to fetch openings when the component mounts
    useEffect(() => {
        fetchOpenings();
    }, []);

    // Handle loading state
    if (loading) {
        return <div>Loading job openings...</div>;
    }

    // Handle error state
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Job Openings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {openings.length === 0 ? (
                    <div>No job openings available.</div>
                ) : (
                    openings.map(opening => (
                        <div key={opening._id} className="border p-4 rounded shadow">
                            <h2 className="text-xl font-semibold">{opening.job_title}</h2>
                            <p className="mb-2">{opening.description}</p>
                            <p className="text-gray-700">
                                Industry: {opening.industry ? opening.industry.name : 'N/A'}
                            </p>
                            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                                View Details
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Openings;
