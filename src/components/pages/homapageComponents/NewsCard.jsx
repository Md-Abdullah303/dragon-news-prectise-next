import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 rounded-lg overflow-hidden shadow-sm">
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
      <div className="card-body space-y-2.5">
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

        <div className="">
          <p className="line-clamp-4 text-gray-600 text-md">{news.details}</p>
          <Link href={`/news/${news._id}`}>
            <p className="text-lg font-bold text-orange-400">Read More</p>
          </Link>
        </div>

        <hr className="text-gray-400" />

        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-lg"/>
            <FaStar className="text-yellow-400 text-lg"/>
            <FaStar className="text-yellow-400 text-lg"/>
            <FaStar className="text-yellow-400 text-lg"/>
            <FaStar className="text-yellow-400 text-lg"/>
            <span className="text-lg">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye  className="text-lg"/>
            <span className="text-lg">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
