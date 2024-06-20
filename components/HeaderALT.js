import Link from "next/link";
import React from "react";

const HeaderALT = () => {
  return (
    <nav className="py-5 flex justify-between items-center container mx-auto px-5 lg:px-20 ">
      <div className="w-1/4">
        <Link href="/">
          <img width="150" className="cursor-pointer" src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="hidden lg:block w-2/4 text-center">
        <ul>
          <li className="inline-block mx-4 font-bold">
            <Link href="/courses">
              <a>On Going</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Recorded</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Live</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Masterclass</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden w-1/4 text-right lg:flex items-center">
        <Link href="/auth/login">
          <a className="px-5 bg-[#FD4C5C] hover:bg-black text-white py-4">
            My Courses
          </a>
        </Link>

        <Link href="/">
          <div className="flex ml-5">
            <img
              src="https://source.unsplash.com/random/50x50"
              className="mr-2 rounded-full"
              width="50"
              height="50"
            />
            <div className="text-left flex flex-col">
              <h4 className="p-0 m-0">John Westervelt</h4>
              <p>
                <small>PREMIUM</small>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderALT;
