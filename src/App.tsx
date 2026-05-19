/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
  GraduationCap,
  Users,
  ChevronLeft,
  Search,
  Layout,
  Layers,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

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
  },
  {
    id: 2,
    title: "الأجهزة الملحقة بالحاسب",
    description: "تعرف على الأجهزة التي تزيد من كفاءة حاسوبك وكيفية توصيلها واستخدامها.",
    icon: <Monitor className="w-10 h-10" />,
  },
  {
    id: 3,
    title: "أنظمة التواصل الذكي",
    description: "نظرة في كيفية تواصل البشر والآلات من خلال أنظمة الذكاء الاصطناعي المتطورة.",
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    id: 4,
    title: "مشكلات الاتصال وحلها",
    description: "خطوات عملية وبسيطة لتشخيص وإصلاح مشكلات الاتصال بالإنترنت الأكثر شيوعاً.",
    icon: <AlertCircle className="w-10 h-10" />,
  },
  {
    id: 5,
    title: "الملفات الرقمية والتعامل معها",
    description: "تعلم أسس تنظيم وتخزين وحماية ملفاتك الرقمية بشكل احترافي وآمن.",
    icon: <FileText className="w-10 h-10" />,
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LessonDetails from "./components/LessonDetails";
import Lesson2Details from "./components/Lesson2Details";
import Lesson3Details from "./components/Lesson3Details";
import Lesson4Details from "./components/Lesson4Details";
import Lesson5Details from "./components/Lesson5Details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/1" element={<LessonDetails />} />
        <Route path="/lesson/2" element={<Lesson2Details />} />
        <Route path="/lesson/3" element={<Lesson3Details />} />
        <Route path="/lesson/4" element={<Lesson4Details />} />
        <Route path="/lesson/5" element={<Lesson5Details />} />
      </Routes>
    </Router>
  );
}

