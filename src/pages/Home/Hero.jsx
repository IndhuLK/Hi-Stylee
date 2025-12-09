import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgimage from '../../assets/bg.jpg';

const slides = [
  {
    img: bgimage,
    title: "Designing dreams. One space at a time",
    button: "Contact Us",
  },
  {
    img: bgimage,
    title: "Where creativity meets functionality",
    button: "Book Appointment",
  },
  {
    img: bgimage,
    title: "Transforming spaces into experiences",
    button: "Get Free Quote",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[95vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay (Gradient for text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black 
      via-transparent to-transparent"></div>


      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center
       text-white px-5 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg
         transition-all duration-700">
          {slides[current].title}
        </h1>

        <button className="px-8 py-3 rounded-full bg-[#06344f] hover:bg-[#0b5e8a]
         text-white font-medium transition">
          {slides[current].button}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 
        hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30
         hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 flex gap-2 left-1/2 -translate-x-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
