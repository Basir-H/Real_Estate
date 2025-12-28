import React from "react";

const Card = ({ image, topContent, children,className,imageStyle, onClick  }) => {
  return (
    <div className={` bg-white rounded-lg overflow-hidden shadow-[0px_4px_17.4px_0px_rgba(0,0,0,0.08)] cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${className}`} onClick={onClick}>
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt="card"
          className={`w-full h-[220px] object-cover ${imageStyle}`}
        />

        {/* Absolute Top Content (props) */}
        {topContent && (
          <div className="flex justify-between absolute top-3 left-3 right-3 ">
            {topContent}
          </div>
        )}
      </div>

      {/* Bottom Content (2 div or more) */}
      <div className="p-4 flex flex-col gap-3 ">
        {children}
      </div>

    </div>
  );
};

export default Card;
