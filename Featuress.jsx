import React from 'react';

// Reusable FeatureCard component
const FeatureCard = ({ imgSrc, title, description, altText }) => {
  return (
    <div className="group  before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-black via-blue-800 to-black before:absolute before:top-0 w-full sm:w-80 h-96 relative [background: linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%);] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 bg-blue-400 mt-8 rounded-full border-4 border-blue-300 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
        <img className="justify-center ml-6 mt-6" src={imgSrc} width="50px" height="50px" alt={altText} />
      </div>
      <div className="z-10 group-hover:-translate-y-10 transition-all duration-500 w-[95%]">
        <span className="text-2xl font-semibold">{title}</span>
        <p>{description}</p>
      </div>
      <button
        aria-label="Get Started"
        className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-green-800 border-2 border-pink hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
      >
        Get Started
      </button>
    </div>
  );
};

// Main Features component
export default function Features() {
  const features = [
    
      {
        imgSrc: 'https://cdn-icons-png.flaticon.com/128/10756/10756323.png',
        title: 'Create and Apply with Confidence',
        description: 'Build a professional profile, verified by AI, and apply for jobs seamlessly in just a few clicks.',
        altText: 'Trip Planner'
      },
      {
        imgSrc: 'https://cdn-icons-png.flaticon.com/128/11086/11086184.png',
        title: 'Verify and Manage Profiles',
        description: 'Approve authentic profiles with AI-powered fraud detection for a trustworthy and efficient recruitment process.',
        altText: 'Travel Deals Finder'
      },
      {
        imgSrc: 'https://cdn-icons-png.flaticon.com/128/2134/2134755.png',
        title: 'Browse and Hire Smartly',
        description: ' Explore verified profiles and automate communication with candidates for hassle-free hiring decisions.',
        altText: 'Real-Time Updates'
      }
      
      
        
    
    
  ];

  return (
    <div className="bg-zinc-900">
      <h1 className="font-bold text-center text-4xl md:text-6xl text-white mt-5">Features We Provide</h1>
      <div className="flex flex-wrap justify-center lg:justify-between gap-6 space-x-0 md:space-x-4 ml-4 md:ml-16 lg:ml-32 mr-4 md:mr-16 lg:mr-32 px-6 mt-12 lg:mt-28">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
            altText={feature.altText}
          />
        ))}
      </div>
    </div>
  );
}