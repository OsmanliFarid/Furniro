"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { ShopDetail } from "@/Store/Store";

const Navbar = () => {
  const NavbarArray = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  const [NewNavbarArray, SetNavbarArray] = useState([]);
  const [Bars, SetBars] = useState(false);
  const BarsClickShow = () => {
    SetNavbarArray(NavbarArray);
    SetBars(!Bars);
  };
  const [Shop, SetShop] = useState(false);

  const CloseShopClick = () => {
    SetShop(!Shop);
  };
  const ShopDetailItem = ShopDetail((state) => state.ShopDetailItem);
  const ItemClickDelete = ShopDetail((state) => state.ItemClickDelete);
  const Count = ShopDetail((state) => state.Count);
  const [Total, SetTotal] = useState(0);
  const ShoppingCartClick = () => {
    SetShop(!Shop);
  };

  useEffect(() => {
    let total = 0;
    ShopDetailItem.forEach((element) => {
      let numericPrice = element.price.split(" ");
      let number = numericPrice[1];
      number = +number.replace(/\./g, "");
      total += Count * number;
    });
    SetTotal(total);
  }, [ShopDetailItem]);
  return (
    <>
      <div className=" max-w-[85vw] m-auto">
        <div className={`grid grid-cols-2 md:grid-cols-3  items-center py-5`}>
          <div className="">
            <Link href="/">
              <img src="/images/Logo.png" alt="" className="" />
            </Link>
          </div>
          <div className="md:flex hidden  justify-center md:gap-x-6 xl:gap-x-14">
            {NavbarArray?.map(({ id, title, href }) => {
              return (
                <div className="" key={id}>
                  <Link className={`font-medium `} href={href}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex justify-end gap-x-8">
            <CiSearch className="text-2xl font-bold cursor-pointer" />
            <CiHeart className="text-2xl font-bold cursor-pointer" />
            <div className="flex relative" onClick={() => ShoppingCartClick()}>
              <TbShoppingCart className="text-2xl font-bold cursor-pointer" />
              <div
                className={`${
                  ShopDetailItem.length === 0 ? "hidden" : "block"
                } bg-red-500 w-4 h-4 text-sm flex justify-center items-center rounded-full absolute right-[-3px] top-[-3px] cursor-pointer`}
              >
                {ShopDetailItem.length}
              </div>
            </div>
          </div>
          <div className=" flex w-full justify-end px-5 text-2xl">
            {Bars ? (
              <IoCloseSharp
                className="md:hidden cursor-pointer text-4xl"
                onClick={() => BarsClickShow()}
              />
            ) : (
              <FaBars
                className="md:hidden cursor-pointer"
                onClick={() => BarsClickShow()}
              />
            )}
          </div>
        </div>
        <div
          className={`duration-500 transition-all ${
            Shop
              ? "opacity-100 visible fixed inset-0 bg-[rgba(0,0,0,0.5)] z-1"
              : "opacity-0 invisible"
          }`}
        >
          <div
            className={`w-[417px] h-[746px] bg-white top-0 fixed transition-all duration-500 right-0 z-2 ${
              Shop ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="px-7 grid grid-rows-[40px_30px_570px] grid-cols-1  h-full">
              <div className="flex justify-between items-center pt-5">
                <h1 className="text-[#000000] font-semibold text-2xl">
                  Shopping Cart
                </h1>
                <IoCloseSharp
                  className="text-3xl cursor-pointer"
                  onClick={() => CloseShopClick()}
                />
              </div>
              <div className="w-[287px] mt-5 h-1 bg-[#D9D9D9]"></div>
              <div className="">
                {ShopDetailItem?.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="flex w-[350px] justify-between gap-x-5 mt-10 items-center"
                    >
                      <div className="">
                        <img
                          src={item.image}
                          alt=""
                          className="w-[108px] h-[105] rounded-xl"
                        />
                      </div>
                      <div className="text-center">
                        <h1 className="text-black text-md font-semibold">
                          {item.title}
                        </h1>
                        <div className="flex gap-x-4 items-center">
                          <h1 className="text-md">{item.count}</h1>
                          <h1 className="text-sm">x</h1>
                          <h1 className="text-[#B88E2F]">{item.price}</h1>
                        </div>
                      </div>
                      <div className="">
                        <IoCloseSharp
                          className="text-white text-2xl cursor-pointer bg-[#9F9F9F] rounded-full w-[20px] h-[20px]"
                          onClick={() => ItemClickDelete(item)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex  w-70  justify-between">
                <h1>Subtotal</h1>
                <h1 className="text-[#B88E2F] font-semibold">RS. {Total}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          Bars
            ? "opacity-100 transition-all duration-500"
            : "opacity-0 transition-all duration-500"
        } fixed h-full w-[300px] bg-gray-500 top-0`}
      >
        <div className="">
          <div className="flex justify-end px-5 py-5">
            <IoCloseSharp
              className="md:hidden cursor-pointer text-5xl"
              onClick={() => BarsClickShow()}
            />
          </div>
          <div className="">
            {NewNavbarArray?.map(({ id, title, href }) => {
              return (
                <div className=" px-5 py-2" key={id}>
                  <Link
                    className="font-semibold text-md hover:text-white transition-all duration-300 hover:font-bold"
                    href={href}
                  >
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-4 px-5 py-6">
            <CiSearch className="text-3xl font-bold cursor-pointer" />
            <CiHeart className="text-3xl font-bold cursor-pointer" />
            <TbShoppingCart className="text-3xl font-bold cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
