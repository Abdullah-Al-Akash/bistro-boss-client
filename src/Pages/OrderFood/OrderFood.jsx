import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "./FoodCard";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [items] = useMenu();
  const dessert = items?.filter((i) => i.category === "dessert");
  const pizza = items?.filter((i) => i.category === "pizza");
  const salad = items?.filter((i) => i.category === "salad");
  const soup = items?.filter((i) => i.category === "soup");
  const drinks = items?.filter((i) => i.category === "drinks");
  return (
    <div>
      <Cover
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
        img={shopBanner}
      ></Cover>
      {/* Tab */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="mt-12 mx-auto md:w-3/4 text-center">
          <TabList>
            <Tab>
              <h3 className="font-semibold md:text-2xl text-yellow-700 md:m-2">
                SALAD
              </h3>
            </Tab>
            <Tab>
              <h3 className="font-semibold md:text-2xl text-yellow-700 md:m-2">
                PIZZA
              </h3>
            </Tab>
            <Tab>
              <h3 className="font-semibold md:text-2xl text-yellow-700 md:m-2">
                SOUPS
              </h3>
            </Tab>
            <Tab>
              <h3 className="font-semibold md:text-2xl text-yellow-700 md:m-2">
                DESSERTS
              </h3>
            </Tab>
            <Tab>
              <h3 className="font-semibold md:text-2xl text-yellow-700 md:m-2">
                DRINKS
              </h3>
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid md:grid-cols-3 md:gap-12 gap-8 md:px-24 px-4 py-12">
            {salad?.map((s) => (
              <FoodCard key={s._id} food={s}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 md:gap-12 gap-8 md:px-24 px-4 py-12">
            {pizza?.map((s) => (
              <FoodCard key={s._id} food={s}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 md:gap-12 gap-8 md:px-24 px-4 py-12">
            {soup?.map((s) => (
              <FoodCard key={s._id} food={s}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 md:gap-12 gap-8 md:px-24 px-4 py-12">
            {dessert?.map((s) => (
              <FoodCard key={s._id} food={s}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 md:gap-12 gap-8 md:px-24 px-4 py-12">
            {drinks?.map((s) => (
              <FoodCard key={s._id} food={s}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
