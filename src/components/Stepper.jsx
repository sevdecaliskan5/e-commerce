import React from "react";

const Stepper = ({ step }) => {
  const steps = ["Address", "Payment", "Confirm"];

  return (
    <div className="flex justify-between items-center py-6">
      {steps.map((label, index) => (
        <div key={label} className="flex-1 text-center relative">
          <div
            className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white 
              ${step > index ? "bg-orange-500" : "bg-gray-300"}`}
          >
            {index + 1}
          </div>
          <p className="text-sm mt-1">{label}</p>
          {index < steps.length - 1 && (
            <div className="absolute top-4 left-1/2 w-full h-1 -translate-x-1/2 bg-gray-200">
              <div
                className={`h-1 transition-all duration-300 
                  ${step > index + 1 ? "bg-orange-500 w-full" : "bg-gray-300 w-0"}`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
