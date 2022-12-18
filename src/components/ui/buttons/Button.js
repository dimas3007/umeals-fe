const Button = ({ text, theme = "default", size }) => {
  return (
    <button
      className={`${
        theme === "default" && "bg-gradient-radial from-slate-800 to-slate-900"
      } ${
        theme === "green" && "bg-gradient-radial from-lime-500 to-lime-600"
      }  rounded-lg text-sm p-3 ${size === "sm" && "text-xs p-2 px-4"}`}
    >
      {text}
    </button>
  );
};

export default Button;
