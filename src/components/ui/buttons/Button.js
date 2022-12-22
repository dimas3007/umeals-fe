const Button = ({ text, theme = "default", size, ...props }) => {
  return (
    <button
      className={`${
        theme === "default" && "bg-gradient-radial from-slate-800 to-slate-900"
      } ${
        theme === "green" && "bg-gradient-radial from-lime-500 to-lime-600"
      }  rounded-lg w-full text-sm p-3 capitalize ${
        size === "sm" && "text-xs p-2 px-4"
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
