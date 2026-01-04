import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

// ⭐ Required Props (fixes TS errors)
interface CourseProps {
  onRequestCall: () => void;
}

const PythonFullStack = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Python Programming",
      points: ["Python Basics", "Data Types & Loops", "Functions & Modules"],
    },
    {
      title: "Week 2: OOP & Advanced Python",
      points: ["Classes & Objects", "File Handling", "Error Handling"],
    },
    {
      title: "Week 3: Django / Flask Basics",
      points: ["Project Setup", "Templates", "URL Routing"],
    },
    {
      title: "Week 4: Databases & ORM",
      points: ["SQL Queries", "Django ORM", "Models & Migrations"],
    },
    {
      title: "Week 5: APIs & Backend Development",
      points: ["REST API Development", "Authentication", "CRUD Operations"],
    },
    {
      title: "Week 6: Frontend Development",
      points: [
        "HTML, CSS, JavaScript",
        "Bootstrap / Tailwind",
        "Frontend Integration",
      ],
    },
    {
      title: "Week 7: Full Stack Integration",
      points: [
        "Connect Django/Flask with Frontend",
        "API Consumption",
        "Project Structure",
      ],
    },
    {
      title: "Week 8: Deployment & Job Prep",
      points: ["Deploy Application", "Git & CI/CD", "Resume + Interview Prep"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ NO-CROP BANNER */}
        <div className="w-full bg-black">
          <img
            src="/python.jpeg"
            alt="Python Full Stack Banner"
            className="
              w-full
              h-auto
              object-contain
              max-h-[650px]
              mx-auto
            "
          />
        </div>

        {/* ⭐ PAGE CONTENT */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-28 space-y-14">
          {/* ⭐ About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This Python Full Stack course teaches Python, Django / Flask, REST
              APIs, HTML, CSS, JavaScript, SQL, and deployment. You will build
              real-world backend + frontend full stack applications using modern
              Python technologies.
            </p>
          </section>

          {/* ⭐ Weekly Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week, index) => (
              <div
                key={index}
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

          {/* ⭐ Desktop CTA Buttons */}
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

        {/* ⭐ Mobile Fixed Bottom Buttons */}
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

        {/* ⭐ Modals */}
        <FormModal open={showForm} onOpenChange={setShowForm} />

        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName="Python Full Stack Development"
        />
      </div>
    </>
  );
};

export default PythonFullStack;
