import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-family">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let’s Create Together
          </h2>

          <p className="text-gray-600 leading-7 mb-4 max-w-lg">
            At Hi Style Furniture, we turn your interior dreams into reality —
            delivering expert design and execution for homes, offices,
            commercial spaces, and renovations, all with high-quality materials
            tailored to your budget.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-3 mb-4">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#003b53] flex items-center 
              justify-center text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Our Location</p>
                <p className="text-gray-600 text-sm">
                  123 Interior Street, Tamilnadu India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#003b53] flex items-center 
              justify-center text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p className="text-gray-600 text-sm">+91 9876543210</p>
                <p className="text-gray-600 text-sm">+91 8765432109</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-[#003b53] flex items-center
               justify-center text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Mail</p>
                <p className="text-gray-600 text-sm">info@histyle.com</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          {/* MAP */}
          <iframe
            title="Google Map"
            className="rounded-lg shadow-md w-full h-64 md:h-50"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.903233850735!2d80.20724387502798!3d12.801952919285826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259a0cfaaae4f%3A0xa0aafccb65c7b28a!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701500000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#003b53] text-white p-8 md:p-10 rounded-xl shadow-lg">
          <form className="space-y-5 md:mt-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border text-black outline-none focus:border-[#014366] bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border text-black outline-none focus:border-[#014366] bg-white"
            />

            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder="Your Mobile Number"
              className="w-full p-3 rounded-lg border text-black outline-none focus:border-[#014366] bg-white"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg border text-black outline-none focus:border-[#014366] bg-white"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#a09090] hover:bg-[#8a7a7a] transition 
              duration-300 p-3 rounded-lg font-semibold cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
