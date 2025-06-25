"use client";
import { ShopDetail } from "@/Store/Store";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Products = () => {
  const { id } = useParams();

  const [Data, SetData] = useState({});
  const [Active, SetActive] = useState(id);
  const [ColorActive, SetColorActive] = useState(id);
  useEffect(() => {
    axios.get("http://localhost:3030/products/" + id).then(({ data }) => {
      SetData(data.data);
    });
    SetCount(1);
    SetAddRef(false);
  }, [id]);
  const SizeClickShow = (id) => {
    SetActive(id);
    console.log(ida);
  };
  const ColorClickShow = (id) => {
    SetColorActive(id);
  };
  const [Count, SetCount] = useState(0);
  const [AddRef, SetAddRef] = useState(false);
  const { ItemClickShow, ItemClickDelete, SetCounts } = ShopDetail();
  const [ProductShop, SetProductShop] = useState({});
  const AddToCartClick = () => {
    SetAddRef(!AddRef);
    axios.get("http://localhost:3030/products/" + id).then(({ data }) => {
      if (data.success === true) {
        SetCounts(Count);
        ItemClickShow(data.data);
        SetProductShop(data.data);
      } else {
        console.log("xeta var");
      }
    });
  };
  const removeClick = () => {
    ItemClickDelete(ProductShop);
    SetAddRef(false);
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
                {Data.size?.map(({ _id, Size }) => {
                  return (
                    <h1
                      className={` ${
                        Active == _id
                          ? "bg-[#B88E2F] font-bold"
                          : "bg-[#F9F1E7]"
                      }   w-[30px] h-[30px] rounded-[5px] flex justify-center items-center cursor-pointer select-none`}
                      key={_id}
                      onClick={() => SizeClickShow(_id)}
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
                {Data.color?.map(({ _id, color }) => {
                  return (
                    <div
                      key={_id}
                      style={{ backgroundColor: color }}
                      onClick={() => ColorClickShow(_id)}
                      className={`${
                        ColorActive === _id
                          ? "border-3 border-[#2982ff] w-[29px] h-[29px]"
                          : "w-[30px] h-[30px] border-none"
                      }  rounded-full  cursor-pointer`}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-7 mt-6">
              <div className="border-[#9F9F9F] border-2 rounded-2xl px-3 justify-between text-xl flex items-center w-[123px] h-[64px]">
                <div className="">
                  <button
                    className="cursor-pointer"
                    onClick={() => SetCount(Count && Count - 1)}
                  >
                    -
                  </button>
                </div>
                <div className="">
                  <h1>{Count}</h1>
                </div>
                <div className="">
                  <button
                    className="cursor-pointer"
                    onClick={() => SetCount(Count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-[215px] h-[64px] font-bold cursor-pointer border-[#9F9F9F] border-2 rounded-2xl px-3"
                onClick={() => {
                  AddToCartClick();
                }}
              >
                {"Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
