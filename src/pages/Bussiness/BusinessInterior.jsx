import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/img36.jpg";
import img2 from "../../assets/img37.jpg";
import ConsultationForm from "../Home/ConsultationForm";

const BusinessInterior = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const [openForm, setOpenForm] = useState(false);

  return (
    <section
      className=" px-6 py-16 font-family overflow-hidden"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* ---------- LEFT IMAGES ---------- */}
        <div className="flex gap-6 justify-center" data-aos="zoom-in">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <img
              src={img1}
              className="w-48 md:w-60 h-90 rounded-2xl object-cover shadow-lg"
              alt="Interior"
              data-aos="fade-right"
            />
            <div className="w-34 h-[3px] bg-[#014366] mt-3 rounded-full"></div>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center mt-10">
            <div className="w-38 h-[3px] bg-[#014366] mt-3 rounded-full mb-5"></div>
            <img
              src={img2}
              className="w-48 md:w-60 rounded-2xl object-cover shadow-lg"
              alt="Interior Design"
              data-aos="fade-left"
            />
          </div>
        </div>

        {/* ---------- RIGHT TEXT ---------- */}
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            Smart Spaces for Modern Businesses
          </h2>

          <p className="text-gray-600 leading-10 mb-6">
            At Hi Style Furniture, we design commercial interiors that are as
            functional as they are visually impressive. Whether it's an office,
            retail showroom, or client-facing space, our team creates
            environments that reflect your brand identity while maximizing
            comfort and productivity. From efficient layouts and ergonomic
            furniture to stylish finishes and lighting, every element is
            thoughtfully planned to support your business goals and create a
            lasting impression.
          </p>

          {/* CTA Button */}
          <button
            className="px-8 py-3 bg-[#014366] text-white font-semibold 
            rounded-full hover:bg-[#00394f] transition cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={() => setOpenForm(true)}
          >
            GET QUOTE
          </button>
        </div>
      </div>
      {/* Popup form */}
      {openForm && <ConsultationForm close={() => setOpenForm(false)} />}
    </section>
  );
};

export default BusinessInterior;
