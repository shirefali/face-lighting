import Title from "../components/Title";

function AboutUs() {
  return (
    <section
      className="py-24 bg-white overflow-hidden text-center lg:text-right"
      id="about-us"
    >
      <Title text="من نحن" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div data-aos="fade-right" className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                أكثر من 10 أعوام من <br />
                <span className="text-[var(--main-color)]">
                  التميز في مجال الكهرباء{" "}
                </span>
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              نحن في{" "}
              <span className="font-bold text-[var(--main-color)]">
                {" "}
                Face Lighting{" "}
              </span>
              نضع خبرتنا الطويلة في خدمات الكهرباء لتقديم حلول مبتكرة وآمنة لكل
              مشروع، سواء كان سكني، تجاري، أو صناعي. التزامنا بالجودة والسلامة
              يجعلنا شركاء موثوقين لعملائنا في كل مرحلة من مراحل التنفيذ، جودة -
              أمان - سرعة وكل ما تحتاجه في الكهرباء.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border-r-4 border-blue-600">
                <div className="text-blue-600 text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-slate-900">تنفيذ ذكي</h4>
                  <p className="text-sm text-gray-500">
                    نستخدم أحدث التقنيات لتقليل الفاقد وتوفير الكهرباء.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border-r-4 border-yellow-500">
                <div className="text-yellow-500 text-2xl">🛡️</div>
                <div>
                  <h4 className="font-bold text-slate-900">أمان فائق</h4>
                  <p className="text-sm text-gray-500">
                    فحص دوري واختبارات جهد تضمن سلامة منشأتك.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000"
                alt="Electrician at work"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-600/10 rounded-full -z-0 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-yellow-500/10 rounded-full -z-0 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
