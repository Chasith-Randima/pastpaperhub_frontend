import Link from "next/link";
import React from "react";

const CategoryHeading = ({ link = "#", name, className }) => {
  return (
    <Link href={link} className={`text-6xl font-bold ${className}`}>
      {name}
    </Link>
  );
};

export default CategoryHeading;
