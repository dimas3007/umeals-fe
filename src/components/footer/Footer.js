import Brand from "../Brand";

const Footer = () => {
  return (
    <div
      className="font-main px-28 py-12 bg-gradient-radial from-slate-800 to-slate-900 text-slate-100
        grid grid-cols-12 relative"
    >
      <div className="col-span-4 flex flex-col gap-4">
        <Brand />
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil
          dolorum dolor suscipit voluptatibus animi!
        </p>
        <p className="text-sm text-gray-300">© 2022 U-Meals.</p>
      </div>
      <div className="col-span-5 flex justify-evenly">
        <div>
          <h1>Menu</h1>
          <ul className="text-xs flex flex-col gap-2 mt-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Meals</h1>
          <ul className="text-xs flex flex-col gap-2 mt-3">
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Our Menu</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Others</h1>
          <ul className="text-xs flex flex-col gap-2 mt-3">
            <li>
              <a href="#">Term & Condition</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 pl-16">
        <h1>Office</h1>
        <div className="text-xs">
          <p>Jl. KH. Wahid Hasyim Kel No.10D</p>
          <p>Jakarta, Indonesia</p>
          <p>(021) 50858650</p>
          <p>team@umeals.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
