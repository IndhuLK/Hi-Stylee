import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import im3 from '../../assets/im3.jpg';
import im4 from '../../assets/im4.jpg';
import im5 from '../../assets/im5.jpg';

const testimonials = [
  {
    id: 1,
    image: im3,
    clientTitle: "Client Challenges",
    clientText:
      "We wanted a clean, timeless look with modern finishes — something that feels luxurious, but still livable.",
    resultTitle: "Results",
    resultText:
      "It turned out better than we imagined! Every corner feels elegant yet functional. Our friends thought it was a designer showroom.",
    rating: 4,
  },
  {
    id: 2,
    image: im4,
    clientTitle: "Client Challenges",
    clientText:
      "We needed more storage without compromising the look. Also wanted warm lighting and a premium finish.",
    resultTitle: "Results",
    resultText:
      "The team delivered exactly what we dreamed of. The lighting and finishes elevated the entire space!",
    rating: 5,
  },
  {
    id: 3,
    image: im5,
    clientTitle: "Client Challenges",
    clientText:
      "A modern kitchen with better workflow for cooking and entertaining guests.",
    resultTitle: "Results",
    resultText:
      "Now it's spacious, bright, and super functional. We love spending time here.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  // ✅ Auto-play (every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const slide = testimonials[index];

  return (
    <section className="py-14 md:py-10">
      <h2 className="text-center text-xl md:text-3xl font-semibold text-slate-900">
        Real Results, Stunning Changes
      </h2>

      <div className="max-w-6xl mx-auto mt-10 px-4 md:px-6 lg:px-8 relative">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center z-20"
        >
          <ChevronLeft className="h-5 w-5 text-slate-700 cursor-pointer" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full h-10 w-10 flex items-center justify-center z-20"
        >
          <ChevronRight className="h-5 w-5 text-slate-700 cursor-pointer" />
        </button>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col md:flex-row transition-all duration-500">
          
          {/* LEFT IMAGE */}
          <div className="md:w-1/2">
            <img
              src={slide.image}
              alt="testimonial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h3 className="font-semibold text-slate-900 text-lg">
              {slide.clientTitle}
            </h3>
            <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
              {slide.clientText}
            </p>

            <h3 className="font-semibold text-slate-900 text-lg mt-5">
              {slide.resultTitle}
            </h3>
            <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
              {slide.resultText}
            </p>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= slide.rating ? "text-sky-900 fill-sky-700" : "text-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
