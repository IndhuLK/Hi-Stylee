import React from "react";
import img23 from "../../assets/img23.jpg"; 
import img24 from "../../assets/img24.jpg"; 
import { useState } from "react";
import ConsultationForm from "../Home/ConsultationForm";

const data = [
  {
    title: "Home Interiors",
    text: `At iStyle Furniture, we turn your house into a home with personalized interior solutions. 
Our designs blend comfort, functionality, and aesthetics to reflect your unique lifestyle.
From living rooms to wardrobes, we craft spaces that feel warm, elegant, and truly yours.`,
    btn: "Explore Now",
    img: img23
  },
  {
    title: "Commercial Interiors",
    text: `We design professional, practical, and stylish interiors that elevate your business environment. 
Whether it's an office, showroom, or retail space, we focus on brand alignment and functionality.
Our commercial interiors promote productivity, impress clients, and support daily operation.`,
    btn: "Explore Now",
    img: img24
  }
];

const InteriorSection = () => {

    const [openForm, setOpenForm] = useState(false);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 font-family">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
        Designing Homes. Enhancing Workspaces.
      </h2>

      <div className="space-y-16">
        {data.map((item, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-8 whitespace-pre-line mb-6">
                {item.text}
              </p>
              <button className="px-6 py-2 text-sm  rounded-full font-bold cursor-pointer
               text-white bg-[#014366] hover:bg-[#014366] transition-all"
               onClick={() => setOpenForm(true)}
               >
                {item.btn}
              </button>
            </div>

            {/* Image Section */}
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}
    </section>
  );
};

export default InteriorSection;
