import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertCover from '../../../assets/menu/chef-service.jpg'
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import saladCover from '../../../assets/menu/salad-bg.jpg'
import soupCover from '../../../assets/menu/soup-bg.jpg'

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
      <MenuCategory
      items={offered}
      ></MenuCategory>
      <MenuCategory
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      title={"DESSERTS"}
      coverImg={dessertCover}
      items={dessert}
      ></MenuCategory>
      <MenuCategory
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"}
      title={"PIZZA"}
      coverImg={pizzaCover}
      items={pizza}
      ></MenuCategory>
      <MenuCategory
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"}
      title={"SALAD"}
      coverImg={saladCover}
      items={salad}
      ></MenuCategory>
      <MenuCategory
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,"}
      title={"SOUP"}
      coverImg={soupCover}
      items={soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
