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
  History,
  Zap,
  BookOpen,
  Search,
  Lightbulb,
  UserPlus,
  Compass,
  AlertCircle,
  WifiOff,
  Download,
  MousePointer2,
  CheckCircle2,
  FileQuestion
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const objectives = [
  "أن يذكر التلميذ خطوات حل مشكلات الكمبيوتر",
  "أن يطبق التلميذ خطوات عملية لمعالجة بطء الجهاز أو الإنترنت",
  "أن يتحلى التلميذ بالصبر عند مواجهة المشكلات التقنية"
];

const resources = [
  {
    title: "فيديو الشرح",
    link: "https://drive.google.com/file/d/1tO-PKU8Hc0UK745teizAdWy6y0fjvRJ7/view?usp=drive_link",
    icon: <Play className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "الشرح الصوتي",
    link: "https://drive.google.com/file/d/1A8gyS7-6N8GaJyi3o9suKaj2UAxtgbsg/view?usp=drive_link",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "العرض التقديمي",
    link: "https://docs.google.com/presentation/d/14pjC9cwGSAIrXzjzKxAQb_Jj6AwKFQqh/edit?usp=drive_link&ouid=109705533842661106780&rtpof=true&sd=true",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "الخريطة الذهنية",
    link: "https://drive.google.com/file/d/153RRve_pYudbavBiENNPIKa9WStSydn_/view?usp=drive_link",
    icon: <Map className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "ورقة تلخيص الدرس",
    link: "https://drive.google.com/file/d/1muX0pVJ-tkZUSgr2ONkZaL3uy4G1p-Pa/view?usp=drive_link",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "التقرير",
    link: "https://docs.google.com/document/d/18dAORtjD9f-qJY0M-BonmCnZI1WqrrBDMuhQuBBAkv0/edit?usp=drive_link",
    icon: <History className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "جدول البيانات",
    link: "https://drive.google.com/file/d/1upZjY59OMidhu0M_ZdCTKqArXHaFmL5V/view?usp=drive_link",
    icon: <ListChecks className="w-6 h-6" />,
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    title: "اختبار الدرس",
    link: "https://notebooklm.google.com/notebook/ba9b48d5-4252-487b-8f40-eb86efc62bae/artifact/a3493cce-c91b-4f83-b957-1924b552def7",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "بطاقات الدرس",
    link: "https://notebooklm.google.com/notebook/ba9b48d5-4252-487b-8f40-eb86efc62bae/artifact/a3493cce-c91b-4f83-b957-1924b552def7",
    icon: <HelpCircle className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-500"
  }
];

export default function Lesson4Details() {
  const [showAnswer, setShowAnswer] = useState(false);

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
            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6 inline-block text-right">
              الدرس الرابع
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 italic">مشكلات الاتصال بالإنترنت وخطوات حلها</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              تعلم اكتشاف المشكلات التقنية ومعالجتها بخطوات عملية ومنهجية لضمان استمرارية تعلمك الرقمي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3 italic">
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
          <div className="text-center mb-20 text-right">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white flex items-center gap-4 justify-end">
                <Compass className="w-10 h-10 text-accent" />
                خطوات اكتشاف المشكلات في الكمبيوتر وحلها
            </h2>
            <div className="w-24 h-1.5 bg-accent mr-0 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">1</div>
                 <h3 className="font-display text-2xl font-bold text-white">تحديد المشكلة</h3>
              </div>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                يجب أولاً تحديد المشكلة التي تواجه المستخدم بدقة، وفهم سبب حدوثها وما إذا كانت تتعلق بالبرمجيات أو الأجهزة.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-[3rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">2</div>
                 <h3 className="font-display text-2xl font-bold text-white">التفكير في طرق حل مختلفة</h3>
              </div>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                التفكير في أكثر من طريقة مناسبة لحل المشكلة، حيث أن المشكلة التقنية الواحدة قد يكون لها حلول متعددة.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[3rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">3</div>
                 <h3 className="font-display text-2xl font-bold text-white">دراسة الحلول المحتملة</h3>
              </div>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                تجربة الحلول الممكنة واحداً تلو الآخر، واختيار الأنسب منها بناءً على النتائج التي تظهر لكل حل.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-10 rounded-[3rem] border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">4</div>
                 <h3 className="font-display text-2xl font-bold text-white">طلب المساعدة</h3>
              </div>
              <p className="text-lg text-gray-400 font-sans leading-relaxed">
                إذا لم تنجح كل الحلول المقترحة، يتم الاستعانة بذوي الخبرة مثل المعلم في المدرسة أو ولي الأمر في المنزل.
              </p>
            </motion.div>
          </div>

          <div className="text-center mb-20 text-right">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white flex items-center gap-4 justify-end">
                <AlertCircle className="w-10 h-10 text-red-500" />
                المشكلات التقنية الشائعة وحلولها
            </h2>
            <div className="w-24 h-1.5 bg-red-500 mr-0 rounded-full"></div>
          </div>

          <div className="space-y-8">
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[3.5rem] border-r-8 border-r-blue-500"
             >
                <h3 className="font-display text-3xl font-bold mb-6 text-blue-400 flex items-center gap-4 italic underline underline-offset-8">
                    <Cpu className="w-8 h-8" />
                    بطء جهاز الكمبيوتر
                </h3>
                <div className="font-sans text-xl text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl">
                    يمكن حل المشكلة بإعادة تشغيل الجهاز أو تحديث التطبيقات أو حذف البرامج غير الضرورية التي تستهلك ذاكرة الجهاز.
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[3.5rem] border-r-8 border-r-green-500"
             >
                <h3 className="font-display text-3xl font-bold mb-6 text-green-400 flex items-center gap-4 italic underline underline-offset-8">
                    <Search className="w-8 h-8" />
                    بطء المتصفح
                </h3>
                <div className="font-sans text-xl text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl">
                    يتم فحص إشارة الواي فاي، وتحديث التطبيقات والمتصفح، والتأكد من إغلاق التبويبات غير المستخدمة.
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[3.5rem] border-r-8 border-r-orange-500"
             >
                <h3 className="font-display text-3xl font-bold mb-6 text-orange-400 flex items-center gap-4 italic underline underline-offset-8">
                    <Download className="w-8 h-8" />
                    بطء التحميل
                </h3>
                <div className="font-sans text-xl text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl">
                    إعادة تشغيل الكمبيوتر والراوتر أو التأكد من سرعة الإنترنت المقدمة من الشركة، أو تجربة تغيير سلك الإنترنت.
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[3.5rem] border-r-8 border-r-red-500"
             >
                <h3 className="font-display text-3xl font-bold mb-6 text-red-500 flex items-center gap-4 italic underline underline-offset-8">
                    <WifiOff className="w-8 h-8" />
                    عدم وجود اتصال بالإنترنت
                </h3>
                <div className="font-sans text-xl text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl">
                    التأكد من توصيل الراوتر وإعادة تشغيله، أو تجربة سلك إيثرنت جديد، أو التواصل مع مزود الخدمة (ISP) للدعم.
                </div>
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
            className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-indigo-900/40 to-surface border border-indigo-500/30 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic text-white underline underline-offset-[12px] decoration-indigo-500/50">تحدي حل المشكلات</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                اختبر مهاراتك في تشخيص وإصلاح المشكلات التقنية من خلال نشاطنا التفاعلي المصمم عبر Canva.
              </p>
              <a 
                href="https://yousef10.my.canva.site/c96mv4wwaphaqxcb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-indigo-500 hover:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-indigo-500/20 group"
              >
                <span>ابدأ النشاط التفاعلي</span>
                <MousePointer2 className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magic School AI Worksheet */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 max-w-4xl text-right">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">مخرجات الذكاء الاصطناعي (Magic School)</span>
            <h2 className="font-display text-4xl font-bold italic">ورقة عمل رقمية تفاعلية</h2>
          </div>

          <div className="glass rounded-[3rem] p-10 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl"></div>
            
            <div className="space-y-12">
               {/* Section 1: Fill in blanks */}
               <div className="space-y-6">
                 <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <FileQuestion className="w-6 h-6" />
                    أكمل الفراغات:
                 </h4>
                 <div className="space-y-4 font-sans text-lg text-gray-300">
                    <p className="bg-white/5 p-4 rounded-xl border border-white/5">1. عند حل أي مشكلة، يجب أولاً _________ المشكلة ومعرفة سببها.</p>
                    <p className="bg-white/5 p-4 rounded-xl border border-white/5">2. لتقوية اتصال الإنترنت الضعيف يمكن تجربة استخدام _________.</p>
                 </div>
               </div>

               {/* Section 2: Multiple Choice */}
               <div className="space-y-6">
                 <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <ListChecks className="w-6 h-6" />
                    اختر الإجابة الصحيحة:
                 </h4>
                 <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
                    <p className="font-bold text-white mb-4">ما هو الحل المقترح عند بطء جهاز الكمبيوتر؟</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["إيقاف تشغيل الشاشة", "إعادة تشغيل الجهاز", "شراء جهاز جديد", "تجاهل المشكلة"].map((choice, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-black/40 rounded-xl border border-white/5 hover:border-accent/40 transition-colors cursor-pointer">
                                <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                                <span className="text-sm">{choice}</span>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>

               {/* Section 3: Open Question */}
               <div className="space-y-6">
                 <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <Lightbulb className="w-6 h-6" />
                    سؤال مفتوح:
                 </h4>
                 <div className="p-8 bg-accent/5 rounded-[2.5rem] border border-accent/20 italic text-xl leading-relaxed">
                    "لماذا يعتبر طلب المساعدة من المعلم أو ولي الأمر خطوة هامة في حل المشكلات؟"
                 </div>
               </div>

               {/* Highlighted Key */}
               <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                 <button 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all text-sm"
                 >
                    {showAnswer ? 'إخفاء الإجابات' : 'عرض مفتاح التصحيح'}
                 </button>
                 {showAnswer && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-accent font-bold font-sans"
                    >
                        تحديد - سلك إيثرنت - إعادة تشغيل الجهاز
                    </motion.div>
                 )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
           <Link 
            to="/lesson/3" 
            className="px-8 py-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            الدرس السابق: أنظمة التواصل
          </Link>

          <Link 
            to="/" 
            className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            <History className="w-5 h-5" />
            الرئيسية
          </Link>

          <Link 
            to="/lesson/5" 
            className="px-8 py-5 rounded-2xl bg-accent hover:opacity-90 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            الدرس التالي: الملفات الرقمية
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
