import React from "react";

const AboutItemCart = ({ img, title }) => {
  return (
    <>
      <div
        className="flex pt-[30%] px-20 md:p-1 md:pt-2 lg:p-0 w-full md:w-1/2 lg:w-1/4"
        data-aos="fade-up"
      >
        <div className="flex items-center px-[20%] md:m-10 lg:m-0  bg-[#4e2b83] lg:bg-transparent rounded-xl transform -translate-y-1/4">
          <div className="flex flex-col transform -translate-y-1/4 mx-auto lg:transform-none">
            <div className="flex justify-center w-full">
              <img src={img} alt="/" className="" />
            </div>
            <div className="flex justify-center text-white font-bold p-2 text-[26px]">
              {title}
            </div>
            <p className="flex flex-wrap justify-center text-white font-light text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus corrupti harum non consequatur optio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItemCart;
