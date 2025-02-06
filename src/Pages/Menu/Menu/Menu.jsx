import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
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
        </div>
    );
};

export default Menu;