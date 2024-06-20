import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = (props) => {
  const [isActive, setActive] = useState(false);
  const [username, setUsername] = useState("");

  if (typeof window !== "undefined") {
    // setUsername(localStorage.getItem("username"));
  }

  return (
    <>
      <nav className="bg-white flex lg:hidden container mx-auto py-5 justify-between items-center absolute top-0 left-0 w-full lg:px-20 px-5">
        <div className="w-1/4">
          <Link href="/">
            <a className="cursor-pointer">
              <img
                width="150"
                className="cursor-pointer"
                src="/logo.svg"
                alt=""
              />
            </a>
          </Link>
        </div>

        <div
          onClick={() => {
            setActive(true);
            console.log("working");
          }}
          className="cursor-pointer"
        >
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>
      </nav>

      <ul
        className={`lg:hidden ${
          isActive === true ? "flex" : "hidden"
        } flex-col items-center justify-center fixed top-0 left-0 h-screen w-screen bg-white z-50`}
      >
        <li
          onClick={() => setActive(false)}
          className="text-5xl fixed top-2 right-2 m-5 cursor-pointer select-none"
        >
          &times;
        </li>
        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/courses">
            <a>Cources</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/">
            <a>Our Services</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <nav className="hidden bg-white lg:flex py-5 justify-between items-center w-full">
        <div className="w-1/4">
          <Link href="/">
            <img
              width="150"
              className="cursor-pointer"
              src="/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block w-2/4 text-center">
          <ul>
            <li className="inline-block mx-4 font-bold">
              <Link href="/courses">
                <a>Cources</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/services">
                <a>Our Services</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block w-1/4 text-right">
          {props.jwt === null ? (
            <Link href="/auth/login">
              <a className="px-5">Login</a>
            </Link>
          ) : (
            <Link href="/user">
              <a className="px-5">{username}</a>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
