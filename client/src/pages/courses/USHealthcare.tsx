import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface CourseProps {
  onRequestCall: () => void;
}

const USHealthcareStaffing = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const days = [
    {
      title: "Day 1: U.S. Healthcare Staffing Overview",
      points: ["Healthcare job roles: RN, CNA, LPN", "Staffing agency roles"],
    },
    {
      title: "Day 2: Recruitment Lifecycle",
      points: ["Job intake → sourcing → onboarding", "Screening techniques"],
    },
    {
      title: "Day 3: Sourcing & Job Portals",
      points: ["Boolean search", "Dice, Monster, Indeed sourcing"],
    },
    {
      title: "Day 4: Communication Skills",
      points: ["Cold calling", "Email formatting", "Interview scheduling"],
    },
    {
      title: "Day 5: Documentation & ATS",
      points: ["Applicant Tracking Systems", "Candidate tracking"],
    },
    {
      title: "Day 6: Compliance Essentials",
      points: ["HIPAA basics", "Credentialing", "Background checks"],
    },
    {
      title: "Day 7: Mock Calls & Interview Prep",
      points: ["Live mock scenarios", "FAQs", "Resume guidance"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ⭐ Banner — No Crop, Object Contain */}
        <div className="w-full bg-black">
          <img
            src="/us_healthcare.jpeg"
            alt="U.S. Healthcare Staffing Banner"
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
              This 7-day crash course prepares you for a career in U.S.
              healthcare recruitment & staffing. You’ll learn sourcing,
              screening, job portals, communication skills, ATS tools, U.S.
              compliance standards, and real-world recruitment workflows used by
              hospitals, clinics, and healthcare agencies.
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

        {/* ⭐ Mobile Bottom Fixed Buttons */}
        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e] p-4 border-t border-gray-700 flex gap-4 z-50">
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
          programName="U.S. Healthcare Staffing"
        />
      </div>
    </>
  );
};

export default USHealthcareStaffing;
