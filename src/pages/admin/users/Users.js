import {
  Table,
  Button,
  Label,
  TextInput,
  Avatar,
  Modal,
  Select,
} from "flowbite-react";
import { BsGearFill, BsFillPencilFill } from "react-icons/bs";
import React, { useState } from "react";

const Users = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  const modalEditOpen = () => {
    setIsAddress(false);
    setModalOpen(true);
  };

  const modalAddressOpen = () => {
    setIsAddress(true);
    setModalOpen(true);
  };

  return (
    <div className="font-main pb-28">
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="search" value="Search user" />
          </div>
          <TextInput
            id="search"
            type="text"
            placeholder="ex. John doe"
            required={true}
          />
        </div>
      </div>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
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
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Sliver
            </Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <Button size="xs" color="warning" onClick={modalAddressOpen}>
                See address
              </Button>
            </Table.Cell>
            <Table.Cell className="flex items-center gap-1">
              <Button size="xs" onClick={modalEditOpen}>
                Edit
              </Button>
              <a href="/delete">
                <Button size="xs" color="failure">
                  Delete
                </Button>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Modal show={modalOpen} size="2xl" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          {!isAddress ? (
            <div className="space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Update user data
              </h3>
              <div className="flex gap-4 items-center w-full">
                <div className="flex-1">
                  <div className="mb-1 block">
                    <Label htmlFor="name" value="Name" />
                  </div>
                  <TextInput
                    id="name"
                    placeholder="ex. John doe"
                    required={true}
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-1 block">
                    <Label htmlFor="gender" value="Gender" />
                  </div>
                  <Select id="gender" required={true}>
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </div>
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="foto" value="Foto" />
                </div>
                <TextInput id="foto" type="file" required={true} />
              </div>
              <div className="w-full flex">
                <Button color="success" className="w-full">
                  <BsFillPencilFill className="mr-2" />
                  Update user data
                </Button>
              </div>
            </div>
          ) : (
            <div>saya address</div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Users;
