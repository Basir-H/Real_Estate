import React from "react";

const StepLine = ({ steps = 3, activeStep = 1, className }) => {
  return (
    <div className={`${className} relative w-full flex items-center`}>
      {/* Main Line */}
      <div className="w-full h-[2px] bg-[rgba(53,180,246,1)]" />

      {/* Steps */}
      <div className="absolute inset-0 flex items-center justify-between">
        
        {/* Start Ring */}

        {/* <Ring /> */}

        {/* Middle Steps */}
        {[...Array(steps)].map((_, index) => {
          const isActive = index + 1 === activeStep;

          return (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              {/* Ring */}
              <span
                className={`absolute w-[1rem] h-[1rem] rounded-full border-2 ml-[0.2rem] 
                border-[rgba(53,180,246,1)]
                transition-all duration-300
                ${isActive ? "scale-110 opacity-100" : "opacity-70"}`}
              />

              {/* Dot */}
              <span
                className={`w-[0.3rem] h-[0.3rem] rounded-full ml-[0.2rem]
                bg-[rgba(53,180,246,1)]
                transition-all duration-300
                ${isActive ? "scale-125 animate-pulse" : ""}`}
              />
            </div>
          );
        })}

        {/* End Ring */}
        {/* <Ring  /> */}
      </div>
    </div>
  );
};

const Ring = () => (
  <span className="w-[0] h-[] border-2 border-[rgba(47,115,242,1)] rounded-full bg-white " />
);

export default StepLine;
