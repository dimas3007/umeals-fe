import React from "react";

const Inputs = ({ label, ...props }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={label}
        {...props}
        className="text-xs bg-slate-800 px-4 py-3 rounded-xl text-sm placeholder:text-gray-500 shadow-lg w-full focus
        focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
      />
    </div>
  );
};

export default Inputs;
