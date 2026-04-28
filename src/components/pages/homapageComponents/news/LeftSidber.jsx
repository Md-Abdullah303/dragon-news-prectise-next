import Link from "next/link";
import React from "react";

const LeftSidber = ({ cetagoris, isActive }) => {
  //   console.log(cetagoris.news_category);
  //   console.log(isActive);
  return (
    <div>
      <h1 className="text-lg font-bold">All Caterogy</h1>
      <ul className="mt-5 flex flex-col gap-4">
        {cetagoris.news_category.map((news) => (
          <li
            className={`
                ${
                  isActive === news.category_id && "bg-gray-600 text-white"
                }
                 rounded-md  text-md hover:bg-gray-300 hover:text-black text-center font-bold`}
            key={news.category_id}
          >
            <Link className={`block  p-3`} href={`/cetagoris/${news.category_id}`}>{news.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidber;
