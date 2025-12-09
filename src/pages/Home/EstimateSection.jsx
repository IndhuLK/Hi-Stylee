import homeIcon from "../../assets/icon1.png";
import kitchenIcon from "../../assets/icon2.png";
import wardrobeIcon from "../../assets/icon3.png";

const EstimateSection = () => {
  const items = [
    {
      icon: homeIcon,
      title: "Full Home Interiors",
      desc: "Get a quick quote for complete home interior solutions.",
    },
    {
      icon: kitchenIcon,
      title: "Kitchen Interiors",
      desc: "Get a quick estimate for your dream modular kitchen.",
    },
    {
      icon: wardrobeIcon,
      title: "Wardrobe Interiors",
      desc: "Smart, stylish storage solutions built just for you.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-10 bg-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Plan Your Budget with Ease
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Curious about how much your dream interiors will cost? Use our quick
          estimate tool to get a personalized quote based on your needs and
          space.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl p-6  hover:translate-y-2
            transition duration-300 text-left shadow-xl"
          >
            {/* Image Container */}
            <div className="flex justify-center items-center w-20 h-20
            rounded-full border border-blue-900 border-2 mb-5">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>

            <h3 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h3>
            <p className="text-gray-800 text-sm mb-5">{item.desc}</p>

            <button className="bg-[#003f63] hover:bg-[#002c45] text-white 
            text-sm px-5 py-2 rounded-full transition cursor-pointer">
              Get Free Estimate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EstimateSection;
