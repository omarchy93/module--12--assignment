import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="border-none px-5 py-3 bg-gradient-to-b from-green-500 to-gray-300 rounded-md text-slate-800 max-w-max hover:">
        {text}
      </button>
    </Link>
  );
};

export default Button;
