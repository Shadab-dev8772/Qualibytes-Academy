import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";

interface CourseProps {
  onRequestCall: () => void;
}

const MedicalBilling = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);

  const weeks = [
    {
      title: "Week 1: Healthcare Billing Basics",
      points: [
        "Introduction to U.S. Healthcare",
        "Medical billing workflow",
        "HIPAA compliance",
      ],
    },
    {
      title: "Week 2: Coding Systems",
      points: [
        "CPT, ICD-10, HCPCS overview",
        "Diagnosis & procedure coding",
        "Code sets and modifiers",
      ],
    },
    {
      title: "Week 3: Claims Process & Insurance",
      points: [
        "Patient eligibility & benefits",
        "Claim lifecycle",
        "Denials and re-submission",
      ],
    },
    {
      title: "Week 4: Tools, RCM & Interview Prep",
      points: [
        "EHR & billing software",
        "Revenue Cycle Management",
        "Mock calls & resume guidance",
      ],
    },
  ];

  return (
    <>
      {/* Navigation */}

      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ========== NO-CROP BANNER ========== */}
        <div className="w-full bg-black">
          <img
            src="/medical-billing.jpeg"
            alt="Medical Billing Banner"
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
          {/* ABOUT SECTION */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This 4-week Medical Billing course introduces students to U.S.
              healthcare billing processes, coding formats (CPT, ICD-10), claim
              management, RCM, insurance guidelines, and the tools used in
              real-world American healthcare billing operations.
            </p>
          </section>

          {/* WEEKLY MODULES */}
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

          {/* DESKTOP CTA */}
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
            onClick={onRequestCall}
          >
            Request a Call
          </Button>
        </div>

        {/* FORM MODAL */}
        <FormModal open={showForm} onOpenChange={setShowForm} />
      </div>
    </>
  );
};

export default MedicalBilling;
