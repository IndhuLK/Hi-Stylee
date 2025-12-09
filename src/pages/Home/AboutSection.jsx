import React from 'react'
import im2 from '../../assets/im2.jpg';
import { useState } from "react";
import ConsultationForm from './ConsultationForm';

const AboutSection = () => {
   const [openForm, setOpenForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src= {im2}
            alt="Interior Design"
            className="w-full rounded-2xl h-[90vh] shadow-md object-cover"
          />
        </div>

        {/* Content */}
        <div className='leading-8'>
          <p className="text-black font-bold text-xl mb-2 tracking-wide md:mb-10">
            Elevate Your Space with
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            <span className="text-[#0b4161] font-bold">Hi Style Furniture</span>{" "}
            <span className="text-gray-400 text-sm md:text-base ml-2">
              Style. Function. Comfort.
            </span>
          </h2>

          <p className="text-gray-600  mt-4 leading-10">
            At Hi Style Furniture, we specialize in transforming ordinary spaces into
            beautiful, functional interiors that reflect your personality and lifestyle.
            From smart modular kitchens to cozy bedrooms and elegant living areas,
            every design is tailored to meet your needs.
          </p>

          <p className="text-gray-600 leading-10 mt-3">
            We blend creativity, craftsmanship, and affordability to deliver interiors
            that look stunning and feel like home. Whether it's a home makeover or a
            complete workspace revamp — we bring your ideas to life with precision
            and style.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bg-[#06344f] cursor-pointer
          hover:bg-[#0b5e8a] text-white font-medium transition shadow-md"
          onClick={() => setOpenForm(true)}>
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}

    </div>
  );
};

export default AboutSection;
