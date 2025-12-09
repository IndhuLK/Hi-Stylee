import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import im6 from '../../assets/im6.jpg';
import im7 from '../../assets/im7.jpg';
import im8 from '../../assets/im8.jpg';
import ConsultationForm from "./ConsultationForm";

const slides = [
  { id: 1, title: "Modern Kitchen", image: im6 },
  { id: 2, title: "Elegant Entrance", image: im7 },
  { id: 3, title: "Luxury Living Room", image: im6 },
  { id: 4, title: "Spacious Bedroom", image: im8 },
  { id: 5, title: "Minimal Study", image: im6 },
  { id: 6, title: "Classic Dining", image: im7 },
];

const InteriorIdeasSlider = () => {
  const [openForm, setOpenForm] = useState(false);

  // 👇 mobile = 1 per page, desktop = 3 per page
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);   // mobile
      } else {
        setItemsPerPage(3);   // md and above
      }
    };

    updateItemsPerPage(); // first load
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // group slides based on itemsPerPage
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < slides.length; i += itemsPerPage) {
      result.push(slides.slice(i, i + itemsPerPage));
    }
    return result;
  }, [itemsPerPage]);

  const totalPages = pages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading + description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Interior Ideas to Transform Every Space
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Discover interior styles that reflect your taste and elevate your
            lifestyle. Whether you're starting fresh or refreshing a space, find
            inspiration tailored just for you.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-8 relative">
          {/* Left arrow - desktop */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 h-10
             w-10 rounded-full border border-slate-200 bg-white shadow-sm items-center
              justify-center hover:bg-slate-50 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow - desktop */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 
            rounded-full border border-slate-200 bg-white shadow-sm items-center 
            justify-center hover:bg-slate-50 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile arrows (bottom) */}
          <div className="flex md:hidden justify-between mb-6 px-6 relative">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full border border-slate-200 bg-white 
              shadow-sm flex items-center justify-center absolute -left-2 top-1/2 -translate-y-1/2"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full border border-slate-200 bg-white shadow-sm
               flex items-center justify-center absolute left-10 top-1/2 -translate-y-1/2"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Slider track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pages.map((group, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {group.map((slide) => (
                      <div
                        key={slide.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-8 flex justify-center">
            <button
              className="inline-flex items-center justify-center px-6 py-3 
            rounded-full bg-teal-700 text-white text-sm md:text-base font-medium
             hover:bg-teal-800 transition"
              onClick={() => setOpenForm(true)}
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}
    </section>
  );
};

export default InteriorIdeasSlider;
