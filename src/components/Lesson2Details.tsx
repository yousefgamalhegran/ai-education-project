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
  Monitor,
  Zap,
  HardDrive,
  Cable,
  Network,
  Activity,
  HardDriveDownload,
  AlertTriangle,
  History
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const objectives = [
  "أن يميز التلميذ بين أنواع وحدات التخزين والاتصال",
  "أن يوظف التلميذ وسائط التخزين والاتصال بشكل صحيح",
  "أن يقدر التلميذ أهمية ترشيد استخدام الإنترنت والتخزين"
];

const resources = [
  {
    title: "فيديو الشرح",
    link: "https://drive.google.com/file/d/1zq9f7iLlVaQywWVpnHTSPrbiVwH5_nOQ/view?usp=drive_link",
    icon: <Play className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "الشرح الصوتي",
    link: "https://drive.google.com/file/d/1l5yDvG1Ov9IYTePbTCo0QxYYRqvzI35F/view?usp=sharing",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "العرض التقديمي",
    link: "https://docs.google.com/presentation/d/12X8B0h9TGL5Hzt88bAkHSi6lx5eCNKnc/edit?usp=sharing&ouid=109705533842661106780&rtpof=true&sd=true",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "الخريطة الذهنية",
    link: "https://drive.google.com/file/d/1PPaYQ4cFRI4rPQOqgeM4BwuSaGctVoOn/view?usp=sharing",
    icon: <Map className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "جدول البيانات",
    link: "https://drive.google.com/file/d/14oicP8DQE47kod35Nh2uZgpMSOOg-jwm/view?usp=sharing",
    icon: <ListChecks className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "تلخيص الدرس",
    link: "https://drive.google.com/file/d/1s9Foxh3UxKeCZW71xQFfyG8Fx8_1Iw1u/view?usp=drive_link",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "بطاقات الحاسب",
    link: "https://notebooklm.google.com/notebook/378e3848-0d12-4ad8-bb13-d4c374897967/artifact/30011f82-f325-4c61-8a3f-133177056f5b",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "اختبار الحاسوب",
    link: "https://notebooklm.google.com/notebook/378e3848-0d12-4ad8-bb13-d4c374897967/artifact/7be874e9-775c-41b5-9c0b-68794c7ced60",
    icon: <HelpCircle className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-500"
  }
];

export default function Lesson2Details() {
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
              الدرس الثاني
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6">الأجهزة الملحقة بالحاسب</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              التعرف على وسائل التخزين والاتصال ووحدات قياس البيانات لتعزيز كفاءة استخدام التكنولوجيا.
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white text-center">الشرح التفصيلي للدرس</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16 text-right">
            {/* Devices Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <h3 className="font-display text-4xl font-bold mb-10 text-accent border-b border-white/10 pb-4">الأجهزة والوسائط الملحقة</h3>
              
              <div className="space-y-10">
                <div className="group/item">
                  <h4 className="font-display text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Zap className="w-6 h-6 text-accent" />
                    ذاكرة الفلاش (Flash Memory)
                  </h4>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                    تُستخدم في تخزين ونقل البيانات والمعلومات، وتتميز بأنها سريعة مثل أقراص SSD لأنها لا تحتوي على أجزاء متحركة.
                  </p>
                </div>

                <div className="group/item">
                  <h4 className="font-display text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <HardDrive className="w-6 h-6 text-accent" />
                    محرك القرص الصلب الخارجي
                  </h4>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                    يتميز بأنه أسرع بكثير من القرص التقليدي HDD، ويستخدم لتوسيع مساحة التخزين في الحواسيب.
                  </p>
                </div>

                <div className="group/item">
                  <h4 className="font-display text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Monitor className="w-6 h-6 text-accent" />
                    واجهة الوسائط المتعددة عالية الجودة (HDMI)
                  </h4>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                    عبارة عن سلك ينقل الصوت والصورة بدقة عالية من الأجهزة وإليها (مثل ربط الحاسوب بالشاشة).
                  </p>
                </div>

                <div className="group/item">
                  <h4 className="font-display text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Cable className="w-6 h-6 text-accent" />
                    سلك الإيثرنت
                  </h4>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                    يُستخدم لربط جهاز الكمبيوتر بالراوتر للحصول على اتصال إنترنت سريع ومستقر.
                  </p>
                </div>

                <div className="group/item">
                  <h4 className="font-display text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                    <Network className="w-6 h-6 text-accent" />
                    جهاز التوجيه (الراوتر)
                  </h4>
                  <p className="text-lg text-gray-400 font-sans leading-relaxed">
                    وظيفته ربط جهاز الكمبيوتر بالإنترنت، إما بواسطة Wi-Fi أو عبر سلك الإيثرنت.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Units Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="font-display text-4xl font-bold mb-10 text-blue-400 border-b border-white/10 pb-4">وحدات القياس للبيانات والسرعات</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">البِت (Bit)</h4>
                    <p className="text-gray-400">هو أصغر وحدة قياس للبيانات.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">البايت (Byte)</h4>
                    <p className="text-gray-400 italic">1 Byte = 8 bit</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">الكيلو بايت (KB)</h4>
                    <p className="text-gray-400 italic">1024 Byte</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">الميجا بايت (MB)</h4>
                    <p className="text-gray-400 italic">1024 KB</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">الجيجا بايت (GB)</h4>
                    <p className="text-gray-400 italic">1024 MB</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-accent font-bold mb-2">التيرا بايت (TB)</h4>
                    <p className="text-gray-400 italic">1024 GB</p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 bg-accent/10 p-6 rounded-3xl border border-accent/20">
                    <Activity className="text-accent w-8 h-8" />
                    <div>
                        <span className="text-xs uppercase font-bold text-gray-500 block mb-1">سرعة الإنترنت تقاس بـ</span>
                        <p className="text-2xl font-display font-black">Mbps</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-accent/10 p-6 rounded-3xl border border-accent/20">
                    <Cpu className="text-accent w-8 h-8" />
                    <div>
                        <span className="text-xs uppercase font-bold text-gray-500 block mb-1">سرعة المعالج تقاس بـ</span>
                        <p className="text-2xl font-display font-black">GHz</p>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Problems Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group border-r-4 border-accent"
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-white">المشكلات التقنية الشائعة</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "مشكلة معالجة الملفات الكبيرة",
                  "عدم القدرة على تخزين البيانات",
                  "ضعف اتصال الشبكة",
                  "الإنترنت لا يعمل"
                ].map((prob, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-gray-300 bg-white/5 p-4 rounded-2xl">
                    <AlertTriangle className="text-accent shrink-0" />
                    {prob}
                  </li>
                ))}
              </ul>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
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
            className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-blue-900/40 to-surface border border-blue-500/30 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic text-white">اختبر مهارتك التقنية</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                اكتشف مدى إتقانك لأجهزة الحاسب ووحدات القياس من خلال هذا النشاط التفاعلي المقدم عبر منصة Canva.
              </p>
              <a 
                href="https://roomaai.my.canva.site/c96watdr93aht95g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-blue-500 hover:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-500/20 group"
              >
                <span>ابدأ النشاط التفاعلي</span>
                <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magic School Summary */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 max-w-4xl text-right">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">تلخيص الذكاء الاصطناعي (Magic School)</span>
            <h2 className="font-display text-4xl font-bold">ملخص شامل للدرس</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3.5rem] border-r-8 border-r-accent"
          >
            <div className="space-y-10 font-sans text-xl leading-[1.8] text-gray-300">
                <div className="border-b border-white/5 pb-8">
                    <h4 className="text-accent font-black mb-4">أجهزة وملحقاتها:</h4>
                    <p>ذاكرة فلاش للتخزين السريع، قرص صلب خارجي أسرع من HDD، واجهة وسائط لنقل الصوت والصورة، سلك إيثرنت للربط، وراوتر يوصل الإنترنت عبر Wi-Fi أو إيثرنت.</p>
                </div>
                <div className="border-b border-white/5 pb-8">
                    <h4 className="text-accent font-black mb-4">وحدات قياس البيانات والسرعة:</h4>
                    <p>البت أصغر وحدة؛ 1 Byte = 8 bit، ثم KB, MB, GB, TB.</p>
                    <p className="mt-2 text-white font-bold italic">سرعة الإنترنت تقاس بـ Mbps وسرعة المعالج بـ GHz.</p>
                </div>
                <div>
                    <h4 className="text-accent font-black mb-4">مشكلات وحلول تقنية شائعة:</h4>
                    <p>صعوبات في معالجة الملفات الكبيرة، نفاد سعة التخزين، ضعف اتصال الشبكة، وانقطاع الإنترنت.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
           <Link 
            to="/lesson/1" 
            className="px-8 py-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            الدرس السابق: الشبكات
          </Link>

          <Link 
            to="/" 
            className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            <History className="w-5 h-5" />
            الرئيسية
          </Link>

          <Link 
            to="/lesson/3" 
            className="px-8 py-5 rounded-2xl bg-accent hover:opacity-90 font-bold transition-all flex items-center gap-3 text-sm md:text-base"
          >
            الدرس التالي: أنظمة التواصل
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
