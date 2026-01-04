/* ---------------------------------------------------------
   FINAL ProgramsSection.tsx (INFINITE LOOP + ZOOM FIXED)
--------------------------------------------------------- */

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLocation } from "wouter";
import { BROCHURE_LINKS, GOOGLE_SHEET_URL } from "@/brochureLinks";
import BrochureModal from "./BrochureModal";

/* ---------------------------------------------------------
   CONSTANTS (CRITICAL FOR ALIGNMENT)
--------------------------------------------------------- */
const CARD_WIDTH = 300; // Card ki width fixed
const GAP = 32; // Gap between cards (tailwind gap-8 = 32px)
const SCROLL_AMOUNT = CARD_WIDTH + GAP; // Total distance per slide (332px)



/* ---------------------------------------------------------
   MAIN SECTION COMPONENT
--------------------------------------------------------- */
export default function ProgramsSection() {
  const [, setLocation] = useLocation();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isPaused, setIsPaused] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  /* ---------------------------------------------------------
      PROGRAMS DATA
  --------------------------------------------------------- */
  // Helper to normalize keys to camelCase for BROCHURE_LINKS
  const normalizeKey = (key: string) => {
    // manualtesting -> manualTesting, dataanalytics -> dataAnalytics, etc.
    return key.replace(/([a-z])([A-Z])/g, "$1$2").replace(/([a-z])([a-z]+)/g, (m, a, b) => a + b.charAt(0).toUpperCase() + b.slice(1)).replace(/-/g, "");
  };

  const programs = [
    { key: "devops", name: "DevOps", path: "devops", image: "thumbnail/devops.jpeg", description: "Master CI/CD, Docker, Kubernetes, AWS, automation & real projects." },
    { key: "aiml", name: "AI/ML", path: "aiml", image: "thumbnail/ai&ml.jpeg", description: "Build ML models & deploy AI systems using Python, TensorFlow & PyTorch." },
    { key: "manualTesting", name: "Manual Testing", path: "manual-testing", image: "thumbnail/manual.jpeg", description: "Learn software testing fundamentals & bug tracking tools." },
    { key: "javaFullStack", name: "Java Full Stack", path: "java-fullstack", image: "thumbnail/java.jpeg", description: "Learn Java, Spring Boot, REST APIs & React for full-stack development." },
    { key: "businessAnalyst", name: "Business Analyst", path: "business-analyst", image: "thumbnail/business_analytics.jpeg", description: "Master BRDs, user stories, Jira workflows & client communication." },
    { key: "androidDevelopment", name: "Android Development", path: "android", image: "thumbnail/android.jpeg", description: "Build Android apps using Java/Kotlin, Jetpack, Firebase & APIs." },
    { key: "cyberSecurity", name: "Cyber Security", path: "cybersecurity", image: "thumbnail/cybersecurity.jpeg", description: "Learn ethical hacking & cybersecurity tools." },
    { key: "dataAnalytics", name: "Data Analytics", path: "data-analytics", image: "thumbnail/data_analytics.jpeg", description: "Master SQL, Excel, Power BI, dashboards & analytics workflows." },
    { key: "dataScience", name: "Data Science", path: "data-science", image: "thumbnail/data_science.jpeg", description: "Learn ML, Deep Learning, Python & real-world DS projects." },
    { key: "frontendDevelopment", name: "Frontend Development", path: "frontend-development", image: "thumbnail/frontend.jpeg", description: "Learn HTML, CSS, JavaScript, React, Tailwind & API Integration." },
    { key: "iosDevelopment", name: "iOS App Development", path: "ios-development", image: "thumbnail/ios.jpeg", description: "Build iOS apps using Swift, SwiftUI & Xcode." },
    { key: "mernFullStack", name: "MERN Full Stack", path: "mern-fullstack", image: "thumbnail/mern.jpeg", description: "Master MongoDB, Express, React, Node & full-stack project building." },
    { key: "pythonFullStack", name: "Python Full Stack", path: "python-fullstack", image: "thumbnail/python.jpeg", description: "Learn Python, Django/Flask, REST APIs & full-stack apps." },
    { key: "softwareTesting", name: "Software Testing", path: "software-testing", image: "thumbnail/software_testing.jpeg", description: "Manual + Automation + Performance testing." },
  ];

  /* ---------------------------------------------------------
      AUTO SLIDER LOGIC (INFINITE LOOP)
  --------------------------------------------------------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      // 1. Calculate Current Index accurately based on scroll position
      const currentScroll = container.scrollLeft;
      const currentIndex = Math.round(currentScroll / SCROLL_AMOUNT);

      // 2. Determine Next Index
      let nextIndex = currentIndex + 1;

      // 3. LOOP LOGIC: If we reached the end, go back to 0
      if (nextIndex >= programs.length) {
        nextIndex = 0;
      }

      // 4. Scroll to the exact pixel position
      container.scrollTo({
        left: nextIndex * SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, programs.length]);

  /* ---------------------------------------------------------
      ACTIVE ITEM TRACKER (ZOOM EFFECT)
  --------------------------------------------------------- */
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const onScroll = () => {
      // Find the center point of the visible scroll area
      const center = scroll.scrollLeft + scroll.clientWidth / 2;

      let nearestIndex = 0;
      let minDistance = Infinity;

      // Find which card center is closest to the container center
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const itemCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    // Listen to scroll event
    scroll.addEventListener("scroll", onScroll, { passive: true });

    // Run once on mount
    onScroll();

    return () => scroll.removeEventListener("scroll", onScroll);
  }, []);

  const setItemRef = (el: HTMLDivElement | null, idx: number) => {
    itemRefs.current[idx] = el;
  };

  /* ---------------------------------------------------------
      RENDER
  --------------------------------------------------------- */
  return (
    <section className="py-16 relative overflow-hidden bg-white dark:bg-[#0f1115]">
      {/* Scrollbar Hide CSS */}
      <style>{`
        .programs-scroll::-webkit-scrollbar { display: none; }
        .programs-scroll { 
          scrollbar-width: none; 
          -ms-overflow-style: none;
          touch-action: pan-y;
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold dark:text-white">Our Programs</h2>
        <h3 className="text-2xl font-light dark:text-gray-300">
          Programs To Help You Upskill
        </h3>
      </div>

      {/* ---------------------------------------------------------
          DESKTOP HORIZONTAL SLIDER
      --------------------------------------------------------- */}
      <div className="hidden md:block relative group">
        {/* LEFT ARROW */}
        <button
          onClick={() => {
            setIsPaused(true);
            // Manual Scroll Left
            scrollRef.current?.scrollBy({
              left: -SCROLL_AMOUNT,
              behavior: "smooth",
            });
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center border bg-white shadow-lg rounded-full dark:bg-gray-800 dark:border-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <span className="text-2xl font-bold">←</span>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => {
            setIsPaused(true);
            // Manual Scroll Right
            scrollRef.current?.scrollBy({
              left: SCROLL_AMOUNT,
              behavior: "smooth",
            });
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center border bg-white shadow-lg rounded-full dark:bg-gray-800 dark:border-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <span className="text-2xl font-bold">→</span>
        </button>

        {/* CARD CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-16 py-10 scroll-smooth programs-scroll"
        >
          {programs.map((program, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                ref={(el) => setItemRef(el, i)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                // Dynamic Classes for Zoom Effect
                className={`min-w-[300px] max-w-[300px] bg-white dark:bg-[#191c24] rounded-xl shadow-md flex flex-col h-[420px] transition-all duration-500 ease-out transform-gpu ${
                  isActive
                    ? "scale-105 shadow-[0_10px_40px_rgba(37,99,235,0.3)] border border-blue-500/20 z-10 opacity-100"
                    : "scale-95 opacity-70 blur-[0.5px] z-0"
                }`}
              >
                {/* IMAGE */}
                <div className="w-full bg-gray-100 dark:bg-[#23272f]">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full aspect-[16/9] object-cover rounded-t-xl"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-xl font-bold dark:text-white mb-2">
                    {program.name}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-1 line-clamp-3">
                    {program.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-2">
                    <Button
                      onClick={() => setLocation(`/courses/${program.path}`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                    >
                      GO TO PROGRAM
                    </Button>

                    <Button
                      onClick={() => {
                        setSelectedProgram(program.key);
                        setSelectedName(program.name);
                        setShowBrochure(true);
                      }}
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      BROCHURE ↓
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------------------------------------
          MOBILE GRID VIEW (STACKED)
      --------------------------------------------------------- */}
      <div className="block md:hidden w-full px-4">
        <div className="grid grid-cols-1 gap-6 w-full">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#191c24] border dark:border-gray-800 rounded-xl shadow-md flex flex-col w-full overflow-hidden"
            >
              <div className="w-full">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h4 className="text-lg font-bold dark:text-white">
                  {program.name}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm flex-1 mb-4">
                  {program.description}
                </p>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => setLocation(`/courses/${program.path}`)}
                    className="w-full bg-blue-600 text-white font-bold"
                  >
                    View Program
                  </Button>

                  <Button
                    onClick={() => {
                      // Normalize key for BrochureModal
                      setSelectedProgram(program.key.replace(/\s+/g, "").toLowerCase());
                      setSelectedName(program.name);
                      setShowBrochure(true);
                    }}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 font-bold"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BROCHURE MODAL */}
      {showBrochure && (
        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName={selectedName || ""}
          programKey={selectedProgram || ""}
          autoSubmit={true}
        />
      )}
    </section>
  );
}
