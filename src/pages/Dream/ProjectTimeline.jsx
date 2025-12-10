// src/components/ProjectTimeline.jsx
import React from "react";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";
import step7 from "../../assets/step7.png";

const steps = [
  {
    x: 40,
    y: 70,
    title: ["Client Needs"],
    icon: step1,
  },
  {
    x: 193,
    y: 150,
    title: ["Get An Estimate"],
    icon: step2,
  },
  {
    x: 347,
    y: 70,
    title: ["Customization Of", "Design"],
    icon: step3,
  },
  {
    x: 500,
    y: 150,
    title: ["Get An Approval"],
    icon: step4,
  },
  {
    x: 653,
    y: 70,
    title: ["Start Manufacturing"],
    icon: step5,
  },
  {
    x: 807,
    y: 150,
    title: ["Execution On Site"],
    icon: step6,
  },
  {
    x: 960,
    y: 70,
    title: ["On Time", "Project Handover"],
    icon: step7,
  },
];

const ProjectTimeline = () => {
  return (
    <section className="w-full bg-[#024566] py-12 font-family">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl 
        md:text-4xl font-semibold mb-10">
          Project Completion
        </h2>

        <div className="relative w-full  px-10">
          <svg viewBox="-0 0 1000 230" className="w-full h-auto overflow-visible">
            {/* Wavy Dashed Line */}
            <path
              d="
                M 40 70
                Q 116.67 110 193.33 150
                Q 270    110 346.67 70
                Q 423.33 110 500    150
                Q 576.67 110 653.33 70
                Q 730    110 806.67 150
                Q 883.33 110 960    70
              "
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="4 6"
            />

            {/* Circles + Images + Titles */}
            {steps.map((step, index) => (
              <g key={index}>
                {/* Circle background */}
                <circle cx={step.x} cy={step.y} r="30" fill="#E5E5E5" />

                {/* ICON inside circle */}
                <image
                  href={step.icon}
                  x={step.x - 20}
                  y={step.y - 20}
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Title above circle */}
                {step.title.map((line, i) => (
                  <text
                    key={i}
                    x={step.x}
                    y={step.y - 50 + i * 18}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="#ffffff"
                    
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
