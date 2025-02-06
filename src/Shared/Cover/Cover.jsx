import React from "react";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero md:h-[650px] h-[450px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="md:w-[800px] md:h-[300px] hero-overlay bg-opacity-50 flex justify-center items-center p-4">
          <div>
            <h1 className="mb-5 text-3xl md:text-7xl font-bold text-white">{title}</h1>
            <p className="mb-5 text-white md:text-2xl font-semibold">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
