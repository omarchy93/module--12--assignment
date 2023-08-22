import Button from "@/src/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pb-5 ">
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="container img"
          fill={true}
          className="object-cover grayscale"
        />
        <div
          className="absolute bottom-5 left-5  p-7 
        rounded-full bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent"
        >
          <h1 className="font-bold text-6xl my-4 ">Digital storytelling</h1>
          <p className="font-bold text-lg">
            Digital tools and software make it easy and convenient to create a
            digital story.
          </p>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="font-extrabold text-3xl text-white">Who are we</h1>
          <p className="text-base text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            quaerat nisi libero corporis, numquam ipsum cupiditate adipisci ea
            veritatis, incidunt placeat reiciendis hic error vitae at quas neque
            aliquam asperiores!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam
            culpa laboriosam est sed error dicta molestiae consequatur quia,
            ullam tempore cumque modi quisquam saepe accusamus itaque
            dignissimos incidunt atque?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, quod ea? Rem nobis beatae accusantium, dicta labore
            alias dolore numquam animi doloremque doloribus laudantium totam
            unde, natus magnam, quis iure.
          </p>
        </div>
        <div className="flex-1 mt-12 flex flex-col gap-7">
          <h1 className="font-extrabold text-3xl text-white"> What we do</h1>
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minus
            iusto est voluptates ratione ex! Omnis iusto est enim, eum
            consequatur, vel velit eius provident id expedita molestiae laborum
            itaque?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quasi veniam culpa ab dolorem doloremque possimus sunt quia
            praesentium neque rem dolor iusto, rerum mollitia accusantium
            adipisci. Blanditiis, a in.
            <br />
            <br />
            -- Dynamic website
            <br />
            <br />
            -- Fast and handy
            <br />
            <br />
            --Mobile app
          </p>
          <Button url="/contact" text="contact US" />
        </div>
      </div>
    </div>
  );
};

export default About;
