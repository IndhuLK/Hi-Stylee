import React from "react";
import meeting from "../../assets/img19.png"; // change to your image

const AboutSectionPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-family">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <img 
          src={meeting} 
          alt="Discussion" 
          className="rounded-lg shadow-md w-full object-cover border-b-10 border-[#014366]"
        />

        {/* TEXT CONTENT */}
        <div className="space-y-5">
          <p className="text-gray-700 leading-8">
            At Hi Style Furniture, we bring your ideas to life — from sketch to setup, 
            from millimeters to full makeovers. We're not just interior designers; 
            we're your creative partners in crafting personalized, practical, and elegant spaces.
          </p>

          <p className="text-gray-700 leading-8">
            Our expert team specializes in home interiors, modular kitchens, wardrobes, 
            office setups, and commercial fit-outs. Whether it's a single room or an 
            entire property, we deliver high-quality finishes using top-grade materials — 
            all while staying within your budget.
          </p>

          {/* BUTTON */}
          <button className="bg-[#014366] text-white px-15 py-3 rounded-full 
          font-medium hover:bg-[#012f48] transition duration-300 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionPage;
