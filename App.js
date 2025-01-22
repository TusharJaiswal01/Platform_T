// import React from 'react';
// import './App.css'; // If you have any styles
// import JobOpeningForm from './components/Industry/JobOpeningForm.js';
// import Opening from './components/Institute/Openings.js';
import Home from './components/Home.js';
import Footer from './components/LandingPages/Footer.js';
import Navbar from './components/Navbar.js';
import Dashboard from './components/Institute/Dashboard.js';

// function App() {
//     return (
//         <div className="App">
//            {/* <JobOpeningForm/>
//            <Opening/> */}
//            <Navbar/>
//            <Home/>
//            <Footer/>
//         </div>
//     );
// }

// export default App;


import { useState } from 'react'
import { Routes,Route } from 'react-router'
// import Home from './components/core/Home/Home'
import Industry from './components/Students/Industry.js';
// import Navbar from './components/core/Navbar'
import JobDetails from './components/Students/JobDetails.js';
import JobOpeningForm from './components/Industry/JobOpeningForm.js';
import './App.css'
// import Dashboard from './components/Institute/Dashboard.js';
// import MyApplications from './components/core/Profile/MyApplications'
// import Footer from './components/core/Home/Footer'
// import Apply from './components/core/Apply'
function App() {

  
  

  return (
    <>
   

     
      <Navbar/>
       {/* <Home/> */}
       <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/industries" element={<Industry />} /> 
        <Route path="/viewdetails" element={<JobDetails  />} />
        {/* <Route path="/profile" element={<MyApplications/>} /> */}
        <Route path="/apply" element={<JobOpeningForm/>} />
       </Routes>
       <Dashboard/>
      <Footer/>
      </>
  
  )
}

export default App