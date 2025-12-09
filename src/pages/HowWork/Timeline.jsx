import { CheckCircle } from "lucide-react";

const steps = [
  { id: 1, text: "Share Your Vision" },
  { id: 2, text: "Consult & Customize" },
  { id: 3, text: "Receive Design Options" },
  { id: 4, text: "Finalize & Place Order" },
  { id: 5, text: "Execution & Installation" },
  { id: 6, text: "Launch & Enjoy" },
];

export default function Timeline() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Bring Your Interiors to Life — One Step at a Time
      </h2>

      {/* Timeline container */}
      <div className="relative w-full max-w-5xl py-10">
        {/* Middle Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300" />

        {/* Steps */}
        <div className="grid grid-cols-6 text-center relative">
          {steps.map((step, index) => {
            const isTop = index % 2 === 0; // 1,3,5 (odd ids) top

            return (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  isTop ? "-translate-y-8" : "translate-y-8"
                }`}
              >
                {isTop ? (
                  <>
                    {/* Number + Text on TOP (row) */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center
                       bg-[#00344D] text-white rounded-full text-sm font-semibold">
                        {step.id}
                      </div>
                      <p className="text-sm text-left max-w-[140px]">
                        {step.text}
                      </p>
                    </div>

                    {/* Connector line down to center */}
                    <div className="w-[1px] h-6 bg-gray-400" />
                  </>
                ) : (
                  <>
                    {/* Connector line up to center */}
                    <div className="w-[1px] h-6 bg-gray-400" />

                    {/* Number + Text on BOTTOM (row) */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-8 h-8 flex items-center justify-center bg-[#00344D]
                       text-white rounded-full text-sm font-semibold">
                        {step.id}
                      </div>
                      <p className="text-sm text-left max-w-[140px]">
                        {step.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
