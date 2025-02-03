import React from 'react';

const ItemCard = ({item}) => {
    const{name,recipe,image,price} = item;
    return (
        <div className='flex space-x-4 p-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='text-2xl font-semibold'>{name}-------------</h3>
                <p className='text-md text-gray-500 pt-2'>{recipe}</p>
            </div>
            <p className='text-yellow-500 text-xl font-semibold'>${price}</p>
        </div>
    );
};

export default ItemCard;