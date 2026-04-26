import React from "react";
import Marquee from "react-fast-marquee";



const breakingNews = [
  {
    id: 1,
    title: "Massive earthquake shakes coastal region",
  },
  {
    id: 2,
    title: "Government announces new education policy",
  },
  {
    id: 3,
    title: "Tech company launches revolutionary AI tool",
  },
  {
    id: 4,
    title: "Heavy rainfall causes flooding in several areas",
  },
  {
    id: 5,
    title: "International football tournament kicks off today",
  },
];

const BreakingNews = () => {
  return (
    <div className="bg-amber-50 flex items-center justify-between container mx-auto py-4 px-2 rounded-lg">
      <button className="btn bg-red-500 text-white">Latest</button>
      <Marquee speed={80} pauseOnHover={true}>
        {
            breakingNews.map(news=> <span className="ml-10" key={news.id}>{news.title}</span>)
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
