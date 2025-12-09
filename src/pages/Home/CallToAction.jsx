import img10 from "../../assets/im10.jpg";
import ConsultationForm from "./ConsultationForm";
import { useState } from "react";

const CallToAction = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="py-10">
    <section className="relative w-full h-[380px] md:h-[450px] flex 
    items-center justify-center text-center overflow-hidden ">

      {/* Background Image */}
      <img
        src={img10} // <-- replace with your image path
        className="absolute inset-0 w-full h-full object-cover"
        alt="Interior Design Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-4xl px-6">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          Visit Hi Style Furniture to discover inspiring interiors and 
          personalized design solutions — all under one roof.
        </h2>

        <button className="mt-6 bg-[#0077cc] hover:bg-[#005fa6] 
        text-white font-medium px-6 py-3 rounded-lg transition"
         onClick={() => setOpenForm(true)}
         >
          Contact Us
        </button>
      </div>
    </section>
    {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}
    </div>
  );
};

export default CallToAction;
