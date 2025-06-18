import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";
const Navbar = () => {
  const NavbarArray = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className=" h-20 max-w-[85vw] m-auto">
        <div className="grid grid-cols-3 items-center h-20  ">
          <div className="">
            <img src="/images/Logo.svg" alt="" />
          </div>
          <div className="flex  justify-center gap-x-14">
            {NavbarArray.map(({ id, title, href }) => {
              return (
                <div className="" key={id}>
                  <Link className="font-bold" href={href}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end gap-x-8">
            <img src="/images/accountalert.svg" alt="" />
            <CiSearch className="text-2xl font-bold" />
            <CiHeart className="text-2xl font-bold" />
            <TbShoppingCart className="text-2xl font-bold" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
