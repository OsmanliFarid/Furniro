"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const NavbarArray = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  const [NewNavbarArray, SetNavbarArray] = useState([]);
  const BarsClickShow = () => {
    SetNavbarArray(NavbarArray);
  };

  return (
    <>
      <div className=" h-20 max-w-[85vw] m-auto">
        <div className={`grid grid-cols-2 md:grid-cols-3  items-center h-20`}>
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
            <FaBars
              className="md:hidden cursor-pointer"
              onClick={() => BarsClickShow()}
            />
          </div>
        </div>
      </div>
      <div className="fixed h-full w-[300px] bg-gray-500 top-0"></div>
    </>
  );
};

export default Navbar;
