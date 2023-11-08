import Link from "next/link";
import React from "react";

const CategorySubHeading = ({ link = "#", name, className }) => {
  return (
    <>
      <Link
        href={link}
        className={`text-xl font-semibold  text-grayCustom hover:text-white w-full ${className}`}
      >
        <h3 className="bg-gray-200 pl-2 border-b-2 border-b-white hover:text-white hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
          {name}
        </h3>
      </Link>
    </>
  );
};

export default CategorySubHeading;
