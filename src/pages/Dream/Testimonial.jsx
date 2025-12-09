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
    name: "Anand",
    review:
      `"We Were Amazed By How Smooth The Entire Process Was. From Planning To Execution, The Team Was Professional, Responsive, And Delivered Exactly What We Envisioned."`,
  },
  {
    img: img2,
    name: "Deepika R.",
    review:
      `"Hi Style Furniture made our dream home come true. Every room reflects our taste and needs perfectly; the design, materials, and finish are all top-class."`,
  },
  {
    img: img3,
    name: "Meena S.",
    review:
      `"Our Living Room And Kitchen Have Completely Transformed. The Attention To Detail And Quality Of Work Truly Exceeded Our Expectations."`,
  },
  {
    img: img4,
    name: "Suresh K.",
    review:
      `"They Listened Carefully To Our Ideas And Brought Them To Life Beautifully. The Final Design Is Not Only Stylish But Also Practical For Everyday Use."`,
  },
  {
    img: img2,
    name: "Suresh K.",
    review:
      `"They Listened Carefully To Our Ideas And Brought Them To Life Beautifully. The Final Design Is Not Only Stylish But Also Practical For Everyday Use."`,
  },
];

const Testimonial = () => {
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
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg mb-4"
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

export default Testimonial;
