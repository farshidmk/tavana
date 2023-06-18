"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { BiLogIn, BiBasket, BiUserPlus, BiLogOut } from "react-icons/bi";
import styles from "./navbar.module.css";

const Navbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex pt-3 pb-1 mb-16 justify-between items-center w-full md:px-5 shadow-md">
      <div className="w-3/12">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo-tavana.png"
            alt="tavan-logo"
            width={90}
            height={60}
            className="hover:scale-110 transition-all duration-1000"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center w-1/2">
        {LINKS.map((link) => (
          <Link
            key={link.link}
            href={link.to}
            className="mt-2  w-24 flex justify-center items-center hover:bg-tavana-100 px-1 py-3 hover:text-white hover:font-bold transition-all duration-1000"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center w-3/12">
        {isUserLoggedIn ? (
          <>
            <button type="button" className="navbar_icon">
              {<BiLogOut />} خروج
            </button>
            <button type="button" className="navbar_icon">
              {<BiBasket />} سبد خرید
            </button>
          </>
        ) : (
          <>
            <button type="button" className="navbar_icon">
              {<BiUserPlus />} ثبت نام
            </button>
            <button type="button" className="navbar_icon">
              {<BiLogIn />} ورود
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const LINKS = [
  { to: "/home", label: "خانه" },
  { to: "/shop", label: "فروشگاه" },
  { to: "/service", label: "خدمات" },
  { to: "/contact-us", label: "تماس با ما" },
  { to: "/about-us", label: "در باره ما" },
];
