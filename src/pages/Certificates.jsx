import React, { useState } from "react";
import Title from "../components/Title";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certImages = [
    "/assets/certificates/certificate1.jpeg",
    "/assets/certificates/certificate2.jpeg",
    "/assets/certificates/certificate3.png",
    "/assets/certificates/certificate4.jpeg",
  ];

  return (
    <section className="py-24 bg-slate-50" id="certificates">
      <Title text="الشهادات" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {certImages.map((src, index) => (
            <div
              data-aos="flip-right"
              key={index}
              className="bg-white rounded-2xl cursor-pointer shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group overflow-hidden"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute -top-10 -right-10 text-4xl font-bold text-white hover:text-red-500 transition cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
