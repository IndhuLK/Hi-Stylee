import { Diamond, Truck, Users, Cuboid, Tag } from "lucide-react";

const Services = () => {
  const features = [
    { icon: <Diamond size={40} />, title: "High-Quality Materials" },
    { icon: <Truck size={40} />, title: "On-Time Delivery" },
    { icon: <Users size={40} />, title: "Experienced Team" },
    { icon: <Cuboid size={40} />, title: "3D Visualizations" },
    { icon: <Tag size={40} />, title: "Transparent Pricing" },
  ];

  return (
    <div className="py-14">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        What Makes Us Different
      </h2>

      <div className="bg-[#e9eff3] py-12 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="text-[#0b4161]">{item.icon}</div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
