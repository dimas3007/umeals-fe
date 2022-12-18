import { useState } from "react";
import { BsCheck2, BsPlus, BsArrowRight } from "react-icons/bs";
import { ButtonIcon, Input, Button } from "../../components/ui";

const Shipment = () => {
  const [address, setAddress] = useState([
    {
      id: 1,
      firstName: "Dimas",
      lastName: "Setiaji",
      streetAddress: "jalan rancabolang no 29 bandung",
      apt: "Ceecills",
      city: "New York",
      zip: "402665",
      state: "Arizona",
      phone: "08965652223",
      isSelected: true,
    },
    {
      id: 2,
      firstName: "Dimas",
      lastName: "Setiaji 2",
      streetAddress: "jalan rancabolang no 29 bandung",
      apt: "Ceecills",
      city: "New York",
      zip: "402665",
      state: "Arizona",
      phone: "08965652223",
      isSelected: false,
    },
  ]);

  const [isAddNewAddress, setIsAddNewAddress] = useState(false);

  const toggleSelectAddress = (id) => {
    setIsAddNewAddress(false);

    setAddress(
      address.map((address) => {
        if (address.id === id) return { ...address, isSelected: true };
        return { ...address, isSelected: false };
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 my-24">
      <div className="grid grid-cols-12 py-4 px-24 gap-12">
        <div className="col-span-6">
          <h1>Shipping information</h1>
          <div>
            <h2>Delivery address</h2>
            <div className="flex flex-col gap-4 my-4">
              {address.map((item, i) => (
                <div
                  className={`flex gap-4 p-4 rounded-lg border border-2 cursor-pointer drop-shadow-xl hover:border-lime-500 ${
                    item.isSelected ? "border-lime-500" : "border-slate-600"
                  }`}
                  key={i}
                  onClick={() => toggleSelectAddress(item.id)}
                >
                  <div>
                    <div
                      className={`p-1 rounded-full border border-1 border-slate-600 w-fit ${
                        item.isSelected && "bg-lime-500"
                      }`}
                    >
                      <BsCheck2 />
                    </div>
                  </div>
                  <div>
                    <h2>
                      {item.firstName} {item.lastName}
                    </h2>
                    <p>
                      {item.streetAddress} apt {item.apt}
                    </p>
                    <p>
                      {item.city}, {item.state} {item.zip}
                    </p>
                  </div>
                </div>
              ))}
              {!isAddNewAddress && (
                <div>
                  <ButtonIcon
                    text="Add new address"
                    icon={<BsPlus />}
                    theme="border-bottom"
                    onClick={() => setIsAddNewAddress(true)}
                  />
                </div>
              )}
              {isAddNewAddress && (
                <form action="" className="flex flex-col gap-6">
                  <div className="flex gap-6">
                    <Input label="First name" />
                    <Input label="Last name" />
                  </div>
                  <div className="flex gap-6">
                    <Input label="Street address" />
                    <Input label="Apt, suite, floor" />
                  </div>
                  <div className="flex gap-6">
                    <Input label="City" />
                    <Input label="Zip code" />
                  </div>
                  <div className="flex gap-6">
                    <Input label="State" />
                    <Input label="Phone number" />
                  </div>
                </form>
              )}
              <Button text="Next step" theme="green" />
            </div>
          </div>
        </div>
        <div className="col-span-6 py-4 px-12">
          <div className="bg-gradient-radial from-lime-500 to-lime-600 rounded-lg flex flex-col gap-1 p-4 my-4">
            <p className="font-semibold">
              Quick and Easy, Meat & Veggies and Veggie
            </p>
            <p>5 meals for 2 people per week</p>
            <p>10 total servings</p>
            <div className="flex justify-between border-t-2 border-slate-100 mt-4 pt-4">
              <p>Box price</p>
              <div>
                <p className=""></p>
                <p>$89.90</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Price per serving</p>
              <div>
                <p className=""></p>
                <p>$4.90</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-lime-300 px-4 py-2 rounded-lg text-slate-800 mt-4">
              <p className="font-medium">First box total</p>
              <div className="text-right flex flex-col gap-2">
                <div className="px-1 bg-red-500 rounded-lg text-white">
                  $57.99 off
                </div>
                <div>
                  <p className=""></p>
                  <p className="font-semibold">$89.90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
