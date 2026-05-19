import { motion } from "motion/react";
import { 
  BookOpen, 
  Target, 
  Cpu, 
  Lightbulb, 
  Network, 
  Monitor, 
  Smartphone, 
  AlertCircle, 
  FileText,
  Mail,
  Users,
  ChevronLeft,
  Search,
  Layout,
  Layers,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "عن المشروع", href: "#about" },
  { name: "الدروس", href: "#lessons" },
  { name: "الأدوات", href: "#tools" },
  { name: "تواصل", href: "#contact" },
];

const aboutCards = [
  {
    title: "هدف المشروع",
    description: "تقديم تجربة تعليمية ذكية ومبسطة لطلاب الصف الخامس الابتدائي في مجالات التكنولوجيا الحديثة.",
    icon: <Target className="w-8 h-8 text-accent" />,
  },
  {
    title: "توظيف الذكاء الاصطناعي",
    description: "استخدام تقنيات الذكاء الاصطناعي لتخصيص المحتوى التعليمي وجعله أكثر تفاعلية وجاذبية.",
    icon: <Cpu className="w-8 h-8 text-accent" />,
  },
  {
    title: "تحسين تجربة التعلم",
    description: "خلق بيئة تعليمية رقمية تتناسب مع مهارات القرن الحادي والعشرين وتدعم التعلم الذاتي.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
  },
  {
    title: "التعلم التفاعلي",
    description: "دمج الوسائط المتعددة والأنشطة التفاعلية لضمان وصول المعلومة بشكل شيق ومستدام.",
    icon: <Layout className="w-8 h-8 text-accent" />,
  },
];

const lessons = [
  {
    id: 1,
    title: "الشبكات وأنواعها",
    description: "استكشف كيف تترابط الحواسيب معاً وأنواع الشبكات المختلفة التي نستخدمها يومياً.",
    icon: <Network className="w-10 h-10" />,
    link: "/lesson/1"
  },
  {
    id: 2,
    title: "الأجهزة الملحقة بالحاسب",
    description: "تعرف على الأجهزة التي تزيد من كفاءة حاسوبك وكيفية توصيلها واستخدامها.",
    icon: <Monitor className="w-10 h-10" />,
    link: "/lesson/2"
  },
  {
    id: 3,
    title: "أنظمة التواصل الذكي",
    description: "فهم التقنيات الحديثة والشبكات الذكية مثل إنترنت الأشياء والبلوتوث وتأثيرها في المجتمع.",
    icon: <Smartphone className="w-10 h-10" />,
    link: "/lesson/3"
  },
  {
    id: 4,
    title: "مشكلات الاتصال بالإنترنت وخطوات حلها",
    description: "تعلم اكتشاف المشكلات التقنية ومعالجتها بخطوات عملية.",
    icon: <AlertCircle className="w-10 h-10" />,
    link: "/lesson/4"
  },
  {
    id: 5,
    title: "الملفات الرقمية والتعامل معها",
    description: "تعرف على كيفية تنظيم ملفاتك واستخدام المجلدات والوسائط الرقمية بذكاء.",
    icon: <FileText className="w-10 h-10" />,
    link: "/lesson/5"
  },
];

const tools = [
  {
    name: "NotebookLM",
    description: "مساعد بحث وتعلم يعتمد على الذكاء الاصطناعي لفهم وتحليل المصادر العلمية.",
    purpose: "تلخيص الدروس وإنشاء خرائط مفاهيم ذكية.",
    icon: <Search className="w-12 h-12 text-accent" />,
  },
  {
    name: "Magic School",
    description: "منصة رائدة لتوليد المحتوى التعليمي والخطط الدراسية باستخدام الذكاء الاصطناعي.",
    purpose: "إعداد الأنشطة التفاعلية والتقييمات الذكية.",
    icon: <Sparkles className="w-12 h-12 text-accent" />,
  },
  {
    name: "Canva",
    description: "أداة التصميم الأشهر لإنشاء العروض التقديمية والوسائط التعليمية البصرية.",
    purpose: "اعداد الانشطة التفاعلية و التقييمات الذكية",
    icon: <Layers className="w-12 h-12 text-accent" />,
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen selection:bg-accent/40 bg-background text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-background/80 backdrop-blur-md shadow-lg shadow-black/20' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden md:block text-white">مقرر الذكاء الاصطناعي والنظم الخبيرة</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-sans text-sm font-medium text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -mr-64 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -ml-48 -mb-32"></div>

        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">الذكاء الاصطناعي والنظم الخبيرة</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
              مشروع تصميم تجربة تعليمية <br />
              <span className="text-accent italic">مدعومة بالذكاء الاصطناعي</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              مشروع أكاديمي متطور يهدف إلى دمج أدوات الذكاء الاصطناعي الحديثة في العملية التعليمية لطلاب المرحلة الابتدائية، 
              لخلق تجربة تعلم تفاعلية، مرنة، وشخصية تتناسب مع تطلعات الجيل الجديد.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right bg-surface/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">إعداد الطالب</span>
                <p className="font-display font-bold text-xl text-accent">يوسف جمال عبد الغني حجران</p>
                <p className="text-gray-400 text-sm">برنامج معلم حاسب آلي - الفرقة الثالثة</p>
              </div>
              <div className="flex flex-col gap-2 border-r md:border-r-0 md:border-x border-white/10 px-0 md:px-8">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">تحت إشراف</span>
                <p className="font-display font-semibold text-lg text-white">د. رانيا كساب</p>
                <p className="font-display font-semibold text-lg text-white">د. محمود جبريل</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">الصف المستهدف</span>
                <p className="font-display font-semibold text-lg text-white">الصف الخامس الابتدائي</p>
                <p className="text-gray-400 text-sm">الفصل الدراسي الثاني</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#lessons" className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                استعراض الدروس
              </a>
              <a href="#about" className="bg-surface border border-white/10 hover:border-accent/40 px-8 py-4 rounded-2xl font-bold transition-all text-white flex items-center gap-3">
                <Users className="w-5 h-5" />
                عن المشروع
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-surface/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 px-4">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">الرؤية والأهداف</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">فلسفة المشروع التعليمية</h2>
              <p className="text-gray-400 leading-relaxed font-sans text-lg">
                نسعى من خلال هذا المشروع إلى تحويل المحتوى التعليمي "الجامد" إلى مادة حية تتفاعل مع الطالب، 
                مستخدمين في ذلك أحدث ما توصلت إليه تكنولوجيا النظم الخبيرة والذكاء الاصطناعي التوليدي.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass glass-hover p-8 rounded-[2.5rem] relative group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-accent/5 inline-block group-hover:bg-accent/20 transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">اكتشف المعرفة</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white">المحتوى التعليمي المقرر</h2>
            <p className="text-gray-500 font-sans text-lg">
              خمسة دروس أساسية تم تصميمها بعناية لتغطية أساسيات تكنولوجيا المعلومات والاتصالات بطريقة تناسب عقلية طالب الصف الخامس.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass glass-hover p-1 rounded-[3rem] overflow-hidden"
              >
                <div className="p-8 h-full bg-gradient-to-br from-surface to-transparent rounded-[2.8rem] flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                      {lesson.icon}
                    </div>
                    <span className="text-4xl font-display font-black text-white/5 group-hover:text-accent/20 transition-colors">0{lesson.id}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors text-white">{lesson.title}</h3>
                  <p className="text-gray-400 text-sm mb-10 leading-relaxed font-sans">{lesson.description}</p>
                  <div className="mt-auto">
                    {lesson.link ? (
                      <Link to={lesson.link} className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                        <span>عرض تفاصيل الدرس</span>
                        <ChevronLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    ) : (
                      <button className="flex items-center gap-2 text-white/50 cursor-not-allowed font-bold text-sm">
                        <span>قريباً...</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-surface/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">التقنيات المستخدمة</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white">محرك الذكاء في مشروعنا</h2>
              <p className="text-gray-400 font-sans leading-relaxed mb-8">
                اعتمدنا على مجموعة من أقوى الأدوات التعليمية المبنية على نماذج الذكاء الاصطناعي لضمان أعلى جودة تعليمية وأفضل دقة في المعلومات.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-1 bg-accent rounded-full"></div>
                <div className="w-4 h-1 bg-white/10 rounded-full"></div>
                <div className="w-4 h-1 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 rounded-2xl bg-accent/5 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{tool.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed font-sans">{tool.description}</p>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block mb-2">الغرض التعليمي</span>
                    <p className="text-accent text-sm font-semibold italic">{tool.purpose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-right">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white italic">مقرر الذكاء الاصطناعي والنظم الخبيرة</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-sans text-sm">
                مشروع تخرج مصغر لمقرر الذكاء الاصطناعي والنظم الخبيرة، يجسد رؤية مستقبلية للتعليم الرقمي في مصر والعالم العربي.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-6 text-white text-sm uppercase tracking-widest">روابط سريعة</h4>
              <ul className="flex flex-col gap-4 text-gray-500 text-sm font-sans">
                <li><a href="#hero" className="hover:text-accent transition-colors">الصفحة الرئيسية</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">عن المشروع التعليمي</a></li>
                <li><a href="#lessons" className="hover:text-accent transition-colors">منهج الصف الخامس</a></li>
                <li><a href="#tools" className="hover:text-accent transition-colors">أدوات الذكاء الاصطناعي</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-6 text-white text-sm uppercase tracking-widest">الدعم الأكاديمي</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-xs text-gray-400 font-sans">بإشراف نخبة من أساتذة الكلية</span>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-xs text-gray-400 font-sans">تكنولوجيا التعليم والذكاء الاصطناعي</span>
                  <Cpu className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs font-sans">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لـ <span className="text-white/40 font-bold">يوسف جمال حجران</span>
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">تم التصميم بكل ثقة لمقرر النظم الخبيرة</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
