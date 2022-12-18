import React from "react";

const CardMeal = ({ foto }) => {
  return (
    <div className="relative basis-1/6 cursor-pointer hover:shadow-2xl">
      <div className="w-80 h-52">
        <img
          src={foto}
          alt=""
          srcset=""
          className="w-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-2xl -mt-16 z-50 relative shadow-lg">
        <div>
          <h1 className="font-semibold">Black Bean & Pepper Quesadillas</h1>
          <p className="text-xs text-gray-500">
            with Salsa Fresca & Creamy Guacamole
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">45 Min</p>
          <div className="flex items-center gap-2">
            <span className="text-xs">Veggie</span>
            <span className="text-xs">Spicy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
