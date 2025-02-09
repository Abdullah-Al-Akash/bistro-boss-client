import React from "react";
import ItemCard from "../../../Shared/ItemCard/ItemCard";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
  return (
    <div>
      {subTitle && (
        <div className="py-12">
          <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-10 p-4 md:p-8">
        {items?.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <div className="text-center pb-8">
        <button className="btn btn-outline border-0 border-b-4 border-b-yellow-700 mt-4 font-semibold text-lg bg-gray-100 text-yellow-700">
          <Link to={`/order/${title}`}>ORDER YOUR FAVOURITE FOOD</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
