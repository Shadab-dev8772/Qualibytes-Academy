import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";

// ⭐ Required Props Interface
interface CourseProps {
  onRequestCall: () => void;
}

const PHPFullStack = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);

  const weeks = [
    {
      title: "Week 1: HTML & CSS Basics",
      points: ["HTML5 structure", "CSS styling", "Forms and layout"],
    },
    {
      title: "Week 2: JavaScript Essentials",
      points: ["Variables, loops", "DOM manipulation", "Event handling"],
    },
    {
      title: "Week 3: Advanced JavaScript & jQuery",
      points: ["Functions & arrays", "jQuery basics", "AJAX requests"],
    },
    {
      title: "Week 4: PHP Basics",
      points: ["Syntax, variables", "Conditional statements", "Loops"],
    },
    {
      title: "Week 5: PHP Functions & Forms",
      points: ["GET & POST", "Form validation", "Sessions & cookies"],
    },
    {
      title: "Week 6: Working with MySQL",
      points: ["Database design", "CRUD operations", "MySQL with PHP"],
    },
    {
      title: "Week 7: Authentication System",
      points: [
        "User login & registration",
        "Password hashing",
        "Session management",
      ],
    },
    {
      title: "Week 8: Laravel Basics",
      points: ["Routing", "Blade templates", "MVC architecture"],
    },
    {
      title: "Week 9: Laravel CRUD & Forms",
      points: ["Controllers", "Form handling", "Validation"],
    },
    {
      title: "Week 10: REST API with Laravel",
      points: ["API routes", "Postman testing", "API security"],
    },
    {
      title: "Week 11: Project Work",
      points: ["E-commerce or Blog", "Admin panel & user roles"],
    },
    {
      title: "Week 12: Job Preparation",
      points: ["Interview questions", "Resume building", "GitHub deployment"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ NO-CROP BANNER */}
        <div className="w-full bg-black">
          <img
            src="/php-fullstack.jpeg"
            alt="PHP Full Stack Banner"
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
          {/* ⭐ ABOUT SECTION */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This PHP Full Stack Development course equips you with the skills
              to build dynamic and responsive web applications. You'll master
              both front-end and back-end development using HTML, CSS,
              JavaScript, PHP, MySQL, and modern Laravel framework tools.
            </p>
          </section>

          {/* ⭐ WEEKLY MODULES */}
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

          {/* ⭐ DESKTOP BUTTONS */}
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
              onClick={onRequestCall}
            >
              Request a Call
            </Button>
          </div>
        </div>

        {/* ⭐ MOBILE FIXED BUTTONS */}
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
            onClick={onRequestCall}
          >
            Request a Call
          </Button>
        </div>

        {/* ⭐ FORM MODAL */}
        <FormModal open={showForm} onOpenChange={setShowForm} />
      </div>
    </>
  );
};

export default PHPFullStack;
