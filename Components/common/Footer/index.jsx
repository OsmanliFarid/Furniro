import Link from "next/link";
import React from "react";

const Footer = () => {
  const NavbarArray = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className="mt-16">
        <div className="w-full bg-[#9F9F9F] h-[0.3px]"></div>
        <div className="max-w-[85vw] m-auto">
          <div className="pt-10 grid grid-cols-4">
            <div className="">
              <h1 className="font-bold text-2xl">Funiro.</h1>
              <p className="text-[#9F9F9F] text-md w-[285px] pt-8">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className="">
              <h1 className="text-[#9F9F9F]">Links</h1>
              <div className="">
                {NavbarArray?.map(({ id, title, href }) => {
                  return (
                    <div className="" key={id}>
                      <Link href={href}>{title}</Link>
                    </div>
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

export default Footer;
