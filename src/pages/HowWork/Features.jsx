import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Wrench, Receipt, ShieldCheck, Palette } from "lucide-react";

const features = [
  {
    icon: <Wrench size={22} />,
    title: "End-to-End Service",
    desc: "We handle everything — from design to delivery — so you don’t have to.",
  },
  {
    icon: <Receipt size={22} />,
    title: "Transparent Pricing",
    desc: "No hidden costs. Clear quotes with complete breakdowns upfront.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality Assurance",
    desc: "We use premium materials and follow strict quality checks at every stage.",
  },
  {
    icon: <Palette size={22} />,
    title: "Personalized Designs",
    desc: "Every space is tailored to match your taste, needs, and lifestyle.",
  },
];

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative border border-[#014366] rounded-lg p-6 pt-12 text-center group hover:shadow-md transition-all duration-300"
          >
            {/* Floating Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#003b53] text-white flex items-center justify-center rounded-full shadow-md">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2 font-family">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-family">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
