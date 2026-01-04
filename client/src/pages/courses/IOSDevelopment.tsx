import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

const IOSDevelopment = ({ onRequestCall }: { onRequestCall: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Swift Basics",
      points: [
        "Variables & Data Types",
        "Functions & Closures",
        "Swift Programming Basics",
      ],
    },
    {
      title: "Week 2: Xcode & UIKit",
      points: ["Xcode Interface", "Storyboards & Auto Layout", "UI Components"],
    },
    {
      title: "Week 3: SwiftUI Essentials",
      points: ["Declarative UI", "State & Bindings", "Reusable Components"],
    },
    {
      title: "Week 4: Networking & APIs",
      points: ["REST API Integration", "JSON Parsing", "Async/Await"],
    },
    {
      title: "Week 5: Local Data & Storage",
      points: ["UserDefaults", "Core Data Basics", "Database Integration"],
    },
    {
      title: "Week 6: Advanced iOS Features",
      points: ["Animations", "Push Notifications", "App Permissions"],
    },
    {
      title: "Week 7: Deployment & Testing",
      points: ["App Signing", "TestFlight", "Debugging"],
    },
    {
      title: "Week 8: Final Project & Job Prep",
      points: [
        "Build & Deploy Full App",
        "Portfolio Creation",
        "Resume + Interview Prep",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ================== BANNER (NO CROP) ================== */}
        <div className="w-full bg-black">
          <img
            src="/ios.jpeg"
            alt="iOS Development Banner"
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
              This iOS App Development course teaches you Swift programming,
              Xcode, UIKit, SwiftUI, API integration, and App Store deployment.
              Learn to build real iOS applications with modern tools and Apple
              guidelines.
            </p>
          </section>

          {/* ================== WEEKLY MODULES ================== */}
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

          {/* ================== DESKTOP BUTTONS ================== */}
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

        {/* ================== MOBILE FIXED BOTTOM CTA ================== */}
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

        {/* MODALS */}
        <FormModal open={showForm} onOpenChange={setShowForm} />
        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName="iOS App Development"
        />
      </div>
    </>
  );
};

export default IOSDevelopment;
