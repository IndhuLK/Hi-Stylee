import { ArrowRight } from "lucide-react";
import apartImg from "../../assets/img20.jpg"; // change path to your image

const WhatSetsUsApart = () => {
  const points = [
    "End-to-End Design & Execution",
    "Budget-Friendly & Custom Solutions",
    "3D Visualizations Before Execution",
    "Quality Materials & Craftsmanship",
    "Timely Project Delivery",
    "Eco-Friendly Design Approach",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-family">
      
      {/* Heading Section */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
        What Sets Us Apart
      </h2>

      <p className="text-center text-gray-700 max-w-4xl mx-auto leading-9 mb-12">
        At Hi Style Furniture, we believe great interior design is more than just aesthetics — 
        it’s about creating meaningful spaces that reflect your lifestyle, values, and 
        personality. What sets us apart is our end–to–end approach, blending thoughtful design, 
        high-quality materials, transparent pricing, and timely execution. Whether it’s a compact 
        kitchen or a full home transformation, we bring creativity, precision, and professionalism 
        to every detail. With us, you don’t just get interiors — you get a seamless, stress-free 
        experience built on trust and tailored to you.
      </p>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20
                      gap-10 items-center">
        
        {/* Image */}
        <img 
          src={apartImg} 
          alt="Interior discussion" 
          className="rounded-lg shadow-md w-full object-cover"
        />

        {/* Bullet List */}
        <div className="space-y-4">
          {points.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-800 text-md">
              <ArrowRight size={18} className="text-[#171817]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhatSetsUsApart;
