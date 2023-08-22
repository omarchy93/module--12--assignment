import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUserData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const imgData = [
  {
    imgurl:
      "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/583124/pexels-photo-583124.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    imgurl:
      "https://images.pexels.com/photos/1500482/pexels-photo-1500482.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BolgPost = async ({ params }) => {
  const postData = await getData(params.id);
  const userData = await getUserData(postData.userId);

  const imgRandomItem = Math.floor(Math.random() * imgData.length);
  const imgItem = (imgRandomItem, imgData[imgRandomItem]);
  return (
    <div>
      <div className="flex gap-10 p-5 m-5">
        <div className="flex-1 flex flex-col justify-start gap-6 text-justify">
          <h1 className="text-xl font-bold">{postData.title}</h1>
          <p className="text-base font-semibold">{postData.body}</p>
        </div>
        <div className=" flex-1 h-[400px] w-[420px] relative">
          <Image className="" src={imgItem.imgurl} alt="hi" fill={true} />
        </div>
      </div>
      <div className="p-5 m-5 ">
        <div className="h-10 w-10 relative ">
          <Image
            src={imgItem.imgurl}
            alt="clint icon"
            fill={true}
            className="rounded-full"
          />
          <div className="m-14">
            <p className="font-bold text-lg"> {userData.name}</p>
          </div>
        </div>
      </div>

      <div className="p-5 m-5 text-justify font-semibold">
        <p>
          {postData.body}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          cupiditate aliquam corporis odio sequi nobis labore voluptates
          dignissimos! A, provident natus eius minus soluta illo exercitationem
          tenetur consequatur impedit blanditiis.
          <br />
          <br />
          {postData.body}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ducimus vel voluptate aliquid, deserunt expedita dolor mollitia fugiat
          unde voluptatem.
          <br />
          <br />
          {postData.body}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam
          debitis voluptatum alias veniam esse praesentium voluptate vel,
          obcaecati, cum necessitatibus, numquam enim? Eos sapiente, placeat
          ducimus itaque consequuntur fugiat voluptatibus culpa architecto,
          inventore, aut natus quis mollitia. Vero debitis, cupiditate
          laboriosam quasi quos, alias optio deleniti architecto dolorum
          deserunt aut velit delectus quas officia explicabo enim. Esse, odit
          enim molestiae architecto obcaecati dolorem assumenda id, placeat
          ipsam hic rerum nulla exercitationem beatae laudantium non,
          repellendus sequi reiciendis amet? Ipsum quod blanditiis dolores!
          Error, animi dignissimos! Nobis qui officia eos!
          <br />
          <br />
          {postData.body}
        </p>
      </div>
    </div>
  );
};

export default BolgPost;
