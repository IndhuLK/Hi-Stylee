import banner from "../../assets/img35.jpg"; // <-- replace with your image path

const BussinessBanner = ({ openPopup }) => {
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
          Designing Spaces That Mean Business
        </h1>

        <p className="text-white text-sm sm:text-base mt-4 
        opacity-90 max-w-xl mx-auto font-family">
          We create modern, functional commercial interiors that reflect your brand and drive performance.
        </p>

        
      </div>
    </section>
  );
};

export default BussinessBanner;
