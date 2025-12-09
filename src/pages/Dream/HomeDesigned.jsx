import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---- Replace with your images ----
import img1 from "../../assets/w1.jpg";
import img2 from "../../assets/w2.jpg";
import img3 from "../../assets/w3.jpg";
import img4 from "../../assets/w4.jpg";
import img5 from "../../assets/w5.jpg";
import img6 from "../../assets/w6.jpg";

const homeData = [
  { img: img1, title: "Wardrobe & Storage Unit" },
  { img: img2, title: "Crockery Units" },
  { img: img3, title: "Puja Unit" },
  { img: img4, title: "Study Table" },
  { img: img5, title: "False Ceiling" },
  { img: img6, title: "Furniture Accessories" },
];

const HomeDesigned = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center font-family">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Your Home. Fully Designed.
      </h2>

      {/* Subheading */}
      <p className="text-gray-500 max-w-3xl mx-auto leading-6 mb-12">
        We Offer End-To-End Interior Solutions That Reflect Your Style And Simplify Your Journey.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {homeData.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />

            {/* Floating Content Box */}
            <div
              className="bg-white w-[90%] mx-auto rounded-xl shadow-lg p-4 text-center
              -mt-6 relative z-10 hover:shadow-2xl transition"
            >
              <h3 className="font-semibold text-sm uppercase text-black tracking-wide">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeDesigned;
