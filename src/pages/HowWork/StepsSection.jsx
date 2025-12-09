import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";

const steps = [
  {
    title: "Share Your Vision",
    desc: "Tell us about your space, style preferences, and project goals—via a quick form or a chat. Upload photos, moodboards, and inspirations to help us understand exactly what you want.",
    img: img11,
  },
  {
    title: "Consult & Customize",
    desc: "Connect with your personal designer for a free consultation. Together, we’ll finalize the layout, materials, finishes, and 3D visualizations so you know exactly what the final look will be.",
    img: img12,
  },
  {
    title: "Receive Design Options",
    desc: "Get tailored design proposals (2–3 concepts) showcasing smart layouts, color palettes, and furniture ideas—presented in immersive 3D. Pick what resonates best with your taste.",
    img: img13,
  },
  {
    title: "Finalize & Place Order",
    desc: "Once you approve the design, lock in your project with a transparent quote and payment. This secures materials and plans, and initiates procurement and site prep.",
    img: img14,
  },
  {
    title: "Execution & Installation",
    desc: "Our skilled team brings the design to life—through modular installation, cabinetry, flooring, lighting, and décor setup. Track progress easily via your dashboard or designer updates.",
    img: img15,
  },
  {
    title: "Launch & Enjoy",
    desc: "We handle final touches, quality checks, and clean-up. Walk through your stunning new space and start making memories—designed, executed, and delivered by Hi Style Furniture.",
    img: img16,
  },
];

const StepsSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      {steps.map((item, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-1/2 h-74 object-cover rounded-xl shadow-lg border border-2
             border-[#014366]"
          />

          {/* Text */}
          <div className="md:w-1/2">
            <h3 className="md:text-2xl text-md font-bold mb-3 font-family">{item.title}</h3>
            <p className="text-gray-600 leading-10 md:text-lg sm:text-sm font-family">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsSection;
