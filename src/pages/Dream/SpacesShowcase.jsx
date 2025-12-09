import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---- Replace with your images ----
import img1 from "../../assets/img29.jpg";
import img2 from "../../assets/img30.jpg";
import img3 from "../../assets/img34.jpg";
import img4 from "../../assets/img31.jpg";
import img5 from "../../assets/img32.jpg";
import img6 from "../../assets/img33.jpg";

const spacesData = [
  {
    img: img1,
    title: "LIVING ROOM",
    desc: "Our Living Room Interiors Are Thoughtfully Crafted To Feel Open, Bright, And Effortlessly Welcoming.",
  },
  {
    img: img2,
    title: "BEDROOM INTERIOR",
    desc: "We Design Serene, Comfortable Bedrooms That Promote Rest And Reflect Your Personal Style.",
  },
  {
    img: img3,
    title: "MODULAR KITCHEN",
    desc: "Our Modular Kitchens Are Crafted For Convenience, Style, And Smart Space Utilization.",
  },
  {
    img: img4,
    title: "KIDS ROOM",
    desc: "We Design Joyful Spaces For Children That Balance Playfulness With Practicality.",
  },
  {
    img: img5,
    title: "DINING PARTITIONS",
    desc: "We Design Elegant Dining Partitions That Define Your Space Without Closing It Off.",
  },
  {
    img: img6,
    title: "BATHROOM PARTITIONS",
    desc: "Create Well-Defined, Clutter-Free Spaces With Our Custom-Designed Bathroom Partition Systems.",
  },
];

const SpacesShowcase = () => {
  React.useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center font-family">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Designing Spaces That Reflect You
      </h2>

      {/* Subheading */}
      <p className="text-gray-500 max-w-3xl mx-auto leading-6 mb-12">
        Our Team Designs With Purpose And Builds With Passion, Delivering Spaces
        That Feel As Good As They Look.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {spacesData.map((item, index) => (
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
              className="w-full h-52 object-cover rounded-xl shadow-md"
            />

            {/* Floating Content Box */}
            <div
              className="bg-white w-[90%] h-[40%] mx-auto rounded-xl shadow-lg p-4 text-center
              -mt-6 relative z-10 hover:shadow-2xl transition"
            >
              <h3 className="font-semibold text-sm text-[#014366] tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpacesShowcase;
