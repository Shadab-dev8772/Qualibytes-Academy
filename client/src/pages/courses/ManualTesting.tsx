import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

const ManualTesting = ({ onRequestCall }: { onRequestCall: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Introduction to Software Testing",
      points: ["SDLC vs STLC", "Types of testing"],
    },
    {
      title: "Week 2: Requirements & Test Planning",
      points: ["Understanding requirements", "Test planning and strategy"],
    },
    {
      title: "Week 3: Test Case Design",
      points: ["Writing test cases", "Test case templates"],
    },
    {
      title: "Week 4: Defect Management",
      points: ["Defect lifecycle", "Bug reporting tools overview"],
    },
    {
      title: "Week 5: Testing Techniques",
      points: ["Black box testing", "Equivalence partitioning"],
    },
    {
      title: "Week 6: Test Execution & Reporting",
      points: ["Test execution flow", "Daily status reports"],
    },
    {
      title: "Week 7: Web & Mobile Testing",
      points: ["UI/UX test cases", "Cross-browser & responsive testing"],
    },
    {
      title: "Week 8: Agile Testing",
      points: ["SCRUM basics", "Sprint testing cycle"],
    },
    {
      title: "Week 9: Tools Overview",
      points: ["JIRA for defect tracking", "TestLink for test management"],
    },
    {
      title: "Week 10: Test Metrics & Audit",
      points: ["Coverage analysis", "Review & audits"],
    },
    {
      title: "Week 11: Project Simulation",
      points: ["Real project workflow", "Documentation practice"],
    },
    {
      title: "Week 12: Mock Interviews & Job Readiness",
      points: ["Interview Q&A", "Resume & LinkedIn setup"],
    },
  ];

  return (
    <>
      {/* Top Navigation */}

      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ========== NO-CROP BANNER ========== */}
        <div className="w-full bg-black">
          <img
            src="/manual.jpeg"
            alt="Manual Testing Banner"
            className="
              w-full
              h-auto
              object-contain
              max-h-[650px]
              mx-auto
            "
          />
        </div>

        {/* ========== PAGE CONTENT ========== */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-28 space-y-14">
          {/* About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This course provides a complete foundation in Manual Testing.
              You’ll learn SDLC, STLC, test case design, defect lifecycle,
              documentation, and real-time testing with industry tools.
            </p>
          </section>

          {/* Weekly Modules */}
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

        {/* ========== MOBILE FIXED CTA ========== */}
        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white p-4 flex justify-between gap-4 border-t border-gray-700 z-50">
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
          programName="Manual Testing"
          programKey="manualTesting"
        />
      </div>
    </>
  );
};

export default ManualTesting;
