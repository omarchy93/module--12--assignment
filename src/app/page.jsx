import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
import Button from "@/src/components/Button";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: { revalidate: 2000 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const imgData = [
  {
    imgurl:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=900",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    imgurl:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const HomePage = async () => {
  const data = await getData();
  return (
    <>
      <div className="flex items-center gap-24">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className=" text-6xl font-bold bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent">
            this design for Limamia
          </h1>
          <p className="text-lg font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, autem
            voluptatum hic quibusdam minima reiciendis dolores enim possimus.
          </p>
          <Button url="/blog" text="  See our Blog" />
        </div>
        <div className="flex-1 flex flex-col gap-12">
          <Image
            src={Hero}
            alt="hero img"
            className="w-full h-auto object-cover animate-little-Bounce"
          />
        </div>
      </div>
      <div className="mt-10">
        {data.map((item) => {
          const imgRandomItem = Math.floor(Math.random() * imgData.length);

          const imgItem = (imgRandomItem, imgData[imgRandomItem]);
          return (
            <Link href={"/blog/" + item.id} key={item.id}>
              <div className="flex gap-5  border-[1px] border-green-300 rounded-3xl m-6 px-5 shadow-2xl">
                <div className=" flex-1 my-5 h-[300px] w-[400px] relative">
                  I
                  <Image
                    src={imgItem.imgurl}
                    alt="bolg img"
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col  justify-center gap-5 border-[1px] border-green-300 rounded-3xl m-6 px-5">
                  <h2 className="text-2xl font-bold ">{item.title}</h2>
                  <p className=" text-lg font-semibold">{item.body}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
