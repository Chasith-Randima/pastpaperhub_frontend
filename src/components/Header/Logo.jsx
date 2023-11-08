import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center text-dark">
        <div className="w-16 rounded-full border border-solid border-dark  mr-4">
          <Image
            src={"/images/pastpapershub.png"}
            // fill={true}
            width={64}
            height={64}
            className="w-full h-auto rounded-full"
            alt="logo"
          />
        </div>
        <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
      </Link>
    </>
  );
};

export default Logo;
