import Plan from "./Plan";
import Shipment from "./Shipment";
import { useState } from "react";
import { BsFileText, BsGeoAltFill, BsBasket, BsEggFried } from "react-icons/bs";

const Plans = () => {
  const [wizardData, setWizardData] = useState([
    {
      icon: <BsFileText />,
      name: "Select Plan",
      isPass: true,
    },
    {
      icon: <BsGeoAltFill />,
      name: "Address",
      isPass: false,
    },
    {
      icon: <BsBasket />,
      name: "Checkout",
      isPass: false,
    },
    // {
    //   icon: <BsEggFried />,
    //   name: "Select Meals",
    //   isPass: false,
    // },
  ]);

  return (
    <div className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 flex relative">
      <div className="flex absolute items-center justify-center w-full">
        {wizardData.map((item, i) => (
          <div class="flex items-center justify-center space-x-2 my-5" key={i}>
            {i != 0 && (
              <span
                className={`h-px w-16 ${
                  item.isPass ? "bg-lime-500" : "bg-gray-100"
                }`}
              ></span>
            )}
            <span
              class={`flex items-center gap-2 font-normal ${
                item.isPass && "text-lime-500"
              }`}
            >
              {item.icon} {item.name}
            </span>
            {i !== wizardData.length - 1 && (
              <span
                className={`h-px w-16 ${
                  item.isPass ? "bg-lime-500" : "bg-gray-100"
                }`}
              ></span>
            )}
          </div>
        ))}
      </div>
      <Shipment />
    </div>
  );
};

export default Plans;
