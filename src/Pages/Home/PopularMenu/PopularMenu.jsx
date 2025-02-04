import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../Shared/ItemCard/ItemCard";

const PopularMenu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterWithPopular = data.filter((i) => i.category === "popular");
        setItems(filterWithPopular);
      });
  }, []);
  return (
    <div className="py-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 p-4 md:p-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <div className="text-center mb-8">
        <button className="btn btn-outline border-0 border-b-4 mt-4 font-semibold text-lg  border-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
