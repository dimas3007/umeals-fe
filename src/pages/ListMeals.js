import { CardMeal } from "../components/card";
import { Inputs } from "../components/ui";

const ListMeals = () => {
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
          <CardMeal foto="/meal/pizza.jpg" />
          <CardMeal foto="/meal/sushi.jpg" />
          <CardMeal foto="/meal/sushi.jpg" />
          <CardMeal foto="/meal/sushi.jpg" />
          <CardMeal foto="/meal/sushi.jpg" />
          <CardMeal foto="/meal/sushi.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ListMeals;
