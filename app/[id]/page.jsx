"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Products = () => {
  const { id } = useParams();

  const [Data, SetData] = useState({});
  const [Active, SetActive] = useState(id);
  const [ColorActive, SetColorActive] = useState(id);
  useEffect(() => {
    axios.get("http://localhost:3030/" + id).then(({ data }) => {
      SetData(data);
    });
  }, []);
  const SizeClickShow = (id) => {
    SetActive(id);
  };
  const ColorClickShow = (id) => {
    SetColorActive(id);
  };
  return (
    <>
      <div className="max-w-[85vw] m-auto">
        <div className="flex mt-14 gap-x-30">
          <div className="">
            <img src={Data.image} alt="" className="w-[481px] h-[500]" />
          </div>
          <div className="">
            <h1 className="text-[42px]">{Data.title}</h1>
            <h1 className="text-[#9F9F9F] font-medium text-2xl">
              {Data.price}
            </h1>
            <p className="pt-3 pb-3">{Data.desc}</p>
            <div className="">
              <h1 className="text-[#9f9f9f] pb-3">Size</h1>
              <div className="flex gap-x-3">
                {Data.size?.map(({ id, Size }) => {
                  return (
                    <h1
                      className={`${
                        Active == id ? "bg-[#B88E2F] font-bold" : "bg-[#F9F1E7]"
                      }  w-[30px] h-[30px] rounded-[5px] flex justify-center items-center cursor-pointer select-none`}
                      key={id}
                      onClick={() => SizeClickShow(id)}
                    >
                      {Size}
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="pt-5">
              <h1 className="text-[#9f9f9f] pb-3">Color</h1>
              <div className="flex gap-x-2">
                {Data.color?.map(({ id, color }) => {
                  return (
                    <div
                      key={id}
                      style={{ backgroundColor: color }}
                      onClick={() => ColorClickShow(id)}
                      className={`${
                        ColorActive === id
                          ? "border-3 border-[#2982ff] w-[29px] h-[29px]"
                          : "w-[30px] h-[30px] border-none"
                      }  rounded-full  cursor-pointer`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
