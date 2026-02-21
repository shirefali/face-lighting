import React from "react";
import Title from "../components/Title";

const Brands = () => {
  return (
    <section className="py-24 bg-slate-50" id="certificates">
      <Title
        className=" text-lg md:text-3xl"
        text="العلامات التجارية لدي Face Lighting"
      />
      <div className="container mx-auto px-6">
        <img src="assets/brands/brands.jpeg" alt="" />
      </div>
    </section>
  );
};

export default Brands;
