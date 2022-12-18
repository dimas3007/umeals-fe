import { BsFacebook, BsGoogle, BsFillPlayCircleFill } from "react-icons/bs";
import Brand from "../components/Brand";
import { ButtonIcon, Input, Button } from "../components/ui";

const Auth = ({ type = "login" }) => {
  return (
    <div className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 p-10 flex relative overflow-hidden">
      <div className="grid grid-cols-12 bg-transparent rounded-xl">
        <div className="col-span-7 py-8 px-24 flex flex-col justify-between">
          <Brand />
          <div className="text-6xl font-semibold flex flex-col gap-3">
            <h1>Learn to code.</h1>
            <h1>Interactively.</h1>
            <h1>For free.</h1>
          </div>
          <div>
            <ButtonIcon text="Watch demo" icon={<BsFillPlayCircleFill />} />
          </div>
          <ul className="text-sm flex items-center justify-evenly">
            <li className="hover:text-lime-500 transition ease-in duration-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-lime-500 transition ease-in duration-300">
              <a href="#">About</a>
            </li>
            <li className="hover:text-lime-500 transition ease-in duration-300">
              <a href="#">About</a>
            </li>
            <li className="hover:text-lime-500 transition ease-in duration-300">
              <a href="#">Meals</a>
            </li>
            <li className="hover:text-lime-500 transition ease-in duration-300">
              <a href="#">Plans</a>
            </li>
          </ul>
        </div>
        {/* <div className="col-span-5 py-8 px-16 bg-gradient-radial from-red-700 to-red-800 flex flex-col gap-3 rounded-xl"> */}
        <div className="col-span-5 py-8 px-16 bg-gradient-radial from-lime-500 to-lime-600 flex flex-col gap-3 rounded-xl">
          <div>
            <p className="font-semibold">Join over 25 million</p>
            <p className="font-semibold">learners from around the globe</p>
          </div>
          <p className="text-xs text-slate-100 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus assumenda, obcaecati ipsam repellendus, perferendis
            delectus tempora et ut a, id molestiae inventore?
          </p>
          <form action="" className="flex flex-col gap-3 mb-2">
            <Input label="Email" />
            <Input label="Password" type="password" />
            {type === "register" && (
              <Input label="Repeat password" type="password" />
            )}
            <div className="text-xs flex items-center justify-center gap-2 my-3">
              <input type="checkbox" name="" id="" />I agree to all statements
              included in{" "}
              <a href="#" className="text-lime-200 font-medium">
                Terms of Use
              </a>
            </div>
            <Button text="Start coding now" />
          </form>
          <p className="text-slate-100 text-xs text-center">
            Or continue with those social account
          </p>
          <div className="flex items-center gap-4 justify-center my-4">
            <ButtonIcon text="Facebook" icon={<BsFacebook />} theme="border" />
            <ButtonIcon text="Google" icon={<BsGoogle />} theme="border" />
          </div>
          <div className="text-xs flex items-center justify-center gap-2 my-3">
            Already member?
            <a href="#" className="text-lime-200 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
