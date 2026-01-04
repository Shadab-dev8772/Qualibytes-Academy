import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

const JavaFullStack = ({ onRequestCall }: { onRequestCall: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: HTML, CSS & Git",
      points: ["HTML5 structure", "CSS basics", "Git & GitHub intro"],
    },
    {
      title: "Week 2: JavaScript Essentials",
      points: ["DOM manipulation", "Functions, Arrays", "ES6 features"],
    },
    {
      title: "Week 3: React Basics",
      points: ["JSX, components", "Props and state", "React hooks"],
    },
    {
      title: "Week 4: Advanced React",
      points: ["Routing", "Forms & validation", "Context API"],
    },
    {
      title: "Week 5: Java Core",
      points: ["OOP in Java", "Exception handling", "Collections"],
    },
    {
      title: "Week 6: JDBC & MySQL",
      points: ["JDBC API", "CRUD with MySQL", "Database normalization"],
    },
    {
      title: "Week 7: Spring Boot Intro",
      points: ["Project setup", "REST API creation", "Annotations"],
    },
    {
      title: "Week 8: Spring Boot Deep Dive",
      points: ["Dependency injection", "Exception handling", "Validation"],
    },
    {
      title: "Week 9: Security & JWT",
      points: ["Spring Security", "JWT token implementation"],
    },
    {
      title: "Week 10: Full Stack Integration",
      points: ["React + Spring Boot integration", "Axios & CORS setup"],
    },
    {
      title: "Week 11: Capstone Project",
      points: ["Build real-world app", "Frontend-backend communication"],
    },
    {
      title: "Week 12: Interview & Resume Prep",
      points: ["Mock interviews", "Resume building", "GitHub portfolio"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ================== NO-CROP BANNER ================== */}
        <div className="w-full bg-black">
          <img
            src="/java.jpeg"
            alt="Java Full Stack Banner"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-28 space-y-14">
          {/* About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>
            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This Java Full Stack Development course equips you with the
              complete skill set to build dynamic web applications. Learn
              everything from frontend development to backend systems using
              Java, Spring Boot, REST APIs, and databases.
            </p>
          </section>

          {/* Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {week.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Desktop CTA */}
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

        {/* ================== MOBILE FIXED CTA ================== */}
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e] p-4 flex gap-4 border-t border-gray-700 z-50">
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
          programName="Java Full Stack"
          programKey="javaFullStack"
        />
      </div>
    </>
  );
};

export default JavaFullStack;
