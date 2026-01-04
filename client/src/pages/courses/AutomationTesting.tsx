import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const AutomationTesting = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Java Fundamentals",
      points: ["OOP concepts", "Java syntax & IDE setup"],
    },
    {
      title: "Week 2: Java Collections & File Handling",
      points: ["List, Map, Set usage", "File I/O basics"],
    },
    {
      title: "Week 3: Selenium Basics",
      points: ["Selenium WebDriver intro", "Browser commands & locators"],
    },
    {
      title: "Week 4: WebElement Handling",
      points: ["Checkbox, Dropdown, Alert handling", "XPath & CSS"],
    },
    {
      title: "Week 5: TestNG Framework",
      points: ["Annotations, assertions", "Test suites & parallel tests"],
    },
    {
      title: "Week 6: Data-Driven Testing",
      points: ["Excel integration", "Parameterization"],
    },
    {
      title: "Week 7: Page Object Model (POM)",
      points: ["Reusable components", "POM design pattern"],
    },
    {
      title: "Week 8: Framework Development",
      points: ["Creating modular frameworks", "Logging & reporting"],
    },
    {
      title: "Week 9: Maven, Jenkins, Git",
      points: ["CI setup with Jenkins", "Version control with Git"],
    },
    {
      title: "Week 10: API Testing with Postman",
      points: ["GET/POST methods", "Auth & environment setup"],
    },
    {
      title: "Week 11: Real-Time Project",
      points: ["End-to-end test scenario", "Bug tracking & reporting"],
    },
    {
      title: "Week 12: Interview Prep & Resume",
      points: ["Mock interviews", "Resume & GitHub setup"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* Banner */}
        <div className="w-full bg-black">
          <img
            src="/automation.jpeg"
            alt="Automation Testing Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        {/* Page Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This course provides a comprehensive understanding of Automation
              Testing, focusing on Selenium, Java, TestNG, frameworks, API
              testing, and CI/CD integration with tools like Maven and Jenkins.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week, i) => (
              <div
                key={i}
                className="bg-card text-card-foreground p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {week.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

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

        {/* Mobile CTA */}
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

        <FormModal open={showForm} onOpenChange={setShowForm} />
        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName="Automation Testing"
          programKey="automationTesting"
        />
      </div>
    </>
  );
};

export default AutomationTesting;
