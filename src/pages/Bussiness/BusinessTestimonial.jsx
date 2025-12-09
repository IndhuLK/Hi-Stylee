import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// ---- Replace with your client images ----
import img1 from "../../assets/client1.jpg";
import img2 from "../../assets/client2.jpg";
import img3 from "../../assets/client3.jpg";
import img4 from "../../assets/client4.jpg";

const clients = [
  {
    img: img1,
    name: "Ravi Kumar",
    review:
      `"Hi Style Furniture Did A Fantastic Job On Our Office Interiors. The Layout Is Practical, The Design Is Sleek, And It Truly Reflects Our Brand Image. Our Clients Are Impressed Every Time They Walk In!"`,
  },
  {
    img: img2,
    name: "Deepa Jain",
    review:
      `"We Wanted A Modern, Open Workspace That Supports Collaboration—And They Delivered Exactly That. The Team Was Professional, Responsive, And Finished The Project On Time. Highly Recommended."`,
  },
  {
    img: img4,
    name: "Anand Mehta",
    review:
      `"Our Retail Showroom Was Completely Transformed. The New Layout, Lighting, And Display Units Have Boosted Our Customer Experience. Great Design Sense And Flawless Execution."`,
  },
  {
    img: img3,
    name: "Dr. Sangeetha",
    review:
      `"We Hired Hi Style Furniture For Our Clinic Interiors, And The Results Were Beyond Our Expectations. The Space Now Feels More Welcoming, Clean, And Calming — Just What We Needed."`,
  },
  {
    img: img2,
    name: "Dr. Sangeetha",
    review:
      `"We Hired Hi Style Furniture For Our Clinic Interiors, And The Results Were Beyond Our Expectations. The Space Now Feels More Welcoming, Clean, And Calming — Just What We Needed."`,
  },
];


const BusinessTestimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full bg-[#014366] text-white py-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-down"
      >
        Happy Clients
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clients.map((client, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex flex-col items-center text-center px-4"
                data-aos="zoom-in"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-24 h-24 object-cover rounded-full shadow-lg mb-4"
                />

                <h3 className="font-semibold text-lg mb-2">{client.name}</h3>

                <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
                  {client.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BusinessTestimonial;
