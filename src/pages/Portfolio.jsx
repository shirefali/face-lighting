import React, { useState } from "react";
import Title from "../components/Title";

const Portfolio = () => {
  const allProjects = [
    {
      id: 1,
      img: "assets/portfolio/14.jpeg",
    },
    {
      id: 2,
      img: "assets/portfolio/13.jpeg",
    },
    {
      id: 3,
      img: "assets/portfolio/9.jpeg",
    },
    {
      id: 4,
      img: "assets/portfolio/6.jpeg",
    },
    {
      id: 5,
      img: "assets/portfolio/8.jpeg",
    },
    {
      id: 6,
      img: "assets/portfolio/10.jpeg",
    },
    {
      id: 7,
      img: "assets/portfolio/15.jpeg",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCount = showAll ? allProjects.length : 3;

  return (
    <section className="py-24 bg-white" id="portfolio">
      <Title text="أعمالنا" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <div
              data-aos="flip-right"
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-[var(--main-color)] font-semibold mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  تم التنفيذ بأعلى معايير الجودة
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer px-12 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-[var(--main-color)] transition-all duration-300 shadow-xl hover:shadow-[var(--main-color)]/20 active:scale-95"
          >
            {showAll ? ` عرض الأقل` : ` رؤية المزيد من أعمالنا ...`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
