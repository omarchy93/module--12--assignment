"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactImg from "public/contact.png";
import Button from "@/src/components/Button";

const Contact = () => {
  const [formObj, setFormObj] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const inputChange = (property, value) => {
    setFormObj((preobj) => ({
      ...preobj,

      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-11 px-20">
      <h1 className="text-center text-5xl text-gray-300 font-extrabold mb-20 mt-3">
        {" "}
        Let&#39;s Keep in Touch
      </h1>
      <div className="flex gap-[100px] ">
        <div className="flex-1 h-[500px] relative">
          <Image
            src={ContactImg}
            alt="contact img"
            fill={true}
            className="object-contain animate-little-Bounce	"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={formSubmit}>
          <input
            onChange={(e) => {
              inputChange("fname", e.target.value);
            }}
            value={formObj.fname}
            type="text"
            placeholder="First Name"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          />
          <input
            onChange={(e) => {
              inputChange("lname", e.target.value);
            }}
            value={formObj.lname}
            type="text"
            placeholder="Last Name"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          />
          <input
            onChange={(e) => {
              inputChange("email", e.target.value);
            }}
            value={formObj.email}
            type="email"
            placeholder="email"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold"
          />
          <textarea
            onChange={(e) => {
              inputChange("message", e.target.value);
            }}
            value={formObj.message}
            cols="30"
            rows="10"
            placeholder="message"
            className="p-3 bg-transparent outline-none border-[1px] border-solid border-gray-300 text-base font-semibold "
          ></textarea>
          <Button type="submit" url="#" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
