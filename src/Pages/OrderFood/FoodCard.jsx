import React from "react";

const FoodCard = ({ food }) => {
  const { name, recipe, image, price } = food;
  return (
    <div className="card bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full rounded-none" src={image} alt="Shoes" />
      </figure>
      
      <p className="font-semibold rounded-md absolute top-5 right-5 text-white bg-black px-4 py-2">${price}</p>
      <div className="card-body">
        <h2 className="text-center md:text-2xl text-xl font-semibold">
          {name}
        </h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center py-2">
          <button className="btn btn-outline border-0 border-b-4 border-b-yellow-700 mt-4 font-semibold text-lg bg-gray-100 text-yellow-700">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
