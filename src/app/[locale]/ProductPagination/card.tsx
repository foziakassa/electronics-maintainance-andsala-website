
import React from 'react';

interface ServiceData {
  name: string;
  description: string;
  
}

interface ServicesProps {
  serviceData: ServiceData;
  onClick: () => void;
  className?: string;
}

const Card = ({ serviceData, onClick }: ServicesProps) => {
  return (
    <div
      className="flex flex-col 
       hover:bg-teal-700
        bg-white 
        justify-center gap-20 overflow-hidden 
       shadow-lg rounded-md
       hover:translate-x-1
         hover:shadow-lg transition w-80 h-14"
      onClick={onClick}
    >
      <div className="p-2 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900
        hover:text-white
        ">{serviceData.name}</h3>
      </div>
    </div>
  );
};

export default Card;