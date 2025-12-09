import React from "react";
import img1 from "../../assets/Ri1.jpg";
import img2 from "../../assets/Ri2.jpg";
import img3 from "../../assets/Ri3.jpg";
import img4 from "../../assets/Ri4.jpg";
import img5 from "../../assets/Ri5.jpg";
import img6 from "../../assets/Ri6.jpg";
import img7 from "../../assets/Ri5.jpg";

const ResidentialGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-family">

      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Residential Interior
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* LEFT - Single Tall Image */}
        <div className="md:row-span-3">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Bottom wide image */}
        <div className="md:col-span-2">
          <img
            src={img2}
            alt=""
            className="w-full h-[220px] object-cover rounded-xl"
          />
        </div>

        {/* Right top images */}
        <img
          src={img6}
          alt=""
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl"
        />

        <img
          src={img3}
          alt=""
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl"
        />

        {/* Middle row */}
        <img
          src={img4}
          alt=""
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl"
        />

        <img
          src={img5}
          alt=""
          className="w-full h-[200px] md:h-[220px] object-cover rounded-xl"
        />

        

      </div>
    </div>
  );
};

export default ResidentialGallery;
