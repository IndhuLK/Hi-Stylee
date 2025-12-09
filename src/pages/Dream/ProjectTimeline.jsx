import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace icons with your actual icons
import icon1 from "../../assets/step1.png";
import icon2 from "../../assets/step2.png";
import icon3 from "../../assets/step3.png";
import icon4 from "../../assets/step4.png";
import icon5 from "../../assets/step5.png";
import icon6 from "../../assets/step6.png";

const steps = [
  { title: "Client Needs", label: "Get An Estimate", icon: icon1 },
  { title: "Customization Of Design", label: "Get An Approval", icon: icon2 },
  { title: "Start Manufacturing", label: "Execution On Site", icon: icon3 },
  { title: "On Time", label: "Project Handover", icon: icon4 },
];

const ProjectTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full bg-[#014366] text-white py-16 font-family">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Project Completion
      </h2>

      {/* Scrollable Container on Mobile */}
      <div className="overflow-x-auto">
        <div
          className="relative flex justify-between items-center gap-10 px-10 min-w-[900px] mx-auto"
          data-aos="fade-up"
        >
          {/* Curved Dashed Line */}
          <svg
            className="absolute top-14 left-0 w-full h-20 pointer-events-none"
            fill="none"
          >
            <path
              d="M0,50 C100,0 200,100 300,50 C400,0 500,100 600,50 C700,0 800,100 900,50"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[160px]"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <p className="text-sm font-semibold mb-2 text-center">{step.title}</p>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                <img src={step.icon} alt={step.title} className="w-10 h-10" />
              </div>

              <p className="text-sm text-gray-200 mt-2 text-center">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
