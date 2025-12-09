import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const faqs = [
    {
      question: "How do I get started with Hi Style Furniture for my home interiors?",
      answer:
        "Simply contact us and our design experts will guide you through consultation, planning, budgeting, and execution.",
    },
    {
      question: "Do you offer both design and execution services?",
      answer:
        "Yes, we provide end-to-end interior services including design, material selection, fabrication, and installation.",
    },
    {
      question: "How long does a full home interior project usually take?",
      answer:
        "Typically between 30–60 days depending on the project scope and material customization.",
    },
    {
      question: "Can I get just one room designed, like the kitchen or wardrobe?",
      answer:
        "Absolutely! You can choose to design a single room or the entire home based on your requirements.",
    },
    {
      question: "Will I be able to see the design before the work starts?",
      answer:
        "Yes, we provide detailed 3D design previews before execution begins to ensure you are fully satisfied.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      
      {/* Title */}
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
     <div className="max-w-3xl mx-auto">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="py-4 cursor-pointer border-b border-gray-200"
      onClick={() => toggleFAQ(index)}
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-800 text-sm sm:text-base font-medium">
          {faq.question}
        </p>
        {activeIndex === index ? (
          <ChevronUp size={20} className="text-gray-600" />
        ) : (
          <ChevronDown size={20} className="text-gray-600" />
        )}
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>


      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-[#003f63] hover:bg-[#002c45] text-white 
        text-sm px-6 py-3 rounded-full transition cursor-pointer"
        onClick={() => setOpenForm(true)} >
          Send Message
        </button>
      </div>
      {/* Popup form */}
      {openForm && (
        <ConsultationForm close={() => setOpenForm(false)} />
      )}
    </section>
  );
};

export default FAQ;
