import LeftSidber from "@/components/pages/homapageComponents/news/LeftSidber";
import RightSidebar from "@/components/pages/homapageComponents/news/RightSidebar";
import NewsCard from "@/components/pages/homapageComponents/NewsCard";
import { getCategoris, getNewsByCategoriId } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News - Home",
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const cetagoris = await getCategoris();

  const news = await getNewsByCategoriId(id);
  return (
    <div className="container mt-10 mx-auto grid grid-cols-12 gap-5 pb-20">
      <div className="col-span-3">
        <LeftSidber cetagoris={cetagoris} isActive={id} />
      </div>

      <div className="col-span-6 space-y-3.5">
        <h1 className="text-xl font-bold">Dragon News Home</h1>
        <div className="space-y-6">
          {news.length > 0
            ? news.map((n) => (
                <NewsCard key={n._id} news={n}></NewsCard>
              ))
            : "Not Found News"}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
