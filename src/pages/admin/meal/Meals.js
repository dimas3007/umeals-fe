import { Table, Button, Label, TextInput, Avatar, Modal } from "flowbite-react";
import { BsGearFill, BsFillPlusCircleFill } from "react-icons/bs";
import React, { useState } from "react";

const Meals = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
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
        <Button color="success" onClick={() => setModalOpen(true)}>
          <BsFillPlusCircleFill className="mr-2" />
          Add
        </Button>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap">
              <h3 className="font-medium text-gray-900">
                Black Bean & Pepper Quesadillas
              </h3>
              <p>with Salsa Fresca & Creamy Guacamole</p>
            </Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell className="flex items-center gap-1">
              <a href="/tables">
                <Button size="xs" color="success">
                  Detail
                </Button>
              </a>
              <a href="/tables">
                <Button size="xs">Edit</Button>
              </a>
              <a href="/delete">
                <Button size="xs" color="failure">
                  Delete
                </Button>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Modal show={modalOpen} size="xl" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add ingredient data
            </h3>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="ingredient" value="Ingredient" />
              </div>
              <TextInput
                id="ingredient"
                placeholder="ex. Onion"
                required={true}
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
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="contains" value="Contains" />
              </div>
              <TextInput
                id="contains"
                type="text"
                placeholder="ex. Milk"
                required={true}
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="foto" value="Foto" />
              </div>
              <TextInput id="foto" type="file" required={true} />
            </div>
            <div className="w-full flex">
              <Button color="success" className="w-full">
                <BsFillPlusCircleFill className="mr-2" />
                Add new ingredient
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Meals;
