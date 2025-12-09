import { X } from "lucide-react";

const ConsultationForm = ({  close }) => {
  

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <button onClick={close} className="text-gray-700 hover:text-black">
            <X size={20} />
          </button>
          <h2 className="text-lg font-semibold">Talk To A Designer</h2>
          <div className="w-[20px]"></div> {/* to balance spacing */}
        </div>

        {/* Form */}
        <form className="space-y-5 mt-6">
          
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-black outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-black outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-black outline-none"
          />

          {/* Checkbox */}
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4" />
            Send me updates on updates
          </label>

          <input
            type="text"
            placeholder="Property Name"
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:border-black outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#003f63] hover:bg-[#002c45] text-white
             text-sm font-medium py-3 rounded-md transition cursor-pointer"
          >
            Book Consultation
          </button>
        </form>

      </div>
    </div>
  );
};

export default ConsultationForm;
