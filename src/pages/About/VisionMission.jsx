import React from "react";
import visionIcon from "../../assets/ic1.png"; // replace with your icon
import missionIcon from "../../assets/ic2.png"; // replace with your icon

const VisionMission = () => {
  return (
    <div className=" py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 
      rounded-lg overflow-hidden bg-[#ebf0f3] px-10 font-family">
        
        {/* OUR VISION */}
        <div className="p-10 text-center space-y-5 border-b md:border-b-0 md:border-r
         border-[#badcf0] ">
          <img 
            src={visionIcon} 
            alt="vision"
            className="w-40 mx-auto"
          />
          <h3 className="font-bold text-xl">Our Vision</h3>

          <p className="text-gray-700 md:leading-10  leading-7 text-justify md:text-lg">
            To be a trusted name in interior design, known for creating thoughtfully 
            designed, functional, and aesthetically pleasing spaces that reflect each 
            client’s unique lifestyle — while making great design accessible and affordable 
            for all.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="p-10 text-center space-y-5">
          <img 
            src={missionIcon} 
            alt="mission"
            className="w-30 mx-auto"
          />
          <h3 className="font-bold text-xl">Our Mission</h3>

          <p className="text-gray-700 md:leading-10 leading-7 text-justify  md:text-lg">
            At Hi Style Furniture, our mission is to transform everyday spaces into inspiring 
            environments. We aim to deliver personalized interior solutions with high-quality 
            materials, innovative design, and seamless project execution — always focused on 
            customer satisfaction and value for money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
