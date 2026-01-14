import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

const FrontendDevelopment = ({
  onRequestCall,
}: {
  onRequestCall: () => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: HTML & CSS Fundamentals",
      points: [
        "HTML5 semantic structure",
        "CSS styling techniques",
        "Box model & Flexbox",
      ],
    },
    {
      title: "Week 2: Advanced CSS & Responsive Design",
      points: ["Media queries", "Grid layout", "CSS animations"],
    },
    {
      title: "Week 3: JavaScript Basics",
      points: [
        "Variables, functions, loops",
        "DOM manipulation",
        "Event handling",
      ],
    },
    {
      title: "Week 4: JavaScript Advanced",
      points: ["ES6 features", "APIs and Fetch", "Form validation"],
    },
    {
      title: "Week 5: React Introduction",
      points: ["JSX, components", "Props and state", "React hooks"],
    },
    {
      title: "Week 6: React Router & Forms",
      points: [
        "Routing with React Router",
        "Handling forms",
        "Controlled components",
      ],
    },
    {
      title: "Week 7: Project Work",
      points: [
        "Build a responsive web app",
        "Use public APIs",
        "Deploy on GitHub Pages",
      ],
    },
    {
      title: "Week 8: Interview Prep & Portfolio",
      points: ["Mock interviews", "GitHub project showcase", "Resume support"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ================== BANNER ================== */}
        <div className="w-full bg-black">
          <img
            src="/frontend.jpeg"
            alt="Frontend Development Banner"
            className="
              w-full 
              h-auto 
              object-contain 
              max-h-[650px] 
              mx-auto
            "
          />
        </div>

        {/* ================== PAGE CONTENT ================== */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          {/* About */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>

            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This 8-week Frontend Development course provides the essential
              skills needed to design and develop responsive, interactive user
              interfaces.
            </p>
          </section>

          {/* ================== WEEKLY MODULES ================== */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week, i) => (
              <div
                key={i}
                className="bg-card text-card-foreground p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  {week.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* ================== DESKTOP CTA ================== */}
          <div className="hidden sm:flex justify-center gap-4 pt-10">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => setShowForm(true)}
            >
              Apply Now
            </Button>

            <Button
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => setShowBrochure(true)}
            >
              Brochure
            </Button>
          </div>
        </div>

        {/* ================== MOBILE BOTTOM CTA ================== */}
        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white p-4 flex gap-4 border-t border-gray-700 z-50">
          <Button
            variant="outline"
            className="w-1/2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => setShowForm(true)}
          >
            Apply Now
          </Button>

          <Button
            className="w-1/2 bg-primary text-white hover:bg-primary/90"
            onClick={() => setShowBrochure(true)}
          >
            Brochure
          </Button>
        </div>

        {/* Modals */}
        <FormModal open={showForm} onOpenChange={setShowForm} />

        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName="Frontend Development"
        />
      </div>
    </>
  );
};

export default FrontendDevelopment;
