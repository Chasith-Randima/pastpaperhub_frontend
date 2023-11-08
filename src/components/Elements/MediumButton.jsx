import Link from "next/link";
import React from "react";

const MediumButton = ({ link = "#", medium, className }) => {
  return (
    <Link
      href={link}
      className={`inline-block px-1 py-1  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base text-center ${className}`}
    >
      {medium}
    </Link>
  );
};

export default MediumButton;
