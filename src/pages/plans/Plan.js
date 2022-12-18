import {
  BsPeopleFill,
  BsEggFried,
  BsTreeFill,
  BsFileMedical,
  BsAlarm,
  BsEggFill,
  BsCheckAll,
  BsCheck2,
} from "react-icons/bs";
import { useState } from "react";
import { ButtonIcon } from "../../components/ui";

const Plan = () => {
  const [planData, setPlanData] = useState([
    {
      icon: <BsEggFried />,
      name: "Meat & Veggies",
      isSelected: false,
    },
    {
      icon: <BsTreeFill />,
      name: "Veggie",
      isSelected: false,
    },
    {
      icon: <BsPeopleFill />,
      name: "Family Friendly",
      isSelected: false,
    },
    {
      icon: <BsFileMedical />,
      name: "Fit & Wholesome",
      isSelected: false,
    },
    {
      icon: <BsAlarm />,
      name: "Quick & Easy",
      isSelected: false,
    },
    {
      icon: <BsEggFill />,
      name: "Pescatarian",
      isSelected: false,
    },
  ]);

  const [numberOfPeople, setNumberOfPeople] = useState([
    {
      amount: 2,
      isSelected: true,
    },
    {
      amount: 4,
      isSelected: false,
    },
  ]);

  const [numberOfReceipes, setNumberOfReceipes] = useState([
    {
      amount: 2,
      isSelected: true,
    },
    {
      amount: 3,
      isSelected: false,
    },
    {
      amount: 4,
      isSelected: false,
    },
    {
      amount: 5,
      isSelected: false,
    },
    {
      amount: 6,
      isSelected: false,
    },
  ]);

  const toggleSelectPlan = (name) => {
    setPlanData(
      planData.map((plan) => {
        if (plan.name === name) {
          if (plan.isSelected === true) return { ...plan, isSelected: false };
          return { ...plan, isSelected: true };
        }
        return plan;
      })
    );
  };

  const toggleSelectReceipe = (amount) => {
    setNumberOfReceipes(
      numberOfReceipes.map((receipe) => {
        if (receipe.amount === amount) return { ...receipe, isSelected: true };
        return { ...receipe, isSelected: false };
      })
    );
  };

  const toggleSelectPeople = (amount) => {
    setNumberOfPeople(
      numberOfPeople.map((people) => {
        if (people.amount === amount) return { ...people, isSelected: true };
        return { ...people, isSelected: false };
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 my-24">
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl text-lime-500 font-semibold">
          Choose your preferences
        </h1>
        <p className="text-xs text-slate-200 w-1/2">
          Your preferences will help us show you the most relevant recipes
          first. You'll still have access to all recipes each week.
        </p>
      </div>
      <div className="grid grid-cols-12 py-4 px-24 gap-12">
        <div className="col-span-6 flex gap-4 flex-wrap">
          {planData.map((item, i) => (
            <div
              className={`relative flex flex-col items-center justify-center gap-2 p-6 rounded-lg cursor-pointer basis-1/3
             grow drop-shadow-2xl border border-2 ${
               item.isSelected
                 ? "text-lime-500 border-lime-500"
                 : "text-lime-300 border-lime-300"
             } hover:border-lime-500 hover:text-lime-500`}
              onClick={() => toggleSelectPlan(item.name)}
              key={i}
            >
              {item.isSelected && (
                <div className="flex flex-center justify-center p-1 rounded-full text-xl absolute top-2 left-2 text-slate-100 bg-lime-500">
                  <BsCheck2 />
                </div>
              )}
              <div className="text-4xl">{item.icon}</div>
              {item.name}
            </div>
          ))}
        </div>
        <div className="col-span-6 py-4 px-12">
          <div className="flex gap-4 items-center mb-4">
            <p className="flex-1 w-full">Number of people</p>
            <div className="flex rounded-lg border border-1 border-lime-300 relative overflow-hidden flex-1">
              {numberOfPeople.map((item, i) => (
                <div
                  className={`px-4 py-2 border border-1 border-lime-300 cursor-pointer flex-1 text-center ${
                    item.isSelected ? "bg-lime-500 text-white" : "text-lime-500"
                  }`}
                  key={i}
                  onClick={() => toggleSelectPeople(item.amount)}
                >
                  {item.amount}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="flex-1 w-full">Receipes per week</p>
            <div className="flex rounded-lg border border-1 border-lime-300 relative overflow-hidden flex-1">
              {numberOfReceipes.map((item, i) => (
                <div
                  className={`px-4 py-2 border border-1 border-lime-300 cursor-pointer flex-1 text-center ${
                    item.isSelected ? "bg-lime-500 text-white" : "text-lime-500"
                  }`}
                  key={i}
                  onClick={() => toggleSelectReceipe(item.amount)}
                >
                  {item.amount}
                </div>
              ))}
            </div>
          </div>
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
      <ButtonIcon text="Select this plan" icon={<BsCheckAll />} />
    </div>
  );
};

export default Plan;
