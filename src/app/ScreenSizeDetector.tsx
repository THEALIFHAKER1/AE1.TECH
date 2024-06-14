import React from "react";

export default function ScreenSizeDetector() {
  return (
    <div
      className="z-10 fixed bottom-16 left-0  "
      // make this div on the top of everything
      style={{ zIndex: 1000 }}
    >
      <div className="h-6 w-fit rounded-r-md bg-yellow-300 flex justify-center items-center text-black font-bold text-xs p-1">
        <span className="4xl:hidden 3xl:hidden 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden hidden">
          2XL
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden hidden">
          XL
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden hidden">
          Lg
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:block sm:hidden xs:hidden hidden">
          md
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:hidden hidden">
          sm
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block hidden">
          xs
        </span>
        <span className="4xl:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden block">
          below xs
        </span>
      </div>
    </div>
  );
}
