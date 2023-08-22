import Image from "next/image";
import React from "react";

async function getData(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/` + id,
    {
      next: { revalidate: 2000 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BolgPost = async ({ params }) => {
  const postData = await getData(params.id);

  const post = postData.postDetails;

  return (
    <div>
      <div className="  h-[600px] w-full relative">
        <Image className="" src={post.img} alt="hi" fill={true} />
      </div>
      <div className="flex gap-10 p-5 m-5">
        <div className="flex-1 flex flex-col justify-start gap-6 text-justify">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <p className="text-base font-semibold">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BolgPost;
