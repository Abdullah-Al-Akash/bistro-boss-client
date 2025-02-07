import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../../Shared/ItemCard/ItemCard";

const Menu = () => {
  const [items, loading] = useMenu();
  const dessert = items?.filter((i) => i.category === "dessert");
  const pizza = items?.filter((i) => i.category === "pizza");
  const salad = items?.filter((i) => i.category === "salad");
  const soup = items?.filter((i) => i.category === "soup");
  const offered = items?.filter((i) => i.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-8">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        ></SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-10 p-4 md:p-8">
        {offered?.map((offer) => (
          <ItemCard item={offer}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
