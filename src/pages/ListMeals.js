import { useEffect, useState } from "react";
import { CardMeal } from "../components/card";
import { Inputs } from "../components/ui";
import apiClient from "../utils/apiClient";
import { baseUrl } from "../utils/env";
import { useSelector } from "react-redux";

const ListMeals = () => {
  const [meals, setMeals] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    apiClient.get("/meal").then((response) => {
      setMeals(response.data.data);
    });
  }, []);

  const handleAddCart = (id) => {
    const dataCart = {
      user_id: user.id,
      meal_id: id,
      amount: 1,
    };
    apiClient.post("/cart", dataCart).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div
      className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 relative
      p-10"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-2 flex flex-col gap-6">
          <Inputs label="Search meal..." />

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-sm">Cooking time</h1>
            <Inputs label="From... (minute)" />
            <Inputs label="To... (minute)" />
          </div>
        </div>
        <div className="col-span-10 flex flex-wrap justify-center gap-6">
          {meals.map((meal) => (
            <CardMeal
              key={meal.id}
              foto={`${baseUrl}/storage/meal/${meal.foto}`}
              name={meal.name}
              withName={meal.with}
              total_time={meal.total_time}
              price={meal.price}
              tags={meal.tags}
              id={meal.id}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMeals;
