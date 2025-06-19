"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
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

  return (
    <>
      <div className=" max-w-[85vw] m-auto">
        <div className={`grid grid-cols-2 md:grid-cols-3  items-center py-5`}>
          <div className="">
            <img src="/images/Logo.svg" alt="" />
          </div>
          <div className="md:flex hidden  justify-center md:gap-x-6 xl:gap-x-14">
            {NavbarArray.map(({ id, title, href }) => {
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
            <img src="/images/accountalert.svg" alt="" />
            <CiSearch className="text-2xl font-bold" />
            <CiHeart className="text-2xl font-bold" />
            <TbShoppingCart className="text-2xl font-bold" />
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
            <img
              src="/images/accountalert.svg"
              alt=""
              className="cursor-pointer"
            />
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
