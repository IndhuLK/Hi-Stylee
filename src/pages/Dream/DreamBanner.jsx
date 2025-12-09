import banner from "../../assets/img26.jpg"; // <-- replace with your image path

const DreamBanner = ({ openPopup }) => {
  return (
    <section className="relative w-full h-[380px] md:h-[600px] flex 
    items-center justify-center text-center overflow-hidden font-family">
      
      {/* Background Image */}
      <img
        src={banner}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay (with fade gradient) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-4xl px-6 mt-40">
        
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl 
        font-bold leading-tight font-family">
          Transform Your House Into a Dream Home
        </h1>

        <p className="text-white text-sm sm:text-base mt-4 
        opacity-90 max-w-xl mx-auto font-family">
          Beautiful, functional, and personalized interiors designed to reflect your lifestyle.
        </p>

        
      </div>
    </section>
  );
};

export default DreamBanner;
