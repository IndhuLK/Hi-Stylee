import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---- Replace with your images ----
import workstation from "../../assets/workstation.jpg";
import reception from "../../assets/reception.jpg";
import conference from "../../assets/conference.jpg";
import training from "../../assets/training.jpg";
import collaboration from "../../assets/collaboration.jpg";
import breakout from "../../assets/breakout.jpg";

const businessData = [
  { img: workstation, title: "Workstations" },
  { img: reception, title: "Reception Area" },
  { img: conference, title: "Conference Rooms" },
  { img: training, title: "Training Rooms" },
  { img: collaboration, title: "Collaborative Spaces" },
  { img: breakout, title: "Breakout Areas" },
];

const BusinessDesign = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center font-family">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Commercial Spaces With Purpose
      </h2>

      {/* Subheading */}
      <p className="text-gray-500 max-w-3xl mx-auto leading-6 mb-12">
        From Offices To Showrooms, We Design Work Environments That Inspire And Perform.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {businessData.map((item, index) => (
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
              className="w-full h-82 object-cover rounded-xl shadow-md"
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

export default BusinessDesign;
