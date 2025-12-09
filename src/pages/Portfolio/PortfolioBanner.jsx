import React from "react";
import banner from "../../assets/portfolio.jpg";

const PortfolioBanner = () => {
  return (
    <div className="font-family">
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] 
      flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src={banner}
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative max-w-3xl px-6 md:mt-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl 
          font-bold leading-tight">
            Our Work Speaks for Itself
          </h1>

          <p className="text-white text-sm sm:text-base mt-4 opacity-90 max-w-xl mx-auto">
            Explore a curated selection of our completed interior projects
            across residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          Explore beautifully crafted interior projects designed by Hi Style Furniture — 
          from cozy bedrooms to elegant dining spaces, each layout blends style, comfort, 
          and functionality to inspire every corner of your home.
        </p>
      </div>
    </div>
  );
};

export default PortfolioBanner;
