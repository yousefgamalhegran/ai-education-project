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
  Search,
  ChevronLeft,
  Target,
  Cpu,
  History,
  Zap,
  BookOpen,
  QrCode,
  Globe,
  Camera,
  Keyboard,
  Mic,
  FolderOpen,
  Edit3,
  MousePointer2,
  Library,
  Star,
  Award,
  Sparkles,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const objectives = [
  "أن يتعرف التلميذ على طرق الحصول على المعلومات",
  "أن ينشئ التلميذ مجلداً جديداً ويعيد تسميته عملياً",
  "أن يقدّر التلميذ أهمية تنظيم الملفات"
];

const resources = [
  {
    title: "فيديو الشرح",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <Play className="w-6 h-6" />,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "الشرح الصوتي",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "العرض التقديمي",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <Presentation className="w-6 h-6" />,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "الخريطة الذهنية",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <Map className="w-6 h-6" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "ورقة تلخيص الدرس",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "التقرير",
    link: "https://drive.google.com/file/d/1yK0PVF2QfD1sbVzlsdwYhp96pHofCtjJ/view?usp=drive_link",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "بطاقات الدرس",
    link: "https://notebooklm.google.com/notebook/f417fe1e-4b0d-4674-bbef-1d182c0bf7a8/artifact/02607d02-6d4e-4fb1-976f-1625af318146",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-teal-500/10 text-teal-500"
  },
  {
    title: "اختبار الدرس",
    link: "https://notebooklm.google.com/notebook/f417fe1e-4b0d-4674-bbef-1d182c0bf7a8/artifact/17e0b00b-8241-40bf-8a01-90ed1c5c7ef9",
    icon: <HelpCircle className="w-6 h-6" />,
    color: "bg-yellow-500/10 text-yellow-500"
  }
];

export default function Lesson5Details() {
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
              الدرس الخامس
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 italic">الملفات الرقمية وكيفية التعامل معها</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              تنظيم الملفات واستخدام الوسائط الرقمية بطريقة ذكية لرفع كفاءة الإنتاج وإدارة المحتوى الرقمي.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 text-right">
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
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold">
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
        <div className="container mx-auto px-6 max-w-5xl text-right">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic text-white flex items-center gap-4 justify-center">
                المحتوى العلمي الأكاديمي
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Section 1: Ways to get info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <h3 className="font-display text-3xl font-bold mb-10 text-accent border-b border-white/10 pb-4">طرق الحصول على المعلومات</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                    <Library className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-xl">البحث في مكتبة المدرسة</h4>
                  <p className="text-gray-400">استخدام الكتب والمراجع التعليمية للحصول على المعلومات بشكل دقيق وموثق.</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-xl">البحث عبر الإنترنت</h4>
                  <p className="text-gray-400">استخدام الشبكات والإنترنت للوصول إلى كم هائل ومتنوع من المعلومات والبيانات المختلفة.</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-xl">رمز الاستجابة السريع (QR Code)</h4>
                  <p className="text-gray-400">توجيه الكاميرا إلى الرمز للوصول الفوري إلى المعلومات المخزنة داخل الأنظمة والروابط.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Peripherals */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="font-display text-3xl font-bold mb-10 text-blue-400 border-b border-white/10 pb-4">الأجهزة الملحقة بالكمبيوتر</h3>
              
              <div className="space-y-8">
                {[
                  { icon: <Zap className="text-accent" />, title: "ذاكرة الفلاش", desc: "تُستخدم في تخزين المعلومات ومشاركتها ونقلها بين الأجهزة المختلفة." },
                  { icon: <FileText className="text-accent" />, title: "الماسح الضوئي (Scanner)", desc: "يُستخدم لإدخال الصور والرسوم الورقية إلى الكمبيوتر وحفظها كملفات رقمية." },
                  { icon: <Camera className="text-accent" />, title: "الكاميرا الرقمية", desc: "تُستخدم لالتقاط الصور وتسجيل الصوت والفيديو وتخزينهم بجودة عالية." },
                  { icon: <Keyboard className="text-accent" />, title: "لوحة المفاتيح", desc: "تُستخدم لإدخال النصوص والحروف والأرقام وإعطاء الأوامر للحاسب." },
                  { icon: <Mic className="text-accent" />, title: "الميكروفون", desc: "يُستخدم لإدخال الأصوات وتطبيقات التواصل الصوتي." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="p-3 bg-accent/10 rounded-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 3: Management */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group border-r-8 border-r-purple-500"
            >
              <h3 className="font-display text-3xl font-bold mb-10 text-purple-400 border-b border-white/10 pb-4">إدارة الملفات والمجلدات</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-3xl">
                    <h4 className="font-bold text-accent mb-4 underline decoration-accent/30 underline-offset-4">مفهوم إدارة الملفات</h4>
                    <p className="text-gray-300 leading-relaxed font-medium">هي عملية تنظيم الملفات داخل الحاسب الآلي بطريقة مرتبة وممنهجة تسهل عملية البحث عنها والحصول عليها لاحقاً بسرعة فائقة.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl">
                    <h4 className="font-bold text-accent mb-4 underline decoration-accent/30 underline-offset-4">تعريف المجلد (Folder)</h4>
                    <p className="text-gray-300 leading-relaxed font-medium">هو وعاء رقمي يضم مجموعة من الملفات أو المجلدات الفرعية الأخرى، ويستخدم لفرز البيانات وتصنيفها.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-display text-2xl font-bold text-white mb-6 italic">الخطوات العملية:</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <FolderOpen className="text-accent" />
                      <div>
                        <span className="block font-bold">إنشاء مجلد جديد:</span>
                        <span className="text-gray-500 text-sm">من القائمة المختصرة اختر New ثم Folder</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <Edit3 className="text-accent" />
                      <div>
                        <span className="block font-bold">إعادة تسمية المجلد:</span>
                        <span className="text-gray-500 text-sm">من القائمة المختصرة اختر Rename</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <ExternalLink className="text-accent" />
                      <div>
                        <span className="block font-bold">نقل وحفظ الملفات:</span>
                        <span className="text-gray-500 text-sm">يتضمن سحب الملفات وحفظ الصور والفيديوهات في المجلدات المخصصة</span>
                      </div>
                    </div>
                  </div>
                </div>
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
            className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-teal-900/40 to-surface border border-teal-500/30 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic text-white italic">اتقن مهارة التنظيم</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                اختبر مهاراتك في إدارة الملفات واستخدام QR Code من خلال نشاطنا التفاعلي التعليمي على منصة Canva.
              </p>
              <a 
                href="https://roomaai.my.canva.site/c96zcmjgd1rq25cp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-teal-500 hover:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-teal-500/20 group"
              >
                <span>ابدأ النشاط التفاعلي</span>
                <MousePointer2 className="w-6 h-6 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Magic School AI Section */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 max-w-4xl text-right">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">إعادة صياغة ذكية (Magic School AI)</span>
            <h2 className="font-display text-4xl font-bold italic">نظرة أكاديمية شاملة</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3.5rem] border-r-8 border-r-accent space-y-12"
          >
            <div className="space-y-6">
                <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <Search className="w-6 h-6" />
                    طرق جمع المعلومات:
                </h4>
                <p className="text-lg text-gray-300 leading-[1.8] font-sans">
                تتنوع استراتيجيات جمع البيانات بين المصادر التقليدية كالمكتبات المدرسية الموثوقة، والمصادر الرقمية الحديثة عبر محركات البحث، بالإضافة إلى التقنيات الذكية مثل QR Code التي تربط العالم الفيزيائي بالمحتوى الرقمي اللحظي.
                </p>
            </div>

            <div className="space-y-6">
                <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <History className="w-6 h-6" />
                    الأجهزة الملحقة بالكمبيوتر:
                </h4>
                <p className="text-lg text-gray-300 leading-[1.8] font-sans">
                يمثل العتاد الملحق (Peripherals) جسر التواصل بين المستخدم والحاسب، حيث تقوم الماسحات الضوئية والكاميرات والميكروفونات بتحويل المدخلات الحياتية إلى بيانات رقمية، بينما تضمن ذاكرة الفلاش تنقل هذه البيانات بمرونة بين الأنظمة.
                </p>
            </div>

            <div className="space-y-6">
                <h4 className="font-display text-2xl font-bold text-accent flex items-center gap-3">
                    <FolderOpen className="w-6 h-6" />
                    تنظيم الملفات والمجلدات:
                </h4>
                <p className="text-lg text-gray-300 leading-[1.8] font-sans">
                إدارة الملفات ليست مجرد عملية حفظ، بل هي فن تنظيم "الذاكرة الرقمية". من خلال إنشاء بنية شجرية من المجلدات والمجلدات الفرعية وتسميتها بوضوح، يضمن المستخدم بيئة عمل منتجة تحافظ على تدفق المعلومات وتقلل من وقت البحث والجهد الضائع.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Project Conclusion */}
      <section className="py-24 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-accent/5 opacity-50 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-right">
           <div className="text-center mb-16">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 bg-accent/10 border border-accent/20 rounded-3xl mb-6"
                >
                    <Award className="w-12 h-12 text-accent" />
                </motion.div>
                <h2 className="font-display text-4xl md:text-6xl font-black mb-8 italic">خاتمة المشروع التعليمي</h2>
                <div className="w-32 h-2 bg-accent mx-auto rounded-full mb-10"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-10 rounded-[3rem] border border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                        <Star className="text-yellow-500" />
                        دور الذكاء الاصطناعي في التعليم
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-sans font-medium text-lg">
                        أثبتت هذه المنصة كيف يمكن للذكاء الاصطناعي أن يكون المحرك الأساسي لتطوير التعليم، من خلال تخصيص المحتوى، توليد أوراق العمل الذكية، وتبسيط المفاهيم المعقدة بطريقة جذابة وتفاعلية.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass p-10 rounded-[3rem] border border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                        <Sparkles className="text-accent" />
                        أهمية التعلم التفاعلي
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-sans font-medium text-lg">
                        إن الانتقال من التلقين إلى التفاعل هو المفتاح الحقيقي لجذب انتباه الطلاب. الأدوات الذكية المدمجة في هذا المشروع تمنح المتعلم فرصة لاستكشاف التكنولوجيا ليس فقط كعلم، بل كممارسة حياتية يومية.
                    </p>
                </motion.div>
           </div>

           <div className="mt-12 p-10 glass rounded-[3rem] border border-accent/30 bg-accent/5 text-center">
                <p className="text-2xl font-display font-bold text-white italic">
                    "نحن لا نبني منصة لتعلم التكنولوجيا فحسب، بل نبني مستقبلاً رقمياً واعياً لمبدعي الغد."
                </p>
           </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
           <Link 
            to="/lesson/4" 
            className="px-8 py-5 rounded-2xl bg-surface border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            الدرس السابق: مشكلات الاتصال
          </Link>

          <Link 
            to="/" 
            className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 font-bold transition-all flex items-center gap-3 text-sm md:text-base mx-auto md:mx-0"
          >
            <History className="w-5 h-5" />
            الرئيسية
          </Link>

          <div className="px-8 py-5 rounded-2xl bg-accent opacity-50 cursor-default font-bold flex items-center gap-3 text-sm md:text-base">
            نهاية المنهج
            <BookOpen className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm font-sans italic">
          تم بحمد الله - تصميم أكاديمي احترافي لمقرر الذكاء الاصطناعي - إعداد يوسف جمال حجران
        </p>
      </footer>
    </div>
  );
}
