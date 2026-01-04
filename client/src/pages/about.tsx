import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import OldFooter from "@/components/oldFooter";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Award,
  Globe,
  CheckCircle2,
} from "lucide-react";

interface AboutProps {
  onRequestCall: () => void;
}

/* ================= VIEWPORT BASED COUNTER ================= */
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl font-extrabold">
      {count}
      {suffix}
    </div>
  );
}

export default function About({ onRequestCall }: AboutProps) {
  return (
    <div className="bg-white dark:bg-[#0B0B10] text-gray-900 dark:text-gray-100">
      <ScrollToTop />

      {/* ================= HERO (UNCHANGED) ================= */}
      {/* MOBILE */}
      <header className="md:hidden relative w-full h-[180px] bg-black">
        <div className="absolute inset-0 bg-[url('/Aboutbanner.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 px-4 pt-10">
          <h1 className="text-white font-extrabold text-lg">
            About <span className="text-yellow-400">Qualibytes IT Academy</span>
          </h1>
          <p className="text-gray-300 text-xs mt-2">
            Real industry experience. Real professional growth.
          </p>
          <button
            onClick={onRequestCall}
            className="mt-3 bg-yellow-400 text-black text-xs px-3 py-1.5 rounded"
          >
            Talk to a Counsellor
          </button>
        </div>
      </header>

      {/* DESKTOP */}
      <header className="hidden md:block relative w-full bg-black">
        <motion.img
          src="/Aboutbanner.jpg"
          alt="About Qualibytes IT Academy"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-h-[650px] object-contain mx-auto"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-yellow-400 text-4xl lg:text-5xl font-extrabold">
              About Qualibytes IT Academy
            </h1>
            <p className="mt-4 text-gray-200">
              An IT academy built inside a real working IT company
            </p>
            <div className="mt-6">
              <Button
                onClick={onRequestCall}
                className="bg-white text-black px-8 py-3 rounded-full"
              >
                Talk to a Counsellor
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-28 px-6 md:px-20 space-y-24">

        {/* INTRO */}
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            About Qualibytes IT Academy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Qualibytes IT Academy was not born in a classroom. It was born inside
            a real, working IT company. At a time when most training institutes
            were focused on teaching concepts, Qualibytes was already building
            software, delivering projects, and solving real business problems
            for real clients.
          </p>
        </div>

        {/* STORY */}
        <div className="max-w-5xl space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            While most institutes focus on teaching concepts, we build
            professionals. While others simulate projects, we deliver real ones.
            While many promise placements, we prepare individuals for real
            industry performance.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Founded by experienced IT professionals, Qualibytes began its
            journey in 2020 as a full-fledged IT company delivering real-world
            projects across multiple domains. As our teams expanded and we
            worked closely with fresh graduates, one critical gap became
            impossible to ignore — students knew theory, but companies needed
            performers.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            That realization led to the creation of Qualibytes IT Academy.
          </p>
        </div>

        {/* CORE STRENGTH */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-6">
              Our Core Strength: An IT Company at Heart
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              What truly separates Qualibytes IT Academy from traditional
              training institutes is simple, yet powerful. We are an IT company
              first. We do not imagine projects. We do not create dummy
              assignments. We already have real projects.
            </p>

            <ul className="space-y-4">
              {[
                "Live, ongoing industry projects",
                "Practical experience recruiters value",
                "Real development, testing, and deployment workflows",
                "Industry timelines and professional accountability",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-xl" />
            <img
              src="/Aboutbanner.jpg"
              alt="Qualibytes Team"
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* OUTCOMES */}
        <div className="max-w-5xl space-y-6">
          <h3 className="text-3xl font-extrabold">
            Built on Trust. Driven by Outcomes.
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Over the years, Qualibytes IT Academy has trained and transformed
            hundreds of learners into industry-ready professionals across
            Software Testing, DevOps and Cloud, Software Development, and Data
            and Analytics.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We do not measure success by certificates alone. We measure it by
            careers launched, confidence built, and professionals created.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          <div>
            <Users className="mx-auto h-8 w-8 text-blue-600 mb-3" />
            <AnimatedCounter value={500} suffix="+" />
            <p className="text-sm text-gray-500 mt-1">Students Trained</p>
          </div>
          <div>
            <Target className="mx-auto h-8 w-8 text-blue-600 mb-3" />
            <AnimatedCounter value={95} suffix="%" />
            <p className="text-sm text-gray-500 mt-1">Industry Readiness</p>
          </div>
          <div>
            <Award className="mx-auto h-8 w-8 text-blue-600 mb-3" />
            <AnimatedCounter value={120} suffix="+" />
            <p className="text-sm text-gray-500 mt-1">Live Projects</p>
          </div>
          <div>
            <Globe className="mx-auto h-8 w-8 text-blue-600 mb-3" />
            <AnimatedCounter value={8} suffix="+" />
            <p className="text-sm text-gray-500 mt-1">Technology Domains</p>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-28 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-extrabold mb-6">Our Mission</h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          To bridge the gap between education and industry and create
          professionals who are job-ready from day one — not just certified on
          paper. If you want real experience, real confidence, and real growth,
          Qualibytes IT Academy is where your IT career truly begins.
        </p>
      </section>

      <OldFooter />
    </div>
  );
}
