import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 text-center pb-10 mx-auto'>
            <p className='text-yellow-500 font-semibold text-md py-2'>{subHeading}</p>
            <h3 className='text-4xl font-semibold border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;