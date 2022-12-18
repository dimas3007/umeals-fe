import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <input
      type="text"
      className="w-full text-slate-800 text-sm px-4 py-3 bg-slate-200 placeholder:text-slate-400 focus:bg-slate-100 border border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-200"
      placeholder={label}
      {...props}
    />
  );
};

export default Input;
