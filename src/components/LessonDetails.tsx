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
  CheckCircle2,
  BookOpen,
  Cpu,
  Globe,
  Shuffle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const objectives = [
  "أن يميز التلميذ بين أنواع الشبكات",
  "أن يرسم التلميذ مخططاً مبسطاً لشبكة محلية",
  "أن يقدر التلميذ أهمية الاتصال بين الأجهزة والأشخاص"
];

const resources = [
  {
    title: "فيديو الشرح",
    link: "https://drive.google.com/file/d/1sZ4OoLlqC2TA7_PiJrk8cu1uSmTZxoSg/view?usp=sharing",
    icon: <Play className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "الشرح الصوتي",
    link: "https://drive.google.com/file/d/1K9waxvcIGpQdi8oUdYn_Ngf1LT8hUJ92/view?usp=drive_link",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "الخريطة الذهنية",
    link: "https://drive.google.com/file/d/1kLPK1--Sydvgo2ldqKSf2nC0SJH_kbjW/view?usp=sharing",
    icon: <Map className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "العرض التقديمي",
    link: "https://docs.google.com/presentation/d/1bOJRzxaSZ1puOQr1nbiifeLaCbf95TCS/edit?usp=sharing&ouid=109705533842661106780&rtpof=true&sd=true",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "ورقة التلخيص",
    link: "https://drive.google.com/file/d/10KdAUCV_fs43IwuVzJgY8qHvrohV6lFb/view?usp=sharing",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "اختبار NotebookLM",
    link: "https://notebooklm.google.com/notebook/048d60a2-ecba-487c-938c-e053bc5196dc/artifact/82a73590-4074-4826-8dd1-7593b8de08e1",
    icon: <HelpCircle className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "بطاقات الشبكات",
    link: "https://notebooklm.google.com/notebook/048d60a2-ecba-487c-938c-e053bc5196dc/artifact/f35d86c8-9766-4964-b449-f1247c9cf4a2",
    icon: <ListChecks className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "جدول البيانات",
    link: "https://drive.google.com/file/d/1ufSflXX7ryBRh07Nvka2brH2Vz5HiuKC/view?usp=sharing",
    icon: <Shuffle className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-500"
  }
];

const quizQuestions = [
  "ما تعريف شبكة الكمبيوتر؟",
  "ما معنى الشبكة المحلية؟",
  "ما الفرق بين الإنترنت والشبكة المحلية؟",
  "كيف تساعد الشبكات في التواصل؟"
];

export default function LessonDetails() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

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
              <BookOpen className="text-white w-5 h-5" />
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
              الدرس الأول
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6">الشبكات وأنواعها</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              فهم أساسيات الشبكات والاتصال الرقمي وكيفية انتقال المعلومات بين الأجهزة حول العالم.
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic">الشرح التفصيلي للدرس</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-500 font-sans">نستعرض فيما يلي المفاهيم الأساسية للشبكات والفرق الجوهري بين أنواعها المختلفة.</p>
          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-accent flex items-center gap-4">
                <Cpu className="w-8 h-8" />
                شبكة الكمبيوتر
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                عبارة عن ربط جهازين كمبيوتر أو أكثر لتبادل البيانات أو المعلومات. تتيح هذه الشبكة للأجهزة التواصل مع بعضها البعض ومشاركة الموارد المختلفة.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-blue-400 flex items-center gap-4">
                <Globe className="w-8 h-8" />
                الإنترنت
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                هو شبكة تربط أجهزة الكمبيوتر والأشخاص في جميع أنحاء العالم. يعتبر الإنترنت "الشبكة الأم" التي تضم آلاف الشبكات الفرعية وتسمح بالتواصل العالمي اللحظي.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-green-400 flex items-center gap-4">
                <Target className="w-8 h-8" />
                الشبكة المحلية (LAN)
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                عبارة عن جهازين كمبيوتر متصلين بطابعة تكون في المساحات المحدودة مثل المنزل أو المدرسة أو مكتب صغير، حيث تهدف لمشاركة الموارد في نطاق جرافي ضيق.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-purple-400 flex items-center gap-4">
                <Globe className="w-8 h-8 opacity-50" />
                الشبكة العنكبوتية (WWW)
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                جزء من شبكة الإنترنت تتكون من صفحات ويب يتم التنقل بينهم باستخدام الروابط التشعبية. هي الواجهة المرئية التي نستخدمها لتصفح المعلومات.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-yellow-400 flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8" />
                الإنترانت
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                هي شبكة تقتصر على الأشخاص الذين تربطهم ضمن عمل أو مدرسة أو مؤسسة. توفر بيئة تواصل آمنة وخاصة لأعضاء المؤسسة فقط بعيداً عن الإنترنت العام.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              <h3 className="font-display text-3xl font-bold mb-6 text-red-400 flex items-center gap-4">
                <Shuffle className="w-8 h-8" />
                الشبكة المغلقة
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium">
                مثل شبكة معمل الحاسب الآلي الموجودة بالمدرسة، وتكون أجهزة الحاسب متصلة بأسلاك (Cables). تتميز بالأمان العالي والتحكم الكامل في الأجهزة المتصلة.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-accent/20 to-surface border border-accent/30 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic text-white">اختبر معلوماتك الآن</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                لقد قمنا بتصميم اختبار تفاعلي ممتع على منصة Canva بأسلوب عصري لقياس مدى استيعابك لمفاهيم الشبكات.
              </p>
              <a 
                href="https://roomaai.my.canva.site/c96sbk5gw9v0n94n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-accent hover:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-accent/20 group"
              >
                <span>ابدأ الاختبار التفاعلي</span>
                <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magic School Section */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">الذكاء الاصطناعي (Magic School)</span>
            <h2 className="font-display text-4xl font-bold">أسئلة معتمدة على النص</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {quizQuestions.map((q, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                  className="w-full p-6 text-right flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold">{q}</span>
                  <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${openQuestion === i ? '-rotate-90' : 'rotate-180'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openQuestion === i ? "auto" : 0, opacity: openQuestion === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20">
                    يمكنك العثور على الإجابة في المحتوى العلمي أعلاه، حيث تم تصميم هذه الأسئلة آلياً لمساعدتك على التركيز على النقاط الجوهرية في الدرس.
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-6">
          <Link 
            to="/" 
            className="px-10 py-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للرئيسية
          </Link>
          <Link 
            to="/lesson/2" 
            className="px-10 py-5 rounded-2xl bg-accent hover:opacity-90 font-bold transition-all flex items-center gap-3 shadow-lg shadow-accent/20"
          >
            الدرس التالي
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
