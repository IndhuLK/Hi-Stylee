import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  { title: "Experience", subtitle: "20 Years" },
  { title: "Packages", subtitle: "100% Customizable" },
  { title: "Material", subtitle: "Premium" },
  { title: "Time", subtitle: "45 Days" },
  { title: "Warranty", subtitle: "5 Years" },
  { title: "Service", subtitle: "Lifetime" },
];

const WhyChooseUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="max-w-7xl mx-auto py-16 px-6 text-center font-family"
      data-aos="fade-up"
    >
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-down">
        Why Choose Us
      </h2>

      {/* Description */}
      <p
        className="text-gray-700 max-w-5xl mx-auto leading-8 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        At hi style furniture, we specialize in creating stylish and functional interiors 
        that bring your vision to life. Whether it's a home, office, or commercial space, 
        our expert team delivers customized design solutions that blend aesthetics with practicality. 
        Every project is thoughtfully crafted to reflect your personality and enhance the way you live or work — 
        with attention to detail, quality materials, and seamless execution.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white shadow-lg rounded-xl py-4 px-3 border border-gray-200 hover:shadow-xl transition"
          >
            <h4 className="text-sm font-semibold">{item.title.toUpperCase()}</h4>
            <p className="text-gray-600 text-xs mt-1 uppercase">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
