import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const BackendDevelopment = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Node.js Basics",
      points: [
        "What is Node.js?",
        "Modules & NPM",
        "File System, Streams, Events",
      ],
    },
    {
      title: "Week 2: Express.js & Routing",
      points: [
        "Building Express server",
        "RESTful APIs",
        "Middleware & routing",
      ],
    },
    {
      title: "Week 3: MongoDB Integration",
      points: [
        "CRUD operations",
        "Mongoose schemas",
        "Relational vs Non-relational",
      ],
    },
    {
      title: "Week 4: MySQL & Sequelize ORM",
      points: ["MySQL setup", "Sequelize models", "Associations & joins"],
    },
    {
      title: "Week 5: Authentication & Security",
      points: ["JWT Authentication", "Password hashing", "API Security & CORS"],
    },
    {
      title: "Week 6: Testing & API Validation",
      points: [
        "Postman advanced",
        "Joi validation",
        "Centralized error handling",
      ],
    },
    {
      title: "Week 7: Deployment & CI/CD",
      points: [
        "Env variables",
        "Deploy to Render / Railway",
        "CI/CD introduction",
      ],
    },
    {
      title: "Week 8: Final Project & Interview Prep",
      points: ["Build production backend", "Deployment", "Mock interviews"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        <div className="w-full bg-black">
          <img
            src="/backend.jpeg"
            alt="Backend Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This Backend Development course takes you from beginner to
              job-ready backend engineer. Learn Node.js, Express, REST APIs,
              MongoDB, MySQL, authentication, security, testing, deployment and
              CI/CD with hands-on projects.
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
          programName="Backend Development"
        />
      </div>
    </>
  );
};

export default BackendDevelopment;
