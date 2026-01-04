import { useEffect, useState } from "react";
import EnhancedForm from "./enhanced-form";
import { useTheme } from "@/hooks/use-theme";

const statsData = [
  { value: 1200, suffix: "+", label: "Placement Partners" },
  { value: 15000, suffix: "+", label: "Careers Transformed" },
  { value: 100, suffix: "+", label: "Capstone Projects" },
];

// Smooth Slow Counter
function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 4000;
    const fps = 1000 / 60;
    const totalFrames = duration / fps;

    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const interval = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);
      const val = Math.floor(progress * end);

      setCount(val);

      if (frame >= totalFrames) clearInterval(interval);
    }, fps);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <span className="text-5xl font-extrabold">
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const { theme } = useTheme();

  // SAME IMAGE IN BOTH MODES
  const imageSrc = "/hero-light.jpg";

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white transition-all py-14">
      <div className="max-w-[1600px] mx-auto px-2">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 leading-tight">
          Transform Yourself into a High-Value Tech Expert
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col bg-white dark:bg-neutral-900">

            {/* IMAGE */}
            <div className="w-full h-[350px] sm:h-[380px] md:h-[420px] lg:h-[450px] border-b border-gray-300 dark:border-gray-700">
              <img
                src={imageSrc}
                alt="Hero Banner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* COUNTERS */}
            <div className="p-10 flex flex-col justify-center h-full">
              <div className="space-y-12">
                {statsData.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-6">

                    {/* Animated number */}
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />

                    {/* Label */}
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {stat.label}
                      </span>
                      <span className="border-b border-dotted border-gray-500 mt-1" />
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — FORM */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-neutral-900 p-8 flex flex-col h-full">
            <EnhancedForm />
          </div>
        </div>
      </div>
    </section>
  );
}
