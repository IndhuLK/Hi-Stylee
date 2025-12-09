import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#E6EDF2] py-10 font-family">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 
        md:divide-x divide-gray-400 text-center md:text-left">

          {/* === Call === */}
          <div className="py-6 px-6 space-y-2 text-center">
            <h2 className="text-xl font-semibold">Call</h2>
            <p className="text-sm">Project Enquiries</p>
            <p className="text-sm font-medium">+91 987654321</p>
            <p className="text-sm font-medium">+91 987654321</p>
          </div>

          {/* === Visit === */}
          <div className="py-6 px-6 space-y-2 text-center">
            <h2 className="text-xl font-semibold">Visit</h2>
            <p className="text-sm">
              123, Valluvar Street,<br />
              Thanjore Main Road,<br />
              Trichy
            </p>
          </div>

          {/* === Message === */}
          <div className="py-6 px-6 space-y-2 text-center">
            <h2 className="text-xl font-semibold">Message</h2>
            <p className="text-sm">abc@gmail.com</p>
            <p className="text-sm">abc@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
