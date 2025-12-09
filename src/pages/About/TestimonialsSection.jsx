import bgImg from "../../assets/img21.jpg";

const testimonials = [
  {
    text: "Hi Style Furniture made our dream kitchen a reality! From 3D design to final installation, everything was smooth and on time. Highly recommended.",
    name: "Anitha R",
  },
  {
    text: "Professional, budget-friendly, and creative! Our 2BHK was transformed beautifully with excellent materials and finish. Thank you for your dedication.",
    name: "Meena & Rajan",
  },
  {
    text: "I wanted a minimal yet modern wardrobe design and they absolutely nailed it. The team understood my style and executed it perfectly.",
    name: "Suresh K",
  },
  {
    text: "The 3D design presentation gave me so much clarity before starting the project. I loved the transparency and quality of service throughout.",
    name: "Swathi N",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-10 font-family">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 px-4">
        Inspired Designs, Happy Lives.
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto leading-6 md:leading-7 mb-10 px-5 text-sm md:text-base">
        At Hi Style Furniture, our biggest reward is the happiness of our
        clients. Every design we create is tailored to their lifestyle, and
        every review we receive reflects the dedication we put into our work.
        Here’s what some of our clients have to say about their experience with
        us.
      </p>

      {/* Image with Overlay Content */}
      <div className="relative w-full flex justify-center">
        
        {/* Background Image */}
        <img
          src={bgImg}
          alt="Testimonials Background"
          className="w-full h-[750px] md:h-[500px] object-cover rounded-xl"
        />

        {/* Glass Cards Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/40 border border-white/40 
              rounded-xl p-5 text-center shadow-lg"
              >
                <p className="text-gray-900 leading-relaxed text-sm md:text-base mb-3">
                  {item.text}
                </p>
                <p className="font-semibold text-gray-900">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
