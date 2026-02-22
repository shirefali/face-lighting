import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-[var(--main-color)] pb-2">
              موقعنا
            </h3>
            <div className="flex items-start gap-3 ">
              <div className="flex items-center flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="text-[var(--main-color)] text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <p className="text-gray-300 text-center md:text-right">
                    دمياط، شارع نافع، <br />
                    بجوار الاستاد.
                  </p>
                </div>
                <div className="flex items-start gap-3 ">
                  <div className="text-[var(--main-color)] text-2xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <p className="text-gray-300 text-center md:text-right">
                    دمياط الجديدة، شارع 17 ،<br />
                    بجوار لي صالون.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-[var(--main-color)] pb-2">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 group cursor-pointer">
                <a
                  href="tel:+201016773028"
                  className="text-gray-300 group-hover:text-white transition-colors"
                >
                  201016773029+
                </a>
                <div className="text-[var(--main-color)] bg-slate-900 p-2 rounded-lg">
                  <FaPhoneAlt />
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 group cursor-pointer">
                <a
                  href="https://wa.me/201220403484"
                  className="text-gray-300 group-hover:text-white transition-colors"
                >
                  201220403484+
                </a>
                <div className="text-[#25d366] bg-slate-900 p-2 rounded-lg">
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div data-aos="zoom-in-down" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-[var(--main-color)]">
                Face Lighting
              </span>
              <img src="/assets/logo/logo2.png" alt="Logo" className="w-12" />
            </div>
            <p className=" mb-6 text-center md:text-right">
              صفحاتنا على السوشيال ميديا
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mohamed.khedr.50552?locale=ar_AR"
                className="p-3 bg-slate-900 rounded-full hover:bg-[#1877f2] transition-colors text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.behance.net/mohammedkhedr7"
                className="p-3 bg-slate-900 rounded-full hover:bg-[#222] transition-colors text-xl"
              >
                <FaBehance />
              </a>
              <a
                href="https://www.tiktok.com/@facelight7"
                className="p-3 bg-slate-900 rounded-full hover:bg-[#cc0018] transition-colors text-xl"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-950 mt-16 pt-8 text-center">
          <p className=" text-sm">
            جميع حقوق الطبع والنشر محفوظة لدى{" "}
            <span className="text-[var(--main-color)] font-bold">
              Face Lighting
            </span>{" "}
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
