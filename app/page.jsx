"use client";

import RangeCart from "@/Components/Home/RangeCart";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-[url(/images/HomeBackground.png)] bg-cover bg-center h-[812px]">
        <div className="flex justify-center items-end md:justify-end md:items-end md:pb-25 md:pr-20 h-full">
          <div className="bg-[#FFF3E3] w-[643px] h-[443px]">
            <div className="px-8 py-10">
              <h1 className="font-bold tracking-[3px]">New Arrival</h1>
              <h1 className="text-[#B88E2F] text-[52px] font-bold max-w-[459px]">
                Discover Our New Collection
              </h1>
              <p className="text-[#333333] font-medium max-w-[426px] pb-8 pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="">
                <Link
                  href="#"
                  className={`uppercase bg-[#B88E2F] p-[16px_40px] text-white font-bold inline-block `}
                >
                  BUY Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85vw] m-auto">
        <RangeCart />
      </div>
    </>
  );
};

export default Home;
