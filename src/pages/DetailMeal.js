import { Tag } from "../components/ui";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/env";
import apiClient from "../utils/apiClient";
import { useEffect, useState } from "react";
import { Avatar } from "flowbite-react";

const DetailMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [utensils, setUtensils] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [nutrition, setNutrition] = useState({});

  const [tags, setTags] = useState([]);
  const [allergens, setAllergens] = useState([]);

  const getApiMeal = () => {
    apiClient.get(`/meal/${id}`).then((response) => {
      const tag = response.data.data.tags.split(",");
      const allergen = response.data.data.allergens.split(",");
      setTags(tag);
      setAllergens(allergen);
      setMeal(response.data.data);
      getApiNutrition(response.data.data.id);
      console.log(response.data.data);
    });
  };

  const getApiIngredients = () => {
    apiClient.get(`/meal-ingredient/data/${id}`).then((response) => {
      setIngredients(response.data.data);
      console.log(response.data.data);
    });
  };

  const getApiUtensils = () => {
    apiClient.get(`/utensil/data/${id}`).then((response) => {
      setUtensils(response.data.data);
      console.log(response.data.data);
    });
  };

  const getApiInstructions = () => {
    apiClient.get(`/instruction/data/${id}`).then((response) => {
      setInstructions(response.data.data);
      console.log(response.data.data);
    });
  };

  const getApiNutrition = (id) => {
    apiClient.get(`/nutrition/data/${id}`).then((response) => {
      setNutrition(response.data.data);
      console.log(response.data.data);
    });
  };

  useEffect(() => {
    getApiMeal();
    getApiIngredients();
    getApiUtensils();
    getApiInstructions();
  }, []);

  return (
    <div
      className="min-h-screen font-main bg-gradient-radial from-slate-800 to-slate-900 text-slate-100 relative
      p-10"
    >
      <div className="bg-gradient-radial from-lime-500 to-lime-600 rounded-2xl grid grid-cols-12 relative overflow-hidden shadow-xl">
        <div className="col-span-7 p-10 flex flex-col gap-6">
          <div>
            <h1 className="font-semibold text-2xl capitalize">{meal.name}</h1>
            <p className="text-gray-300 text-sm capitalize">{meal.with}</p>
          </div>
          <p className="text-sm">{meal.description}</p>
        </div>
        <div className="col-span-5">
          <img src={`${baseUrl}/storage/meal/${meal.foto}`} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12">
        <div className="col-span-8">
          {/* Tags */}
          <div className="flex gap-4 items-center">
            {tags.map((tag, index) => (
              <Tag label={tag} key={index} />
            ))}
          </div>

          {/* Allergens */}
          <div className="mt-12">
            <h1 className="font-semibold text-lg mb-4">Allergens</h1>
            <div className="flex gap-4 items-center">
              {allergens.map((allergen, index) => (
                <Tag label={allergen} key={index} />
              ))}
            </div>
            <p className="text-sm w-1/2 mt-4">{meal.allergens_description}</p>
          </div>

          {/* Ingeredients */}
          <div className="mt-12">
            <h1 className="font-semibold text-lg mb-4">Ingredients</h1>
            <ul className="display flex flex-wrap gap-6 divide-x divide-gray-500">
              {ingredients.map((ingredient) => (
                <li key={ingredient.id} className="flex gap-4 items-center">
                  <Avatar
                    img={`${baseUrl}/storage/ingredient/${ingredient.ingredient.foto}`}
                    size="lg"
                    rounded={true}
                  />
                  <div>
                    <p className="text-gray-500 text-sm capitalize">
                      {ingredient.quantity} {ingredient.ingredient.unit}
                    </p>
                    <p>{ingredient.ingredient.ingredient}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Utensils */}
          <div className="mt-12">
            <h1 className="font-semibold text-lg mb-4">Utensils</h1>
            <ul className="flex flex-wrap gap-6">
              {utensils.map((utensil) => (
                <li
                  key={utensil.id}
                  className="p-2 bg-lime-500 rounded-lg capitalize"
                >
                  <p>{utensil.utensil}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          {/* Time */}
          <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <p>Total time</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm capitalize">
                  {meal.total_time}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Prep time</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm capitalize">
                  {meal.prep_time}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Cooking difficulity</p>
              <div>
                <p className=""></p>
                <p className="text-lime-500 text-sm capitalize">
                  {meal.difficulty}
                </p>
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
              <p className="text-sm">Calories</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.calories}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Saturated fat</p>
              <div>
                <p className="text-lime-500 text-sm">
                  {nutrition.saturated_fat}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Sugar</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.sugar}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Protein</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.protein}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Sodium</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.sodium}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Fat</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.fat}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Carbohidrates</p>
              <div>
                <p className="text-lime-500 text-sm">
                  {nutrition.carbohidrates}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Dietary fiber</p>
              <div>
                <p className="text-lime-500 text-sm">
                  {nutrition.dietary_fiber}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Colesterol</p>
              <div>
                <p className="text-lime-500 text-sm">{nutrition.colesterol}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-semibold text-lg mb-4">Intructions</h1>
        <div className="flex flex-col gap-12">
          {instructions.map((instruction) => (
            <div key={instruction.id} className="grid grid-cols-12 gap-12">
              <div className="col-span-4">
                <div className="w-full">
                  <img
                    src={`${baseUrl}/storage/instruction/${instruction.foto}`}
                    className="w-full rounded-xl shadow-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-8">
                <p className="">{instruction.instruction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMeal;
