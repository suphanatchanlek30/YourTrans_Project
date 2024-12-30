import React from 'react';

const Services = () => {
  const services = [
    {
      id: 'rail-express',
      title: 'Rail Express',
      image: '/src/assets/services/RailExpress.svg',
      route: '/services/rail-express',
      cols: 'col-span-2'
    },
    {
      id: 'near-by-furniture',
      title: 'Near By Furniture',
      image: '/src/assets/services/NearByFurniture.svg',
      route: '/services/furniture'
    },
    {
      id: 'surface-express',
      title: 'Surface Express',
      image: '/src/assets/services/SurfaceExpress.svg',
      route: '/services/surface-express'
    },
    {
      id: 'air-express',
      title: 'Air Express',
      image: '/src/assets/services/AirExpress.svg',
      route: '/services/air-express'
    },
    {
      id: 'domestic-air-express',
      title: 'Domestic Air Express',
      image: '/src/assets/services/Domestic.svg',
      route: '/services/domestic-air'
    },
    {
      id: 'cold-chain-express',
      title: 'Cold Chain Express',
      image: '/src/assets/services/ColdChainExpress.svg',
      route: '/services/cold-chain'
    },
    {
      id: 'near-by-electronics',
      title: 'Near By Electronics',
      image: '/src/assets/services/NearByElectronics.svg',
      route: '/services/electronics',
      cols: 'col-span-2'
    }
  ];

  const handleClick = (route) => {
    window.location.href = route;
  };

  return (
    <div id='services' className="relative w-full min-h-screen z-30 mb-10">
      <div className="relative w-full z-20 px-[20px] sm:px-6 lg:px-8 pt-16 sm:pt-0 md:pt-28 lg:pt-40">
        <div className="w-full max-w-[1700px] mx-auto">
          {/* Background Text */}
          <h2 className="absolute font-body3 font-semibold text-[59px] sm:text-[96px] opacity-50 text-[#E5E5E5] sm:leading-[144px] z-0 top-[30px] sm:top-[120px] left-[65px] sm:left-[92px]">
            Services
          </h2>

          {/* Foreground Text */}
          <h2 className="relative font-body3 font-bold text-[32px] text-[#262626] sm:text-[48px] sm:leading-[96px] leading-[36px] sm:text-left text-center z-10 mb-8">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  service.cols ? 'sm:col-span-2' : ''
                }`}
                onClick={() => handleClick(service.route)}
              >
                <div className="relative h-48 sm:h-56 lg:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute transition-opacity duration-300 hover:bg-opacity-30" />
                  <h2 className="absolute bottom-4 left-4 text-white text-base sm:text-xl lg:text-2xl font-medium">
                    {service.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;