import {
  Avatar,
  Button,
  FileInput,
  Label,
  Select,
  Table,
  Tabs,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { GiHotMeal } from "react-icons/gi";
import {
  IoIosNutrition,
  IoIosList,
  IoMdRestaurant,
  IoIosAddCircle,
  IoIosBook,
} from "react-icons/io";
import Tags from "../../../components/tags/Tags";
import apiClient from "../../../utils/apiClient";

const MealForm = () => {
  const [meal, setMeal] = useState({
    name: "",
    with: "",
    total_time: "",
    prep_time: "",
    description: "",
    tags: "",
    allergens: "",
    allergens_description: "",
    difficulty: "easy",
    price: 0,
    nutrition_value_id: 0,
    foto: "",
  });

  const [nutritionValue, setNutritionValue] = useState({
    calories: "",
    saturated_fat: "",
    sugar: "",
    protein: "",
    sodium: "",
    fat: "",
    carbohidrates: "",
    dietary_fiber: "",
    colesterol: "",
  });

  const [utensil, setUtensil] = useState([]);

  const [mealIngredients, setMealIngredients] = useState([]);
  const [ingredientData, setIngredientData] = useState([]);

  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState({
    instruction: "",
    meal_id: 0,
    foto: "",
  });

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    apiClient.get("/csrf-cookie").then((response) => {
      // console.log(response);
    });

    apiClient.get("ingredient").then((response) => {
      setIngredients(response.data.data);
    });
  }, []);

  const handleChooseIngredient = (ingredient) => {
    if (mealIngredients.length > 0) {
      const check = mealIngredients.find((item) => item.id === ingredient.id);
      if (check) {
        return;
      }
    }
    setMealIngredients([...mealIngredients, ingredient]);
    setIngredientData([
      ...ingredientData,
      {
        meal_id: 0,
        ingredient_id: ingredient.id,
        quantity: 0,
      },
    ]);
  };

  const handleRemoveMealIngredient = (id) => {
    const newMealIngredients = mealIngredients.filter((item) => item.id !== id);
    const newIngredient = ingredientData.filter(
      (item) => item.ingredient_id !== id
    );
    setMealIngredients(newMealIngredients);
    setIngredientData(newIngredient);
  };

  const handleQtyChange = (e, id, price) => {
    let qty = e.target.value;
    if (qty < 0) {
      qty = 0;
      document.getElementById(`ingredient${id}`).value = 0;
    }
    let priceIngredient = qty * price;

    document.getElementById(
      `priceIngredient${id}`
    ).textContent = `$${priceIngredient}`;

    ingredientData.map((item) => {
      if (item.ingredient_id === id) {
        item.quantity = +qty;
      }

      return item;
    });
  };

  // Utensils Function
  const handleAddUtensil = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      setUtensil([...utensil, { utensil: e.target.value, meal_id: 0 }]);
      e.target.value = "";
    }
  };

  const handleDeleteUtensil = (tag) => {
    const newUtensil = utensil.filter((item) => item.utensil !== tag);
    setUtensil(newUtensil);
  };

  // Instructions Function
  const handleAddInstruction = () => {
    setInstructions([...instructions, instruction]);
    setInstruction({ instruction: "", meal_id: 0, foto: "" });
  };

  const handleRemoveInstruction = (index) => {
    const newInstructions = instructions.filter((item, i) => i !== index);
    setInstructions(newInstructions);
  };

  const handleTest = () => {
    const newIngredientData = ingredientData.map((item) => {
      return { ...item, meal_id: 4 };
    });
    console.log("new ingredient data : ", newIngredientData);
    setIngredientData(newIngredientData);
    console.log(ingredientData);
  };

  // Save Data Process Function
  const handleSaveMeal = () => {
    apiClient.post("/nutrition", nutritionValue).then((response) => {
      const formData = new FormData();
      formData.append("name", meal.name);
      formData.append("with", meal.with);
      formData.append("total_time", meal.total_time);
      formData.append("prep_time", meal.prep_time);
      formData.append("description", meal.description);
      formData.append("tags", meal.tags);
      formData.append("allergens", meal.allergens);
      formData.append("allergens_description", meal.allergens_description);
      formData.append("difficulty", meal.difficulty);
      formData.append("price", meal.price);
      formData.append("foto", meal.foto);
      formData.append("nutrition_value_id", response.data.data.id);
      apiClient
        .post("meal", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.success);
          console.log(response.data.data.id);

          if (response.data.success) {
            const newIngredientData = ingredientData.map((item) => {
              return { ...item, meal_id: response.data.data.id };
            });

            newIngredientData.map((item) => {
              return apiClient
                .post("/meal-ingredient", item)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            });

            const newUtensil = utensil.map((item) => {
              return { ...item, meal_id: response.data.data.id };
            });

            newUtensil.map((item) => {
              return apiClient
                .post("/utensil", item)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            });

            const newInstructions = instructions.map((item) => {
              return { ...item, meal_id: response.data.data.id };
            });

            newInstructions.map((item) => {
              const formData = new FormData();
              formData.append("instruction", item.instruction);
              formData.append("meal_id", item.meal_id);
              formData.append("foto", item.foto);
              return apiClient
                .post("/instruction", formData, {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="font-main">
      <Tabs.Group style={"underline"}>
        {/* Meal */}
        <Tabs.Item title="Meal" icon={GiHotMeal}>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4 items-center w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="mealname" value="Meal name" />
                </div>
                <TextInput
                  id="mealname"
                  type="text"
                  placeholder="ex. Chicken rice"
                  required={true}
                  value={meal.name}
                  onChange={(e) => setMeal({ ...meal, name: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="with" value="With" />
                </div>
                <TextInput
                  id="with"
                  type="text"
                  placeholder="ex. with rice and chili sauce"
                  required={true}
                  value={meal.with}
                  onChange={(e) => setMeal({ ...meal, with: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-4 items-center w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="totaltime" value="Total time" />
                </div>
                <TextInput
                  id="totaltime"
                  type="text"
                  placeholder="ex. 120 minutes"
                  required={true}
                  value={meal.total_time}
                  onChange={(e) =>
                    setMeal({ ...meal, total_time: e.target.value })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="preptime" value="Prep time" />
                </div>
                <TextInput
                  id="with"
                  type="text"
                  placeholder="ex. 120 minutes"
                  required={true}
                  value={meal.prep_time}
                  onChange={(e) =>
                    setMeal({ ...meal, prep_time: e.target.value })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="difficulity" value="Difficulity" />
                </div>
                <Select
                  id="difficulity"
                  required={true}
                  onChange={(e) =>
                    setMeal({ ...meal, difficulty: e.target.value })
                  }
                >
                  <option>easy</option>
                  <option>medium</option>
                  <option>hard</option>
                </Select>
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  id="price"
                  type="number"
                  placeholder="ex 12000"
                  required={true}
                  value={meal.price}
                  onChange={(e) => setMeal({ ...meal, price: e.target.value })}
                />
              </div>
            </div>

            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <Textarea
                id="description"
                placeholder="description for a meal..."
                required={true}
                rows={4}
                value={meal.description}
                onChange={(e) =>
                  setMeal({ ...meal, description: e.target.value })
                }
              />
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="allergens" value="Allergens" />
                </div>
                <TextInput
                  id="allergens"
                  type="text"
                  placeholder="ex. Milk, Egg, Gluten"
                  required={true}
                  value={meal.allergens}
                  onChange={(e) =>
                    setMeal({ ...meal, allergens: e.target.value })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label
                    htmlFor="allergensdescription"
                    value="Allergens Description"
                  />
                </div>
                <Textarea
                  id="allergensdescription"
                  placeholder="description for allergens..."
                  required={true}
                  rows={4}
                  value={meal.allergens_description}
                  onChange={(e) =>
                    setMeal({ ...meal, allergens_description: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="foto" value="Foto" />
                </div>
                <FileInput
                  id="foto"
                  onChange={(e) =>
                    setMeal({ ...meal, foto: e.target.files[0] })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="tags" value="Tags" />
                </div>
                <TextInput
                  id="tags"
                  type="text"
                  placeholder="ex. Veggie, Meat, Fastfood"
                  required={true}
                  value={meal.tags}
                  onChange={(e) => setMeal({ ...meal, tags: e.target.value })}
                />
              </div>
            </div>
          </form>
        </Tabs.Item>

        {/* Ingredients */}
        <Tabs.Item title="Ingredients" icon={IoIosList}>
          <Button onClick={handleTest}>Test</Button>
          <div className="flex gap-4 w-full mb-12">
            <div className="flex-1">
              <div className="mb-2 block">
                <Label htmlFor="ingredient" value="Ingredient" />
              </div>
              <Select id="ingredient" required={true}>
                {ingredients.map((ingredient) => (
                  <option
                    onClick={() => handleChooseIngredient(ingredient)}
                    key={ingredient.id}
                  >
                    {ingredient.ingredient}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr className="font-semibold text-slate-800">
                  <td className="py-3 px-6">Ingredient</td>
                  <td className="py-3 px-6">Qty</td>
                  <td className="py-3 px-6">Price</td>
                  <td className="py-3 px-6">Action</td>
                </tr>
              </thead>
              <tbody>
                {mealIngredients.map((ingredient) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={ingredient.id}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {ingredient.ingredient}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div>
                          <input
                            type="number"
                            id={`ingredient${ingredient.id}`}
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                            placeholder="0"
                            required
                            onChange={(e) =>
                              handleQtyChange(
                                e,
                                ingredient.id,
                                ingredient.price
                              )
                            }
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      <span id={`priceIngredient${ingredient.id}`}>$0</span>
                    </td>
                    <td
                      className="py-4 px-6 font-medium text-red-600 cursor-pointer"
                      onClick={() => handleRemoveMealIngredient(ingredient.id)}
                    >
                      Remove
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tabs.Item>

        {/* Nutrition Value */}
        <Tabs.Item active={true} title="Nutrition Value" icon={IoIosNutrition}>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4 items-center w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="calories" value="Calories" />
                </div>
                <TextInput
                  id="calories"
                  type="text"
                  placeholder="ex. 80 kcal"
                  required={true}
                  value={nutritionValue.calories}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      calories: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="saturatedfat" value="Saturated Fat" />
                </div>
                <TextInput
                  id="saturatedfat"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.saturated_fat}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      saturated_fat: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="sugar" value="Sugar" />
                </div>
                <TextInput
                  id="sugar"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.sugar}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      sugar: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex gap-4 items-center w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="protein" value="Protein" />
                </div>
                <TextInput
                  id="protein"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.protein}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      protein: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="sodium" value="Sodium" />
                </div>
                <TextInput
                  id="sodium"
                  type="text"
                  placeholder="ex. 15 mg"
                  required={true}
                  value={nutritionValue.sodium}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      sodium: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="fat" value="Fat" />
                </div>
                <TextInput
                  id="fat"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.fat}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      fat: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex gap-4 items-center w-full">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="carbohidrates" value="Carbohidrates" />
                </div>
                <TextInput
                  id="carbohidrates"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.carbohidrates}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      carbohidrates: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="dietaryfiber" value="Dietary Fiber" />
                </div>
                <TextInput
                  id="dietaryfiber"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.dietary_fiber}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      dietary_fiber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="colesterol" value="Colesterol" />
                </div>
                <TextInput
                  id="colesterol"
                  type="text"
                  placeholder="ex. 15 g"
                  required={true}
                  value={nutritionValue.colesterol}
                  onChange={(e) =>
                    setNutritionValue({
                      ...nutritionValue,
                      colesterol: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </form>
        </Tabs.Item>

        {/* Instruction */}
        <Tabs.Item title="Instruction" icon={IoIosBook}>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="foto" value="Foto" />
              </div>
              <FileInput
                id="foto"
                onChange={(e) =>
                  setInstruction({ ...instruction, foto: e.target.files[0] })
                }
              />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <Textarea
                id="description"
                placeholder="description for a meal..."
                required={true}
                rows={4}
                value={instruction.instruction}
                onChange={(e) =>
                  setInstruction({
                    ...instruction,
                    instruction: e.target.value,
                  })
                }
              />
            </div>
            <Button onClick={handleAddInstruction}>Add instruction</Button>

            <Table striped={true} className="mt-8">
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Foto</Table.HeadCell>
                <Table.HeadCell>Instruction</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {instructions.map((instruction, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>
                      <Avatar img={URL.createObjectURL(instruction.foto)} />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {instruction.instruction}
                    </Table.Cell>
                    <Table.Cell>
                      <span
                        className="text-red-600 font-semibold cursor-pointer"
                        onClick={() => {
                          handleRemoveInstruction(index);
                        }}
                      >
                        Remove
                      </span>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Tabs.Item>

        {/* Utensils */}
        <Tabs.Item title="Utensils" icon={IoMdRestaurant}>
          <Tags
            label="utensils"
            handleAddUtensil={handleAddUtensil}
            handleDeleteUtensil={handleDeleteUtensil}
            utensil={utensil}
          />

          <div className="mt-16">
            <p className="text-gray-500 w-1/2 text-sm py-2">
              Before you start the process of saving data, ensure that all of
              the fields have been filled out accurately!.
            </p>
            <Button color="success" className="w-full" onClick={handleSaveMeal}>
              <IoIosAddCircle className="mr-2" />
              Save new data meal
            </Button>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default MealForm;
