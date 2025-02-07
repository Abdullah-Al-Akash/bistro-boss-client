import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../Shared/ItemCard/ItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [items, loading] = useMenu();
  const filterWithPopular = items?.filter((i) => i.category === "popular");
  return (
    <div className="py-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 p-4 md:p-8">
        {filterWithPopular.map((item) => (
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
