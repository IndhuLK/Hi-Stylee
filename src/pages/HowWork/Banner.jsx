import banner from "../../assets/workbanner.jpg"; // <-- replace with your image path

const Banner = ({ openPopup }) => {
  return (
    <section className="relative w-full h-[380px] md:h-[600px] flex 
    items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src={banner}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay (with fade gradient) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-3xl px-6 mt-40">
        
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Plan. Personalize. Perfect.
        </h1>

        <p className="text-white text-sm sm:text-base mt-4 opacity-90 max-w-xl mx-auto">
          Create stunning interiors without the hassle. With our simple online process,
          designing your home becomes a joyful experience.
        </p>

        <button
          onClick={openPopup}
          className="mt-6 bg-[#005a82] hover:bg-[#003f63] text-white px-6 
          py-3 rounded-full shadow-lg transition font-bold cursor-pointer"
        >
          GET STARTED NOW
        </button>
      </div>
    </section>
  );
};

export default Banner;
