import React from "react";

const Furniture = () => {
  return (
    <>
      <div className="">
        <div className="text-center mt-16">
          <h1 className="text-[#616161] text-xl font-semibold">
            Share your setup with
          </h1>
          <h1 className="text-[#3A3A3A] text-4xl font-bold">
            #FuniroFurniture
          </h1>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-y-10 justify-items-center xl:grid-cols-[70px_100px_400px_357px_330px] xl:grid-rows-[380px_300px]">
            <img
              src="/images/Furn1.png"
              alt=""
              className="w-full xl:w-auto h-170 xl:h-auto object-cover"
            />
            <img
              src="/images/furn2.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-1 xl:row-end-2 xl:col-start-2 xl:col-end-4 xl:translate-y-13"
            />
            <img
              src="/images/furn3.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-1 xl:row-end-2 xl:col-start-4 xl:col-end-5 xl:translate-y-28"
            />
            <img
              src="/images/furn4.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-1 xl:row-end-2 xl:col-start-5 xl:col-end-6 xl:translate-y-16"
            />
            <img
              src="/images/furn5.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-1 xl:row-end-2 xl:col-start-6 xl:col-end-7"
            />
            <img
              src="/images/furn6.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-2 xl:row-end-3 xl:col-start-1 xl:col-end-3"
            />
            <img
              src="/images/furn7.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-4"
            />
            <img
              src="/images/furn8.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-2 translate-y-10 ml-[-20px] xl:row-end-3 xl:col-start-4 xl:col-end-7"
            />
            <img
              src="/images/furn9.png"
              alt=""
              className="w-full xl:w-auto xl:row-start-2 xl:row-end-3 xl:col-start-6 xl:translate-y-15 ml-[-200px] xl:md-auto xl:col-end-7"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;
