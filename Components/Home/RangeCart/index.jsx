import React from "react";

const RangeCart = () => {
  const Carts = [
    { id: 1, image: "/images/RangeImage.svg", title: "Dining" },
    { id: 2, image: "/images/RangeImage2.png", title: "Living" },
    { id: 3, image: "/images/RangeImage3.svg", title: "Bedroom" },
  ];
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="font-bold text-3xl text-[#333333]">Browse The Range</h1>
        <p className="text-[#666666] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-6 xl:gap-x-6 xl:grid-cols-3 mt-15 justify-items-center">
        {Carts.map(({ id, title, image }) => {
          return (
            <div className="max-w-[381px] h-[520px] text-center " key={id}>
              <img src={image} alt="" />
              <h1 className="font-semibold text-[#333333] text-2xl mt-5">
                {title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RangeCart;
