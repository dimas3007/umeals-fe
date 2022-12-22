import { Label, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlineTag } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Tags = ({
  label = "tag",
  handleAddUtensil,
  handleDeleteUtensil,
  utensil,
}) => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={label} value={label} className="capitalize" />
        </div>
        <TextInput
          id={label}
          type="text"
          placeholder={`Add a ${label}...`}
          required={true}
          icon={AiOutlineTag}
          className="w-full"
          onKeyDown={(e) => {
            handleAddUtensil(e);
          }}
        />
      </div>

      <div className="my-3 flex flex-wrap -m-1">
        {utensil.map((tag, index) => (
          <span
            key={index}
            className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300"
          >
            {tag.utensil}
            <FaTimes
              className="w-3 h-3 sm:h-4 sm:w-4 ml-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={() => handleDeleteUtensil(tag.utensil)}
            />
          </span>
        ))}
      </div>
    </>
  );
};

export default Tags;
