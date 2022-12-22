import { Table, Button, Label, TextInput, Avatar } from "flowbite-react";
import { BsGearFill, BsFillPlusCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../../../utils/apiClient";
import { baseUrl } from "../../../utils/env";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const getMealsApi = () => {
    apiClient.get("/meal").then((response) => {
      setMeals(response.data.data);
    });
  };
  useEffect(() => {
    apiClient.get("/csrf-cookie").then((response) => {
      // console.log(response);
    });

    getMealsApi();
  }, []);

  const handleDeleteMeal = (id) => {
    apiClient
      .delete(`/meal/${id}`)
      .then((response) => {
        console.log(response);
        getMealsApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-main pb-28">
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="search" value="Search meal" />
          </div>
          <TextInput
            id="search"
            type="text"
            placeholder="ex. Firefox"
            required={true}
          />
        </div>
        <Link to="/admin/meals/add">
          <Button color="success">
            <BsFillPlusCircleFill className="mr-2" />
            Add
          </Button>
        </Link>
      </div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Tags</Table.HeadCell>
          <Table.HeadCell>Total Time & Prep Time</Table.HeadCell>
          <Table.HeadCell>Difficulity</Table.HeadCell>
          <Table.HeadCell>
            <BsGearFill />
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {meals.map((meal) => (
            <Table.Row
              key={meal.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <Avatar
                  img={`${baseUrl}/storage/meal/${meal.foto}`}
                  rounded={true}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                <h3 className="font-medium text-gray-900 capitalize">
                  {meal.name}
                </h3>
                <p className="lowercase">{meal.with}</p>
              </Table.Cell>
              <Table.Cell>${meal.price}</Table.Cell>
              <Table.Cell className="capitalize">{meal.tags}</Table.Cell>
              <Table.Cell>
                {meal.total_time} & {meal.prep_time}
              </Table.Cell>
              <Table.Cell className="capitalize">{meal.difficulty}</Table.Cell>
              <Table.Cell className="flex items-center gap-1">
                <Button size="xs" color="success">
                  Detail
                </Button>
                <Button size="xs">Edit</Button>
                <Button
                  size="xs"
                  color="failure"
                  onClick={() => {
                    handleDeleteMeal(meal.id);
                  }}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Meals;
