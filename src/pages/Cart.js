import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ButtonIcon, Input, Button } from "../components/ui";
import { BsCheck2, BsPlus } from "react-icons/bs";
import { baseUrl } from "../utils/env";
import apiClient from "../utils/apiClient";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const [addressData, setAddressData] = useState({
    street_address: "",
    apt_suite_floor: "",
    city: "",
    zip_code: "",
    state: "",
    phone: "",
  });

  const getApiCart = () => {
    apiClient.get("/cart").then((response) => {
      setCart(response.data.data);

      let total = 0;
      response.data.data.map((item) => {
        total += item.meal.price * item.amount;
      });
      setSubtotal(total);
    });
  };

  const getApiAddress = () => {
    apiClient.get("/address").then((response) => {
      console.log(response.data.data);
      setAddress(response.data.data);
    });
  };

  useEffect(() => {
    getApiCart();
    getApiAddress();
  }, []);

  const handleAmountChange = (id, amount, type) => {
    const dataCart = {
      amount: amount,
    };
    if (type === "plus") {
      amount += 1;
      dataCart.amount = amount;
    } else {
      if (amount === 1) return;
      amount -= 1;
      dataCart.amount = amount;
    }

    apiClient.put(`/cart/${id}`, dataCart).then((response) => {
      console.log(response.data.data);
      getApiCart();
    });
  };

  const handleRemoveAmount = (id) => {
    apiClient.delete(`/cart/${id}`).then((response) => {
      getApiCart();
    });
  };

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

  const handleSaveAddress = (e) => {
    e.preventDefault();
    apiClient.post("/address", addressData).then((response) => {
      console.log(response.data.data);
      getApiAddress();
      setIsAddNewAddress(false);
    });
  };

  return (
    <div className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 p-10 flex relative overflow-hidden">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-8 flex flex-col p-6 space-y-4 w-full">
          <h2 className="text-xl font-semibold">Check out</h2>
          <div>
            <h2>Delivery address</h2>
            <div className="flex flex-col gap-4 my-4">
              {address.map((item, i) => {
                if (address != 0) {
                  return (
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
                  );
                }
              })}
              {!isAddNewAddress && address.length != 0 && (
                <div>
                  <ButtonIcon
                    text="Add new address"
                    icon={<BsPlus />}
                    theme="border-bottom"
                    onClick={() => setIsAddNewAddress(true)}
                  />
                </div>
              )}
              {isAddNewAddress ||
                (address.length === 0 && (
                  <form action="" className="flex flex-col gap-6">
                    <div className="flex gap-6">
                      <Input
                        label="Street address"
                        value={addressData.street_address}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            street_address: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Apt, suite, floor"
                        value={addressData.apt_suite_floor}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            apt_suite_floor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex gap-6">
                      <Input
                        label="City"
                        value={addressData.city}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            city: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Zip code"
                        value={addressData.zip_code}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            zip_code: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex gap-6">
                      <Input
                        label="State"
                        value={addressData.state}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            state: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Phone number"
                        value={addressData.phone}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Button
                      text="Save address"
                      theme="green"
                      onClick={(e) => handleSaveAddress(e)}
                    />
                  </form>
                ))}
            </div>
          </div>
          {/* <ul className="flex flex-col divide-y divide-gray-700">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={`${baseUrl}/storage/meal/${item.meal.foto}`}
                    alt={item.meal.name}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8 capitalize">
                          {item.meal.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.meal.with}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          ${item.meal.price * item.amount}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-500"
                        onClick={() => handleRemoveAmount(item.id)}
                      >
                        <BsTrash className="w-4 h-4" />
                        <span className="">Remove</span>
                      </button>
                      <div className="pl-2 flex items-center gap-2">
                        <div
                          className="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-600 shadow-lg"
                          onClick={() =>
                            handleAmountChange(item.id, item.amount, "minus")
                          }
                        >
                          <AiOutlineMinus />
                        </div>
                        <input
                          type="number"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                          placeholder="0"
                          required
                          value={item.amount}
                        />
                        <div
                          className="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-600 shadow-lg"
                          onClick={() =>
                            handleAmountChange(item.id, item.amount, "plus")
                          }
                        >
                          <AiOutlinePlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="col-span-4 p-6 space-y-4 w-full flex flex-col">
          <div className="bg-gradient-radial from-lime-500 to-lime-600 rounded-lg flex flex-col gap-1 p-4 my-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="font-medium text-sm">Subtotal </p>
                <p className="text-rg">${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-sm">Tax </p>
                <p className="text-rg">$0</p>
              </div>
              {/* <div className="flex justify-between">
                <p className="font-medium text-sm">Shipping </p>
                <p className="text-rg">$46</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-sm">Discount </p>
                <p className="text-rg">$0</p>
              </div> */}
            </div>
            <div className="flex justify-between items-center bg-lime-300 px-4 py-2 rounded-lg text-slate-800 mt-4">
              <p className="font-medium">Total price</p>
              <div className="text-right flex flex-col gap-2">
                {/* <div className="px-1 bg-red-500 rounded-lg text-white">
                  $57.99 off
                </div> */}
                <div>
                  <p className=""></p>
                  <p className="font-semibold text-lg">${subtotal}</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Button text="Checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
