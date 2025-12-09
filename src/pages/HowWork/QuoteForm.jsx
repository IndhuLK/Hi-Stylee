import React from "react";
import living from "../../assets/img17.jpg"; // your image

const QuoteForm = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg grid
       grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <img 
          src={living}
          alt="Interior"
          className="w-full h-full object-cover"
        />

        {/* RIGHT FORM SECTION */}
        <div className="bg-[#003b53] text-white p-10 flex flex-col justify-center">
          <h2 className="text-center text-lg font-semibold mb-2 font-family">
            Beautiful Interiors Within Your Budget
          </h2>
          <p className="text-center text-sm mb-6 font-family">
            No matter your budget, we create spaces you'll love to live in.
          </p>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg border  text-black
              outline-none focus:border-[#014366] bg-white"
            />

            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              placeholder="Mobile Number"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              className="w-full p-3 rounded-lg border text-black outline-none 
                       focus:border-[#014366] bg-white"
            />

            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-3 rounded-lg border  text-black 
              outline-none focus:border-[#014366] bg-white"
            />

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm cursor-pointer font-family">
              <input type="checkbox" className="w-4 h-4 accent-green-600 cursor-pointer" />
              <span>Send me updates on WhatsApp</span>
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#a09090] text-white p-3 rounded-lg font-semibold
               hover:bg-[#8a7a7a] transition duration-300 cursor-pointer font-family"
            >
              Get Free Quotes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
