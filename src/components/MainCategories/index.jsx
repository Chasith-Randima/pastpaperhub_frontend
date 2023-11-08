import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";

const MainCategories = () => {
  let blog = {
    tags: ["web developement"],
    url: "https://www.google.com",
    description: "The quick brown fox jump over the lazy doggies head.",
  };
  return (
    <Tag
      link={`/categories/${blog.tags[0]}`}
      name={blog.tags[0]}
      className={"p-20"}
    />
  );
};

export default MainCategories;
