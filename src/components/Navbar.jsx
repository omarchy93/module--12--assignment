import Link from "next/link";
import React from "react";

const Links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },

  {
    id: 2,
    title: "about",
    url: "/about",
  },

  {
    id: 3,
    title: "blog",
    url: "/blog",
  },

  {
    id: 4,
    title: "contact",
    url: "/contact",
  },
];

const Navber = () => {
  return (
    <div className="h-20 flex items-center justify-between ">
      <div>
        <Link
          className="font-bold text-2xl bg-gradient-to-r from-green-500 to-gray-300 bg-clip-text text-transparent"
          href="/"
        >
          Blog
        </Link>
      </div>

      <div className="flex items-center gap-5">
        {Links.map((link) => {
          return (
            <Link
              className="bg-gradient-to-r from-green-500 to-gray-300 bg-clip-text text-transparent"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navber;
