import { Tag } from "../components/ui";

const DetailMeal = () => {
  return (
    <div
      className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 relative
      p-10"
    >
      <div className="bg-gradient-radial from-lime-500 to-lime-600 rounded-2xl grid grid-cols-12 relative overflow-hidden shadow-xl">
        <div className="col-span-7 p-10 flex flex-col gap-6">
          <div>
            <h1 className="font-semibold text-2xl">
              Black Bean & Pepper Quesadillas
            </h1>
            <p className="text-gray-300 text-sm">
              with Salsa Fresca & Creamy Guacamol
            </p>
          </div>
          <p className="text-sm">
            We couldn’t be prouda of this chowda! This creamy soup has all the
            veggies worth boasting about, like corn, green pepper, and tender
            potatoes. Cream cheese and melty cheddar are swirled in for extra
            richness, then, it’s all dolloped with sour cream and garnished with
            scallions. On the side, there’s toasted baguette slathered with an
            Old Bay compound butter so you can sop up every last drop.
          </p>
        </div>
        <div className="col-span-5">
          <img src="/meal/pizza.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12">
        <div className="col-span-8">
          <div className="flex gap-4 items-center">
            <Tag label="Veggie" />
            <Tag label="Spicy" />
          </div>
          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-4">Allergens</h1>
            <div className="flex gap-4 items-center">
              <Tag label="Veggie" />
              <Tag label="Spicy" />
              <Tag label="Milk" />
            </div>
            <p className="text-sm w-1/2 mt-4">
              Produced in a facility that processes eggs, milk, fish, peanuts,
              sesame, shellfish, soy, tree nuts, and wheat.
            </p>
          </div>

          {/* Ingeredients */}
          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-4">Ingredients</h1>
            <ul className="list-disc pl-4 display flex flex-col gap-4">
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-4">
              Not included in your delivery
            </h1>
            <ul className="list-disc pl-4 display flex flex-col gap-4">
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h1 className="font-semibold text-lg mb-4">Utensils</h1>
            <ul className="list-disc pl-4 display flex flex-col gap-4">
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">1 unit</p>
                <p>Long green paper</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <p>Total time</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm">40 minutes</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Prep time</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm">10 minutes</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Cooking difficulity</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
          </div>

          {/* Nutrition Values */}
          <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-6 mt-24">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">Nutrition Values</h1>
              <p className="text-xs text-gray-500">/ per serving</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Total time</p>
              <div>
                <p className="text-lime-500 text-sm">40 minutes</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Prep time</p>
              <div>
                <p className="text-lime-500 text-sm">10 minutes</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Cooking difficulity</p>
              <div>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Cooking difficulity</p>
              <div>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Cooking difficulity</p>
              <div>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Cooking difficulity</p>
              <div>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Cooking difficulity</p>
              <div>
                <p className="text-lime-500 text-sm">Medium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-semibold text-lg mb-4">Intructions</h1>
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="w-full">
                <img
                  src="/meal/pizza.jpg"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="col-span-8">
              <p className="">
                Adjust rack to top position and preheat oven to 425 degrees.
                Place 2 TBSP butter (4 TBSP for 4 servings) in a small
                microwave-safe bowl; set aside to soften (you’ll use it in Step
                4). Wash and dry produce. • Core, deseed, and dice green pepper
                into ¼-inch pieces. Trim and thinly slice scallions, separating
                whites from greens. Dice potatoes into ½-inch pieces. Drain and
                rinse corn.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="w-full">
                <img
                  src="/meal/pizza.jpg"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="col-span-8">
              <p className="">
                Adjust rack to top position and preheat oven to 425 degrees.
                Place 2 TBSP butter (4 TBSP for 4 servings) in a small
                microwave-safe bowl; set aside to soften (you’ll use it in Step
                4). Wash and dry produce. • Core, deseed, and dice green pepper
                into ¼-inch pieces. Trim and thinly slice scallions, separating
                whites from greens. Dice potatoes into ½-inch pieces. Drain and
                rinse corn.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="w-full">
                <img
                  src="/meal/pizza.jpg"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="col-span-8">
              <p className="">
                Adjust rack to top position and preheat oven to 425 degrees.
                Place 2 TBSP butter (4 TBSP for 4 servings) in a small
                microwave-safe bowl; set aside to soften (you’ll use it in Step
                4). Wash and dry produce. • Core, deseed, and dice green pepper
                into ¼-inch pieces. Trim and thinly slice scallions, separating
                whites from greens. Dice potatoes into ½-inch pieces. Drain and
                rinse corn.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <div className="w-full">
                <img
                  src="/meal/pizza.jpg"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="col-span-8">
              <p className="">
                Adjust rack to top position and preheat oven to 425 degrees.
                Place 2 TBSP butter (4 TBSP for 4 servings) in a small
                microwave-safe bowl; set aside to soften (you’ll use it in Step
                4). Wash and dry produce. • Core, deseed, and dice green pepper
                into ¼-inch pieces. Trim and thinly slice scallions, separating
                whites from greens. Dice potatoes into ½-inch pieces. Drain and
                rinse corn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMeal;
