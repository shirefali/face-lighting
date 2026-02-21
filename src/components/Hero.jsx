import React from "react";
import Bulb from "./Bulb";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-104px)] text-center md:text-right flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2000"
          alt="Power Grid"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[slow-zoom_20s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="max-w-3xl">
          <div
            data-aos="fade-down"
            className="inline-block px-4 py-2 mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-[var(--main-color)] font-bold text-sm md:text-2xl tracking-widest animate-pulse"
          >
            نضيء مستقبلك بحلول ذكية
          </div>
          <h1
            data-aos="fade-left"
            className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6"
          >
            طاقة{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-yellow-400 to-orange-500">
              لا تنتهي
            </span>{" "}
            <br />
            لأعمال لا تتوقف
          </h1>
          <p
            data-aos="fade-right"
            className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl"
          >
            نحن في{" "}
            <span className="text-[var(--main-color)] font-bold underline">
              Face Lighting
            </span>{" "}
            نقدم حلولاً هندسية متكاملة في الأعمال الكهربائية والإضاءات الحديثة
            لراحة العين. أمان، كفاءة، وسرعة في التنفيذ لضمان استمرارية نجاحك.
          </p>
        </div>
        <div
          className="order-1 lg:order-2 flex justify-center align-center"
          data-aos="zoom-in"
        >
          <Bulb />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-400 to-transparent opacity-20 animate-shimmer"></div>
    </section>
  );
};

export default Hero;
