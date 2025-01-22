// src/components/Institute/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css';

// Register all components from Chart.js
Chart.register(...registerables);

const Dashboard = () => {
    // State for applications data
    const [applicationsData, setApplicationsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State for error handling

    // Fetch data from backend API
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/applications'); // Replace with your API endpoint
                const data = response.data;

                // Log data to check its structure
                console.log('Fetched applications data:', data);

                // Ensure data is an array before setting state
                if (Array.isArray(data)) {
                    setApplicationsData(data);
                } else {
                    throw new Error('Data is not an array'); // Throw error if data is not an array
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response) {
                    // Handle HTTP error responses
                    setError(`Error: ${error.response.data.message || 'Something went wrong. Please try again later.'}`);
                } else if (error.request) {
                    // Handle network errors
                    setError('Error: No response from the server');
                } else {
                    // Handle other errors
                    setError('Error: ' + error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    // Data for the Bar chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // You can update this dynamically if you have date data
        datasets: [
            {
                label: 'Applications',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
                data: applicationsData.map(app => app.openings ? app.openings.length : 0), // Assuming openings are stored in an array in the application data
            },
        ],
    };

    // Options for the Bar chart
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Applications',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    // Total count of applications
    const totalApplications = Array.isArray(applicationsData) 
        ? applicationsData.reduce((acc, curr) => acc + (curr.openings ? curr.openings.length : 0), 0) // Adjusted to get total openings count
        : 0; // Default to 0 if applicationsData is not an array

    // Loading state
    if (loading) {
        return <div className="loading">Loading...</div>; // Consider adding a spinner here
    }

    // Error state
    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="dashboard">
            <h2>My Dashboard</h2>
            <h3>Total Applications: {totalApplications}</h3> {/* Display total applications */}
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
