import Link from "next/link";
import React from "react";

export default function header() {
  return (
    <>
      <nav className="pt-5 lg:pl-10 text-xl">
        <div className="flex items-center justify-center">
          <div className="">
            <div
              className="p-4 flex flex-shrink-0 font-bold 
           "
            >
              <Link href={"/"}>
                <h2 className="lg:px-5 px-2 font-serifs lg:text-2xl text-sm">
                  ABOUT
                </h2>
              </Link>
              <Link href={"/education"}>
                <h2 className=" lg:px-5 px-2  font-serifs lg:text-2xl text-sm">
                  EDUCATION
                </h2>
              </Link>
              <Link href={"/project"}>
                <h2 className="lg:px-5 px-2  font-serifs lg:text-2xl text-sm">
                  PROJECT
                </h2>
              </Link>
              <Link href={"/experience"}>
                <h2 className="lg:px-5 px-2 font-serifs lg:text-2xl text-sm">
                  EXPERIENCE
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
