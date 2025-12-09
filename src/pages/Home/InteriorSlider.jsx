// src/components/InteriorSlider.jsx
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import im3 from '../../assets/im3.jpg';
import im4 from '../../assets/im4.jpg';

const slides = [
  {
    id: 1,
    title: "Foyer",
    description:
      "Make a stunning first impression with thoughtfully designed entryways.",
    image: im3,
  },
  {
    id: 2,
    title: "Modular Kitchens",
    description:
      "Built smart, built to last — for stress-free cooking and storage.",
    image: im4,
  },
  {
    id: 3,
    title: "Lighting Design",
    description:
      "Mood-setting lighting that brings every room to life.",
    image: im3,
  },
  // more slides add pannalaam
];

const InteriorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // first visible slide
  const [slidesPerView, setSlidesPerView] = useState(3);

  // responsive: mobile -> 1, desktop -> 3
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = slides.length;

  // one-one move + loop
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + totalSlides) % totalSlides
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % totalSlides
    );
  };

  // dots click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // get visible slides (looping)
  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      const slide = slides[(currentIndex + i) % totalSlides];
      visible.push(slide);
    }
    return visible;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold text-slate-900">
            Everything Interiors, Only at Hi Style Furniture
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-600">
            At Hi Style Furniture, we offer a full spectrum of interior solutions — 
            from full-home design and modular installations to stylish renovations 
            and space makeovers. Whether you&apos;re designing your dream home or 
            upgrading your office, our custom furniture, expert design services, 
            and seamless execution ensure a hassle-free experience from concept to completion.
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="mt-10 md:mt-12 relative">
          {/* Left / Right arrows */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-slate-200 bg-white shadow-sm items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-slate-200 bg-white shadow-sm items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div className="flex">
              {visibleSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="shrink-0 px-2 md:px-3 transition-all duration-300"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.10)]/5 border border-slate-100 overflow-hidden flex flex-col h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center items-center flex-1 px-5 pb-5 pt-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-center text-slate-900">
                          {slide.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-center text-slate-600">
                          {slide.description}
                        </p>
                      </div>

                      {/* small circular arrow button */}
                      <button className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 transition">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots – one per slide */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-5 bg-sky-500"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSlider;
