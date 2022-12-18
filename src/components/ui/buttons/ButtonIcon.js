import React from "react";

const ButtonIcon = ({ text, icon, theme = "default", ...props }) => {
  return (
    <button
      className={`py-2 pl-2 pr-5 flex items-center gap-3 rounded-full drop-shadow-lg transition ease-in duration-300 ${
        theme === "default" && "bg-gradient-radial from-lime-500 to-lime-600"
      } ${
        theme === "border" &&
        "border-2 border-slate-100 text-slate-100 hover:bg-gradient-radial hover:from-slate-800 hover:to-slite-900"
      } ${
        theme === "border-bottom" &&
        "border-b-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white"
      }`}
      {...props}
    >
      <div className="text-3xl">{icon}</div>
      <div className="text-sm font-medium">{text}</div>
    </button>
  );
};

export default ButtonIcon;
