import React from 'react';
import bg from '../assets/bg/bg2.svg';
import home from '../assets/imageHome/home.svg';


const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center z-30 home-section">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 opacity-40">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="relative w-full flex items-center z-20 px-4 sm:px-6 lg:px-8 
        pt-16 sm:pt-0 md:pt-28 lg:pt-40">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center 
          justify-between gap-6 md:gap-8 lg:gap-12">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2 max-w-[510px] space-y-4 md:space-y-6">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-white 
              font-medium">
              Ship to and from anywhere in the world
            </p>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white 
              leading-tight font-body3">
              Find the best freight <br className="hidden sm:block" /> quote
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies 
              semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat 
              elementum ut. Volutpat nullam tellus egestas scelerisque tellus.
            </p>

            {/* Search Input */}
            <div className="flex w-full max-w-[465px] mt-4 md:mt-6">
              <input
                type="text"
                placeholder="Search for Container NO or Booking ID"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base
                  rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#1341EC] hover:bg-[#1342ecdb] text-white px-4 sm:px-6 md:px-8
                py-2.5 sm:py-3 md:py-4 text-sm sm:text-base rounded-r-lg transition duration-200
                whitespace-nowrap">
                Track Order
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={home}
              alt="Home Illustration"
              className="w-full max-w-[380px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 
                xl:max-w-[700px] object-contain transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;