import RightSidebar from "@/components/pages/homapageComponents/news/RightSidebar";
import { getNewsDatailsiId } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoReturnDownBackSharp } from "react-icons/io5";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDatailsiId(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDatailsiId(id);

  //   console.log(id, "params");
  //   console.log(news);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 pb-20">
      {/* news card  */}
      <div className="col-span-9 card bg-base-100 rounded-lg overflow-hidden  shadow-sm ">
        {/* author info */}
        <div className="flex items-center justify-between gap-5 py-3 px-6 bg-slate-200">
          <div className="flex items-center gap-3">
            <div className="">
              <Image
                src={news.author.img}
                alt={news.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="space-y-1.5">
              <h1 className="font-semibold">{news.author.name}</h1>
              <p className="text-xs text-gray-500">
                {news.author.published_date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h1>
              <CiShare2 />
            </h1>
            <h1>
              <CiBookmark />
            </h1>
          </div>
        </div>
        <div className="card-body flex flex-col  space-y-2.5">
          <h2 className="card-title text-xl">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.author.name}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>

          <div className="flex-1">
            <p className="text-gray-600 text-md">{news.details}</p>
          </div>

          <hr className="text-gray-400" />

          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <span className="text-lg">{news.rating.number}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-lg" />
              <span className="text-lg">{news.total_view}</span>
            </div>
          </div>

          <Link href={`/cetagoris/${news.category_id}`}>
            <p className="btn btn-ghost bg-orange-100 border-orange-400 text-orange-400 ">
              <IoReturnDownBackSharp className="text-2xl" /> Go back to All
              Category
            </p>
          </Link>
        </div>
      </div>
      {/* socail */}
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
