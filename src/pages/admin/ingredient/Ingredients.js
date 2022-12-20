import {
  Table,
  Button,
  Label,
  TextInput,
  Avatar,
  Modal,
  FileInput,
} from "flowbite-react";
import { BsGearFill, BsFillPlusCircleFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import apiClient from "../../../utils/apiClient";
import { baseUrl } from "../../../utils/env";

const Ingredients = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const [ingredient, setIngredient] = useState({
    id: 0,
    ingredient: "",
    quantity: "",
    price: "",
    unit: "",
    foto: "",
  });

  const getIngredientsApi = () => {
    apiClient.get("/ingredient").then((response) => {
      setIngredients(response.data.data);
    });
  };

  useEffect(() => {
    apiClient.get("/csrf-cookie").then((response) => {
      // console.log(response);
    });

    getIngredientsApi();
  }, []);

  const onClose = () => {
    setIsUpdate(false);
    setModalOpen(false);
  };

  const handleSubmit = (param) => {
    const formData = new FormData();

    formData.append("ingredient", ingredient.ingredient);
    formData.append("quantity", ingredient.quantity);
    formData.append("price", ingredient.price);
    formData.append("unit", ingredient.unit);
    formData.append("foto", ingredient.foto);

    if (param) {
      apiClient
        .post(`/ingredient/${ingredient.id}?_method=PUT`, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          setModalOpen(false);
          getIngredientsApi();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiClient
        .post("/ingredient", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          setModalOpen(false);
          getIngredientsApi();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (id) => {
    apiClient
      .delete(`/ingredient/${id}`)
      .then((response) => {
        console.log(response);
        getIngredientsApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = () => {
    setIngredient({
      id: 0,
      ingredient: "",
      quantity: "",
      price: "",
      unit: "",
      foto: "",
    });
    setModalOpen(true);
  };

  const handleUpdate = (param) => {
    setIngredient({
      id: param.id,
      ingredient: param.ingredient,
      quantity: param.quantity,
      price: param.price,
      unit: param.unit,
      foto: param.foto,
    });
    setIsUpdate(true);
    setModalOpen(true);
  };

  return (
    <div className="font-main pb-28">
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="search" value="Search ingredient" />
          </div>
          <TextInput
            id="search"
            type="text"
            placeholder="ex. onion"
            required={true}
          />
        </div>
        <Button color="success" onClick={() => handleAdd()}>
          <BsFillPlusCircleFill className="mr-2" />
          Add
        </Button>
      </div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Ingredient</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <BsGearFill />
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {ingredients.map((ingredient) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <Avatar
                  img={`${baseUrl}/storage/ingredient/${ingredient.foto}`}
                  rounded={true}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 capitalize">
                {ingredient.ingredient}
              </Table.Cell>
              <Table.Cell>
                {ingredient.quantity} {ingredient.unit}
              </Table.Cell>
              <Table.Cell>
                ${ingredient.price} / {ingredient.unit}
              </Table.Cell>
              <Table.Cell className="flex items-center gap-1">
                <Button size="xs" onClick={() => handleUpdate(ingredient)}>
                  Edit
                </Button>
                <Button
                  size="xs"
                  color="failure"
                  onClick={() => handleDelete(ingredient.id)}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal show={modalOpen} size="xl" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {isUpdate ? "Update ingredient data" : "Add ingredient data"}
            </h3>
            <form>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="ingredient" value="Ingredient" />
                </div>
                <TextInput
                  id="ingredient"
                  placeholder="ex. Onion"
                  required={true}
                  value={ingredient.ingredient}
                  onChange={(e) =>
                    setIngredient({ ...ingredient, ingredient: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="quantity" value="Quantity" />
                </div>
                <TextInput
                  id="quantity"
                  type="number"
                  placeholder="ex. 3"
                  required={true}
                  value={ingredient.quantity}
                  onChange={(e) =>
                    setIngredient({ ...ingredient, quantity: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  id="price"
                  type="number"
                  placeholder="ex. $12"
                  required={true}
                  value={ingredient.price}
                  onChange={(e) =>
                    setIngredient({ ...ingredient, price: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="unit" value="Unit" />
                </div>
                <TextInput
                  id="unit"
                  type="text"
                  placeholder="ex. unit"
                  required={true}
                  value={ingredient.unit}
                  onChange={(e) =>
                    setIngredient({ ...ingredient, unit: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="foto" value="Foto" />
                </div>
                <FileInput
                  id="foto"
                  onChange={(e) =>
                    setIngredient({ ...ingredient, foto: e.target.files[0] })
                  }
                />
              </div>
              <div className="w-full flex mt-8">
                <Button
                  color="success"
                  className="w-full"
                  onClick={() => handleSubmit(isUpdate)}
                >
                  <BsFillPlusCircleFill className="mr-2" />
                  {isUpdate ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Ingredients;
