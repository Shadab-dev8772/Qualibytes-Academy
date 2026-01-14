import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

// ⭐ Required Props
interface CourseProps {
  onRequestCall: () => void;
}

const SoftwareTesting = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Manual Testing Basics",
      points: ["SDLC / STLC", "Test Case Writing", "Bug Reporting"],
    },
    {
      title: "Week 2: Test Management Tools",
      points: ["Jira", "TestRail", "Bug Life Cycle"],
    },
    {
      title: "Week 3: SQL for Testers",
      points: ["Basic Queries", "Joins", "Database Testing"],
    },
    {
      title: "Week 4: API Testing",
      points: ["Postman", "REST APIs", "Assertions"],
    },
    {
      title: "Week 5: Automation Fundamentals",
      points: ["Java Basics", "OOP for Testers", "Maven & TestNG"],
    },
    {
      title: "Week 6: Selenium WebDriver",
      points: ["Locators", "Test Scripts", "Automation Framework"],
    },
    {
      title: "Week 7: Framework + CI/CD",
      points: ["Hybrid Framework", "POM", "Jenkins Basics"],
    },
    {
      title: "Week 8: Final Project & Job Prep",
      points: ["Live Testing Project", "Mock Interviews", "Resume Preparation"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ NO CROP BANNER */}
        <div className="w-full bg-black">
          <img
            src="/software_testing.jpeg"
            alt="Software Testing Banner"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-28 space-y-14">
          {/* ⭐ About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This Software Testing course covers both{" "}
              <b>Manual + Automation Testing</b>. You will learn Test Cases, Bug
              Reports, SDLC, STLC, Selenium, API Testing, Database Testing, and
              real-world testing tools used in top companies.
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

        {/* ⭐ Mobile Fixed Buttons */}
        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white p-4 border-t border-gray-700 flex gap-4 z-50">
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
          programName="Software Testing"
        />
      </div>
    </>
  );
};

export default SoftwareTesting;
