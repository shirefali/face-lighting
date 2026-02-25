import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "الرئيسية", ref: sections.heroRef },
    { name: "من نحن", ref: sections.aboutRef },
    { name: "خدماتنا", ref: sections.servicesRef },
    { name: "أعمالنا", ref: sections.portfolioRef },
    { name: "الشهادات", ref: sections.certificatesRef },
    { name: "تواصل معنا", ref: sections.footerRef },
  ];

  // 2. لوجيك إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={menuRef}
      className="bg-white shadow-md sticky top-0 z-50 py-5 font-cairo"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center flex-row-reverse">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection(sections.heroRef)}
          >
            <span className="text-xl lg:text-2xl font-bold text-[var(--main-color)]">
              Face Lighting
            </span>
            <img
              src="/assets/logo/logo2.png"
              className="w-18 mr-1"
              alt="logo"
            />
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className="text-gray-700 hover:text-[var(--main-color)] font-semibold cursor-pointer transition-colors duration-300 text-sm lg:text-xl"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 cursor-pointer hover:text-[var(--main-color)] transition-colors focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="hover:text-red-500"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 flex flex-col items-stretch">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="w-full text-right text-gray-700 hover:text-[var(--main-color)] hover:bg-gray-50 font-bold cursor-pointer transition-all px-4 py-4 text-lg rounded-xl"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
