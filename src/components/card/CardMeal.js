import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardMeal = ({
  foto,
  name,
  withName,
  tags,
  total_time,
  price,
  id,
  handleAddCart,
}) => {
  const [newTags, setNewTags] = useState([]);

  useEffect(() => {
    const tag = tags.split(",");
    setNewTags(tag);
  }, []);
  return (
    <div className="relative basis-1/6 hover:shadow-2xl">
      <div className="w-80 h-52 relative">
        <div
          onClick={() => handleAddCart(id)}
          className="absolute p-2 bg-lime-500 top-2 left-2 rounded-full shadow-lg z-10 cursor-pointer border border-2 border-slate-100 hover:bg-lime-600"
        >
          <FaShoppingCart />
        </div>
        <img
          src={foto}
          alt=""
          srcset=""
          className="w-full object-cover rounded-2xl"
        />
      </div>
      <Link to={`/meals/${id}`}>
        <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-2xl cursor-pointer -mt-16 z-50 relative shadow-lg">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold capitalize">{name}</h1>
              <p className="text-xs text-gray-500">{withName}</p>
            </div>
            <h1 className="font-semibold text-lg text-lime-500">${price}</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 capitalize">{total_time}</p>
            <div className="flex items-center gap-2">
              {newTags.map((tag, index) => (
                <span key={index} className="text-xs capitalize">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardMeal;
