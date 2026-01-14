import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface CourseProps {
  onRequestCall: () => void;
}

const USITStaffing = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const days = [
    {
      title: "Day 1: U.S. IT Staffing Overview",
      points: [
        "IT staffing industry basics",
        "Common job titles: Java, .NET, QA, etc.",
      ],
    },
    {
      title: "Day 2: IT Recruitment Lifecycle",
      points: ["Job requirements & intake", "End-to-end hiring process"],
    },
    {
      title: "Day 3: Sourcing & Job Portals",
      points: ["Boolean search", "Dice, Monster, LinkedIn sourcing"],
    },
    {
      title: "Day 4: Screening & Communication",
      points: ["Resume filtering", "Cold calling & email scripting"],
    },
    {
      title: "Day 5: Documentation & ATS",
      points: ["Using ATS systems", "Resume tracking workflows"],
    },
    {
      title: "Day 6: Visa Types & Pay Terms",
      points: ["H1B, GC, USC, TN, OPT", "W2, C2C, 1099"],
    },
    {
      title: "Day 7: Mock Calls & Interview Prep",
      points: ["Live recruiter simulations", "Top FAQs & resume polishing"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ Banner — No Crop Version */}
        <div className="w-full bg-black">
          <img
            src="/us_it_staffing.jpeg"
            alt="US IT Staffing Banner"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-28 space-y-14">
          {/* ⭐ About Section */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This 7-day course is designed for individuals aspiring to build a
              career in U.S. IT staffing. Learn sourcing, screening, compliance,
              communication, and end-to-end recruitment workflows used by top
              U.S. staffing agencies and IT consulting companies.
            </p>
          </section>

          {/* ⭐ Daily Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {days.map((day, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{day.title}</h3>

                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {day.points.map((pt, i) => (
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

        {/* ⭐ Mobile Bottom Buttons */}
        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white border-t border-gray-700 p-4 flex gap-4 z-50">
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
          programName="U.S. IT Staffing"
        />
      </div>
    </>
  );
};

export default USITStaffing;
