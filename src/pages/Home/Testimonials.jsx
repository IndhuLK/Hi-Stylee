import img1 from "../../assets/img9.jpg";
import img2 from "../../assets/im2.jpg";
import img3 from "../../assets/im3.jpg";

const Testimonials = () => {
  const reviews = [
    {
      img: img1,
      name: "Aarthi R.",
      text: `"The entire team did a fantastic job on our modular kitchen. The finish is beautiful and functional — everything was completed on time."`,
    },
    {
      img: img2,
      name: "Sathish & Priya",
      text: `"From design consultation to final delivery, the process was smooth and professional. Our living room now looks like something out of a magazine. Highly recommended!"`,
    },
    {
      img: img3,
      name: "Sujatha M.",
      text: `"We got our bedroom and wardrobes done, and the quality of materials and attention to detail were top-notch!"`,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-left mb-10">
        Real Stories. Real Transformations.
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image Container */}
<div className="relative">
  {/* Image */}
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-56 object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

  {/* Name Inside Image */}
  <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold text-lg">
    — {item.name}
  </h3>
</div>

            {/* Content */}
            <div className="p-5 text-center">
              
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
