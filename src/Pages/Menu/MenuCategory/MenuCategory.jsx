import React from "react";
import ItemCard from "../../../Shared/ItemCard/ItemCard";
import Cover from "../../../Shared/Cover/Cover";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
  return (
    <div>
      {title && (
        <div className="py-12">
          <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-10 p-4 md:p-8">
        {items?.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
