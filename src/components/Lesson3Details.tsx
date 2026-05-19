import { motion } from "motion/react";
import { 
  ArrowRight, 
  ExternalLink, 
  Play, 
  Music, 
  Map, 
  Presentation, 
  FileText, 
  HelpCircle, 
  ListChecks,
  ChevronLeft,
  Target,
  Cpu,
  Smartphone,
  Wifi,
  ShoppingBag,
  Accessibility,
  History,
  Zap,
  BookOpen,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const objectives = [
  "أن يعدد التلميذ استخدامات الشبكات المختلفة",
  "أن يوضح التلميذ أمثلة عملية لتقنيات مثل البلوتوث",
  "أن يقدر التلميذ دور الشبكات في مساعدة ذوي الهمم"
];

const resources = [
  {
    title: "فيديو الشرح",
    link: "https://drive.google.com/file/d/1Pt8qQMtF3P2_Ueu5AinHoSAtvQbjHqHo/view?usp=drive_link",
    icon: <Play className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "الشرح الصوتي",
    link: "https://drive.google.com/file/d/12B8RQuXNuRvfvPUZtmojimqIysmQH4NG/view?usp=drive_link",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "العرض التقديمي",
    link: "https://docs.google.com/presentation/d/1bom9uR0OYCt7a3JqIsKIIJFZWALskw1y/edit?usp=drive_link&ouid=109705533842661106780&rtpof=true&sd=true",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "ورقة تلخيص الدرس",
    link: "https://drive.google.com/file/d/1QTG_i_71e9gYCqyW94HZbN1I-HzOaODy/view?usp=drive_link",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "الخريطة الذهنية",
    link: "https://drive.google.com/file/d/13KZSIEOUUCGCqyz_pTnImUSqfjPUBB0B/view?usp=drive_link",
    icon: <Map className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "التقرير",
    link: "https://docs.google.com/document/d/1p1iOUfaG5wolfPhYfXZggGDhGMk3wgA_CrW1wXUBn8M/edit?usp=drive_link",
    icon: <History className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "جدول البيانات",
    link: "https://drive.google.com/file/d/1Cm5gNnjsuFOZ4OnYl_Bs_mdEG775__j-/view?usp=drive_link",
    icon: <ListChecks className="w-6 h-6" />,
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    title: "بطاقات الدرس",
    link: "https://notebooklm.google.com/notebook/b1b00c29-03fc-40e7-9f94-70e773e659e6/artifact/bbd08925-d99d-4f3b-851a-10ab4f40e302",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "اختبار الدرس",
    link: "https://notebooklm.google.com/notebook/b1b00c29-03fc-40e7-9f94-70e773e659e6/artifact/0617e7e5-fa03-4a93-bb73-df67fa96450a",
    icon: <HelpCircle className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-500"
  }
];

const aiAnalysis = [
  {
    question: "كيف تساعد التقنيات ذوي الهمم؟",
    answer: "تساعدهم في تحقيق الاستقلالية من خلال قارئات الشاشات وردود الفعل الصوتية وطريقة برايل الرقمية، مما يسهل عليهم التعليم والتواصل."
  },
  {
    question: "ما المقصود بإنترنت الأشياء؟",
    answer: "هو اتصال الأجهزة المادية بالإنترنت، مما يسمح بالتحكم بها عن بُعد ومشاركة البيانات بينها وبين أجهزة أخرى."
  },
  {
    question: "كيف تعمل تقنية البلوتوث؟",
    answer: "تعمل على ربط الأجهزة لاسلكياً عبر موجات راديو قصيرة المدى لنقل البيانات والملفات والصوت."
  },
  {
    question: "كيف ترتبط الشبكات بالتجارة الإلكترونية؟",
    answer: "تعتبر الشبكات هي العمود الفقري للتجارة الإلكترونية، حيث تتيح منصات البيع والشراء والتحويلات المالية الآمنة عبر الإنترنت."
  }
];

export default function Lesson3Details() {
  const [openQA, setOpenQA] = useState<number | null>(null);

  return (
    <div dir="rtl" className="min-h-screen bg-background text-white selection:bg-accent/40 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">العودة للرئيسية</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg hidden md:block">منصة التعلم الذكي</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-accent/20 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6 inline-block">
              الدرس الثالث
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 italic">أنظمة التواصل الذكي</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              فهم التقنيات الحديثة والشبكات الذكية وتأثيرها في المجتمع وتعزيز قيم الشمولية والذكاء.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <Target className="text-accent" />
            أهداف الدرس
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex items-start gap-4 border-l-4 border-l-accent"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {i + 1}
                </div>
                <p className="text-lg font-semibold leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-surface/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white">المحتوى العلمي الأكاديمي</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-accent flex items-center gap-4">
                تبادل المعلومات
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                تستخدم الشركات الشبكات المغلقة والشبكات المفتوحة لتبادل المعلومات، ومن الأمثلة العملية على ذلك البنوك التي تعتمد بشكل أساسي على الشبكات المغلقة لضمان أقصى درجات الأمان والخصوصية لبيانات العملاء.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-blue-400 flex items-center gap-4">
                <Wifi className="w-8 h-8" />
                إنترنت الأشياء (IoT)
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                عبارة عن أجهزة متصلة بالإنترنت يمكن التحكم بها سواء كنت بداخل الغرفة أو خارجها. من أمثلة ذلك مكبرات الصوت الذكية، الثلاجات الذكية، وأنظمة الإضاءة التي يمكن إدارتها عبر الهاتف المحمول من أي مكان.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-purple-400 flex items-center gap-4">
                <Smartphone className="w-8 h-8" />
                تقنية البلوتوث
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                هي تقنية شبكية تقوم بربط الأجهزة المحمولة اللاسلكية عبر مدى قصير بغرض نقل البيانات بينها. تتيح تبادل الملفات والصوتيات بين الهواتف والحواسيب والسماعات دون الحاجة لأسلاك.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden border-r-8 border-r-green-500"
            >
              <h3 className="font-display text-3xl font-bold mb-6 text-green-400 flex items-center gap-4">
                <Accessibility className="w-8 h-8" />
                دعم ذوي الهمم
              </h3>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                  تساعد تقنيات مثل قارئات الشاشات ضعاف البصر من ذوي الهمم في كتابة الأبحاث على الكمبيوتر، وتزودهم بردود فعل صوتية لمساعدتهم على القراءة بطريقة برايل الرقمية.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                  تساهم الشبكات بشكل عام في منح ذوي الهمم مزيداً من الاستقلالية، سواء داخل المنزل (من خلال المنزل الذكي) أو في الأماكن العامة، مما يسهل دمجهم الفعال في المجتمع.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-orange-400 flex items-center gap-4">
                <ShoppingBag className="w-8 h-8" />
                التجارة الإلكترونية
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                تعتمد كلياً على الشبكات وتتمثل في التسوق عبر الإنترنت من خلال عمليات البيع والشراء. تتيح للمستهلكين الوصول للمنتجات والخدمات عالمياً بضغطة زر واحدة ومن أي مكان في العالم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources NotebookLM */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-6 italic">أدوات NotebookLM التعليمية</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              مجموعة من الأدوات والوسائط التعليمية التي تم إنشاؤها باستخدام NotebookLM لدعم فهم الدرس وتعزيز التفاعل التعليمي.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-right">
            {resources.map((res, i) => (
              <motion.a
                key={i}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass glass-hover p-6 rounded-3xl flex flex-col items-center text-center gap-4 group"
              >
                <div className={`p-4 rounded-2xl ${res.color} transition-transform group-hover:scale-110`}>
                  {res.icon}
                </div>
                <span className="font-bold text-lg">{res.title}</span>
                <div className="mt-auto pt-4 w-full border-t border-white/5 flex items-center justify-center gap-2 text-accent text-sm font-bold">
                  <span>فتح الرابط</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Canva Quiz */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-purple-900/40 to-surface border border-purple-500/30 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic text-white">تفاعل واختبر ذكاءك</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                نشاط تفاعلي ممتع صممناه لك عبر Canva لتطبيق ما تعلمته حول أنظمة التواصل الذكي.
              </p>
              <a 
                href="https://roomaai.my.canva.site/c96vp12nasaqf6j7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-purple-500 hover:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-purple-500/20 group"
              >
                <span>بدء النشاط التفاعلي</span>
                <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magic School AI Section */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 max-w-4xl text-right">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">تحليل الذكاء الاصطناعي (Magic School)</span>
            <h2 className="font-display text-4xl font-bold">مخرجات التحليل التعليمي</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] border border-accent/20 mb-8 bg-accent/5 backdrop-blur-xl"
          >
             <h4 className="font-display text-2xl font-bold mb-6 text-accent flex items-center gap-3 italic">
                <MessageSquare className="w-6 h-6" />
                تحليل تربوي معمق:
             </h4>
             <p className="text-lg text-gray-300 leading-relaxed font-sans font-medium">
                تم تحليل هذا الدرس بواسطة أدوات الذكاء الاصطناعي (Magic School) لاستخراج جوهر المفاهيم التكنولوجية. يركز الدرس على دمج التكنولوجيا في حياة الإنسان من منظور شمولى، حيث لا تقتصر الشبكات على نقل البيانات فحسب، بل تمتد لتكون جسراً لمنح الاستقلالية والعدالة التعليمية والعملية لكافة فئات المجتمع، مما يعزز مفاهيم المواطنة الرقمية الإيجابية.
             </p>
          </motion.div>

          <div className="space-y-4">
            {aiAnalysis.map((item, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-accent/30 transition-all">
                <button 
                  onClick={() => setOpenQA(openQA === i ? null : i)}
                  className="w-full p-6 text-right flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold group-hover:text-accent transition-colors">{item.question}</span>
                  <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${openQA === i ? '-rotate-90' : 'rotate-180'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openQA === i ? "auto" : 0, opacity: openQA === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20 font-sans">
                   {item.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
           <Link 
            to="/lesson/2" 
            className="px-8 py-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            الدرس السابق: الأجهزة الملحقة
          </Link>

          <Link 
            to="/" 
            className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            <History className="w-5 h-5" />
            الرئيسية
          </Link>

          <Link 
            to="/lesson/4" 
            className="px-8 py-5 rounded-2xl bg-accent hover:opacity-90 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            الدرس التالي: مشكلات الاتصال
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm font-sans">
          تصميم أكاديمي احترافي لمقرر الذكاء الاصطناعي - إعداد يوسف جمال حجران
        </p>
      </footer>
    </div>
  );
}
