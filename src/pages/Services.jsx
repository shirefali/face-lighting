import React from "react";
import Title from "../components/Title";
const Services = () => {
  const services = [
    {
      icon: "💡",
      title: "تصميم وتنفيذ الإضاءة الذكية",
      description:
        "نحول مساحتك إلى لوحة فنية تجمع بين الجمال والراحة النفسية (Lighting Comfort) باستخدام أحدث أنظمة التحكم الذكي.",
    },
    {
      icon: "⚡",
      title: "تأسيس كهرباء وتخطيط الأحمال بدقة",
      description:
        "بنية تحتية كهربائية صلبة وآمنة، نضمن لك الكفاءة المطلقة وتوزيع الحمل لتفادي أي أعطال مستقبلية.",
    },
    {
      icon: "🛠️",
      title: "صيانة وتشغيل وحلول كهربائية تصنع الفرق",
      description:
        "فريق فني جاهز لضمان استمرارية عمل منشأتك على مدار الساعة، فحص دوري وسرعة استجابة فائقة.",
    },
    {
      icon: "🌍",
      title: "صنع طاقة المستقبل بثقة وجودة",
      description:
        "نوفّر حلولًا كهربائية متكاملة تبدأ من دراسة المشروع وتخطيط الأحمال بدقة، مرورًا بأعمال التأسيس والتشطيب، وحتى تسليم مشروع متكامل يلبّي أعلى توقعات الجودة.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 text-center" id="services">
      <Title text="خدماتنا" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              data-aos="flip-left"
              data-aos-delay={index * 200}
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 group border border-gray-100"
            >
              <div className="text-5xl mb-6 group-hover:scale-140 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-[.5s] group-hover:text-[var(--main-color)] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed md:text-2xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
