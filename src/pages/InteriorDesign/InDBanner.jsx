import banner from "../../assets/img22.jpg"; 
import { useState } from "react";
import ConsultationForm from "../Home/ConsultationForm";


const InDBanner = ({ openPopup }) => {
   const [openForm, setOpenForm] = useState(false);
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
          Complete Interiors. Customized for You.
        </h1>

        <p className="text-white text-sm sm:text-base mt-4 opacity-90 max-w-xl mx-auto">
          Smart, stylish, and practical interiors — tailored to your lifestyle.
        </p>

        <button
          
          className="mt-6 bg-[#005a82] hover:bg-[#003f63] text-white px-6 
          py-3 rounded-full shadow-lg transition font-bold cursor-pointer uppercase"
              onClick={() => setOpenForm(true)} >
          GET Quote
        </button>
      </div>
      {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}

    </section>
  );
};

export default InDBanner;
