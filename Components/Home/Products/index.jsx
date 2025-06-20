"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Products = () => {
  const [ArrayData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/user").then(({ data }) => {
      setData(data);
    });
  }, []);
  const CartClickShow = (id) => {
    axios.delete("http://localhost:3030/user" + "/" + id).then(({ data }) => {
      setData(data);
    });
  };
  const [Detail, SetDetail] = useState({});
  const CartClickDetail = (id) => {
    const NewDetail = ArrayData.find((item) => item.id === id);
    console.log(NewDetail);
  };
  return (
    <>
      <div className="">
        <h1 className="text-[#333333] font-bold text-4xl text-center mt-16 mb-14">
          Our Products
        </h1>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {ArrayData.map((user) => (
            <div className="" key={user.id}>
              <div className="w-[285px] bg-[#F4F5F7] h-[446px] relative group">
                <div
                  className="w-[285px] h-[301px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${user.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="" key={user.id}>
                    {user.discounts.map((item) => {
                      return (
                        <div className="flex justify-end p-5" key={user.id}>
                          <h1
                            className={`${
                              item.discount ? "bg-[#E97171]" : "hidden"
                            }
                          ${
                            item.discount === "New" ? "bg-green-400" : ""
                          } w-[48px] rounded-[50%] h-[48px] text-white flex justify-center items-center`}
                          >
                            {item.discount}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="p-[15px_0px_0px_15px]">
                  <h1 className="text-2xl font-semibold text-[#3A3A3A]">
                    {user.title}
                  </h1>
                  <p className="text-md text-[#898989]">{user.desc}</p>
                  <div className="flex items-center gap-x-3 pt-2 ">
                    <div className="">
                      <h1 className="text-[#3A3A3A] text-xl font-semibold">
                        {user.price}
                      </h1>
                    </div>
                    <div className="">
                      {user.discounts.map(({ discount, price }) => {
                        return (
                          <h1
                            key={user.id}
                            className="text-[#B0B0B0] line-through"
                          >
                            {price}
                          </h1>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="opacity-0 flex flex-col gap-y-4 absolute inset-0 bg-black group-hover:opacity-60 justify-center items-center transition-all duration-500">
                  <Link
                    href="#"
                    onClick={() => CartClickShow(user.id)}
                    className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Delete
                  </Link>
                  <Link
                    onClick={() => CartClickDetail(user.id)}
                    href="#"
                    className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
