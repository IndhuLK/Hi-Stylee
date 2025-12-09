import React from "react";

import img1 from "../../assets/k1.jpg";
import img2 from "../../assets/k2.jpg";
import img3 from "../../assets/k3.jpg";
import img4 from "../../assets/k4.jpg";
import img5 from "../../assets/k5.jpg";
import img6 from "../../assets/k6.jpg";
import img7 from "../../assets/k7.jpg";
import img8 from "../../assets/k8.jpg";

const KitchenGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-family">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Kitchen Interior
      </h2>

      {/* Custom Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      

  {/* IMAGE 1 (Bigger Width) */}
  <img
    src={img1}
    alt="kitchen 1"
    className="w-full h-[220px] md:h-[250px] object-cover rounded-xl md:col-span-1"
  />

  {/* IMAGE 2 (Medium Width) */}
  <img
    src={img2}
    alt="kitchen 2"
    className="w-full h-[220px] md:h-[250px] object-cover rounded-xl md:col-span-1"
  />

  {/* IMAGE 3 (Smaller Width) */}
  <img
    src={img3}
    alt="kitchen 3 small"
    className="w-full h-[220px] md:h-[250px] object-cover rounded-xl md:col-span-0.5"
  />


        {/* ---------- ROW 2 ---------- */}
        <img
          src={img4}
          alt="kitchen 4 small"
          className="w-full h-[220px] md:h-[250px] object-cover rounded-xl md:col-span-1"
        />

        <img
          src={img5}
          alt="kitchen 5 wide"
          className="w-full h-[220px] md:h-[260px] object-cover rounded-xl md:col-span-2"
        />

        {/* ---------- ROW 3 ---------- */}
        <img
          src={img6}
          alt="kitchen 6"
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl "
        />

        <img
          src={img7}
          alt="kitchen 7"
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl "
        />

        <img
          src={img8}
          alt="kitchen 8"
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl "
        />
      </div>
    </div>
  );
};

export default KitchenGallery;
