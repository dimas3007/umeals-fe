import { useEffect, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Brand from "../components/Brand";
import { ButtonIcon, Input, Button } from "../components/ui";
import apiClient from "../utils/apiClient";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { userActions } from "../store/userSlice";

const Auth = ({ type = "login" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    apiClient.get("/csrf-cookie").then(() => {
      console.log("cookie set");
    });
  }, []);

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleAuth = (e) => {
    e.preventDefault();

    if (type === "login") {
      apiClient.post("/login", login).then((res) => {
        apiClient.get("/user").then((res) => {
          dispatch(userActions.setUser(res.data));
        });
        localStorage.setItem("token", res.data.access_token);
        dispatch(authActions.login());
        return navigate("/meals");
      });
    } else {
      apiClient.post("/register", register).then((res) => {
        return navigate("/login");
      });
    }
  };

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
          <div></div>
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
            {type === "register" ? (
              <>
                <Input
                  label="Name"
                  type="text"
                  value={register.name}
                  onChange={(e) =>
                    setRegister({ ...register, name: e.target.value })
                  }
                />
                <Input
                  label="Email"
                  value={register.email}
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })
                  }
                />
                <Input
                  label="Password"
                  type="password"
                  value={register.password}
                  onChange={(e) =>
                    setRegister({ ...register, password: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <Input
                  label="Email"
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
                <Input
                  label="Password"
                  type="password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </>
            )}
            <div className="text-xs flex items-center justify-center gap-2 my-3">
              <input type="checkbox" name="" id="" />I agree to all statements
              included in{" "}
              <Link to="term-condition" className="text-lime-200 font-medium">
                Terms of Use
              </Link>
            </div>
            <Button text={type} onClick={(e) => handleAuth(e)} />
          </form>
          {/* <p className="text-slate-100 text-xs text-center">
            Or continue with those social account
          </p>
          <div className="flex items-center gap-4 justify-center my-4">
            <ButtonIcon text="Facebook" icon={<BsFacebook />} theme="border" />
            <ButtonIcon text="Google" icon={<BsGoogle />} theme="border" />
          </div> */}
          <div className="text-xs flex items-center justify-center gap-2 my-3">
            Already member?
            <Link to="/login" className="text-lime-200 font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
