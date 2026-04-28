import LeftSidber from "@/components/pages/homapageComponents/news/LeftSidber";
import RightSidebar from "@/components/pages/homapageComponents/news/RightSidebar";
import { getCategoris, getNewsByCategoriId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const cetagoris = await getCategoris();

  const news = await getNewsByCategoriId(id);
  return (
    <div className="container mt-10 mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <LeftSidber cetagoris={cetagoris} isActive={id} />
      </div>

      <div className="col-span-6 space-y-3.5">
        <h1>Dragon News Home</h1>
        <div className="space-y-4">
          {news.length > 0
            ? news.map((n) => (
                <div key={n._id} className="p-4 border">
                  {n.title}
                </div>
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
