import React, { useState } from "react";

import k1 from "../../assets/kids1.jpg";  // ⬅️ change paths/names to your kids room images
import k2 from "../../assets/kids2.jpg";
import k3 from "../../assets/kids3.jpg";
import k4 from "../../assets/kids4.jpg";

import f1 from "../../assets/fa1.jpg";
import f2 from "../../assets/fa2.jpg";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";

import p1 from "../../assets/pack1.jpg";
import p2 from "../../assets/pack2.jpg";

import ConsultationForm from "../Home/ConsultationForm";

const PortfolioSections = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-family">
      {/* ---------------- Kids Room ---------------- */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Kids Room
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <img
          src={k1}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover md:col-span-2"
          alt="Kids room 1"
        />
        <img
          src={k2}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover"
          alt="Kids room 2"
        />
        <img
          src={k3}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover"
          alt="Kids room 3"
        />
        <img
          src={k4}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover md:col-span-2"
          alt="Kids room 1"
        />
      </div>

      {/* ---------------- Furniture Accessories ---------------- */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Furniture Accessories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img
          src={f1}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover"
          alt="Furniture accessories 1"
        />
        <img
          src={f2}
          className="rounded-xl w-full h-[220px] md:h-[260px] object-cover"
          alt="Furniture accessories 2"
        />
      </div>

      {/* ---------------- Commercial Interior ---------------- */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Commercial Interior
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
        <img
          src={c1}
          className="rounded-xl w-full h-[200px] md:h-[220px] object-cover"
          alt="Commercial interior 1"
        />
        <img
          src={c2}
          className="rounded-xl w-full h-[200px] md:h-[220px] object-cover"
          alt="Commercial interior 2"
        />
        <img
          src={c3}
          className="rounded-xl w-full h-[200px] md:h-[220px] object-cover"
          alt="Commercial interior 3"
        />
      </div>

      {/* ---------------- Packages ---------------- */}
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
        Find the Perfect Fit for Your Space & Style
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Package 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={p1}
            className="w-full h-[220px] md:h-[260px] object-cover"
            alt="Standard interior package"
          />

          <div className="p-5 space-y-3">
            <h3 className="font-semibold text-lg">Standard Interior Package</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Modular kitchen, wardrobes, TV unit, basic lighting & painting.
            </p>

            <button
              className="px-5 py-2 border rounded-full border-[#014366] cursor-pointer
              text-white bg-[#014366] hover:bg-[#014366] hover:text-white transition"
              onClick={() => setOpenForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={p2}
            className="w-full h-[220px] md:h-[260px] object-cover"
            alt="Premium interior package"
          />

          <div className="p-5 space-y-3">
            <h3 className="font-semibold text-lg">Premium Interior Package</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Designer modular kitchen, premium wardrobes, false ceiling, décor
              accents, soft furnishings.
            </p>

            <button
              className="px-5 py-2 border rounded-full border-[#014366] cursor-pointer
              text-white bg-[#014366] hover:bg-[#014366] hover:text-white transition"
              onClick={() => setOpenForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Popup form */}
      {openForm && <ConsultationForm close={() => setOpenForm(false)} />}
    </div>
  );
};

export default PortfolioSections;
