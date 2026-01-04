import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface CourseProps {
  onRequestCall: () => void;
}

const MERNFullStack = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: HTML, CSS & JavaScript",
      points: ["HTML5 Structure", "CSS3 Styling", "JavaScript Basics"],
    },
    {
      title: "Week 2: React Fundamentals",
      points: ["Components & Props", "Hooks & State", "React Router"],
    },
    {
      title: "Week 3: Advanced React",
      points: ["Context API", "Custom Hooks", "API Integration"],
    },
    {
      title: "Week 4: Node.js & Express",
      points: ["Node Basics", "Express Routing", "REST APIs"],
    },
    {
      title: "Week 5: MongoDB & Mongoose",
      points: ["CRUD Operations", "Schema Design", "Aggregation"],
    },
    {
      title: "Week 6: Authentication & Security",
      points: ["JWT Authentication", "Password Hashing", "Role-based Auth"],
    },
    {
      title: "Week 7: Full Stack Integration",
      points: [
        "React + Node Integration",
        "API Consumption",
        "Project Structure",
      ],
    },
    {
      title: "Week 8: Deployment & Job Prep",
      points: ["Deploy MERN App", "CI/CD Basics", "Resume + Interview Prep"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ Banner — NO CROP Version */}
        <div className="w-full bg-black">
          <img
            src="/mern.jpeg"
            alt="MERN Full Stack Banner"
            className="
              w-full
              h-auto
              object-contain
              max-h-[650px]
              mx-auto
            "
          />
        </div>

        {/* ⭐ Page Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-28 space-y-14">
          {/* ⭐ About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This MERN Full Stack course covers MongoDB, Express.js, React.js,
              and Node.js. You will learn complete frontend + backend
              development, API building, authentication, databases, deployment,
              and full stack projects.
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

          {/* ⭐ Desktop Buttons */}
          <div className="hidden sm:flex justify-center gap-4 pt-10">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/20 hover:text-primary"
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
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e] border-t border-gray-700 p-4 flex gap-4 z-50">
          <Button
            variant="outline"
            className="w-1/2 border-primary text-primary hover:bg-primary/20 hover:text-primary"
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
          programName="MERN Full Stack Development"
        />
      </div>
    </>
  );
};

export default MERNFullStack;
