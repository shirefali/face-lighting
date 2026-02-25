import React from "react";
import Title from "../components/Title";

const Brands = () => {
  return (
    // <section className="py-24 bg-slate-50" id="certificates">
    //   <Title
    //     className=" text-lg md:text-3xl"
    //     text="البراندات المستخدمة لدي Face Lighting"
    //   />
    //   <div className="container mx-auto px-6">
    //     <img src="assets/brands/brands.jpeg" alt="" />
    //   </div>
    // </section>
    <section className="py-24 bg-slate-50" id="brands">
      <Title
        className="text-lg md:text-3xl text-center mb-12"
        text="البرندات المستخدمة لدىFace Lighting"
      />

      <div className="container mx-auto px-6">
        {/* جعلنا الصورة تأخذ عرض الـ container بالكامل ليطابق عرض شبكة الشهادات */}
        <div
          data-aos="fade-up"
          className="bg-white p-2 md:p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
        >
          <img
            src="/assets/brands/brands.jpeg"
            alt="Our Brands"
            className="w-full h-auto rounded-xl object-cover shadow-inner"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
