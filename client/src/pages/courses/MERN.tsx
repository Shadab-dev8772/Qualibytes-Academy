import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";

// ✅ PROPS
interface CourseProps {
  onRequestCall: () => void;
}

const BackendMERN = ({ onRequestCall }: CourseProps) => {
  const [showForm, setShowForm] = useState(false);

  const weeks = [
    {
      title: "Week 1: JavaScript Refresher",
      points: ["Functions, scopes, ES6", "Async/await, promises"],
    },
    {
      title: "Week 2: Node.js Fundamentals",
      points: ["Core modules", "npm & scripts", "File system"],
    },
    {
      title: "Week 3: Express.js Basics",
      points: ["Routing", "Middleware", "Request/response cycle"],
    },
    {
      title: "Week 4: MongoDB & Mongoose",
      points: ["CRUD operations", "Schema & models", "Database design"],
    },
    {
      title: "Week 5: Authentication & JWT",
      points: ["User login/register", "JWT generation & middleware"],
    },
    {
      title: "Week 6: REST APIs & Postman",
      points: ["RESTful principles", "Testing with Postman", "Error handling"],
    },
    {
      title: "Week 7: Advanced CRUD & Validation",
      points: ["Populate, relations", "Validation & sanitization"],
    },
    {
      title: "Week 8: File Uploads & Image Handling",
      points: ["Multer setup", "Cloudinary integration"],
    },
    {
      title: "Week 9: Roles & Deployment",
      points: ["Admin/user roles", "Deploy on Render / Railway"],
    },
    {
      title: "Week 10: Capstone Project & Interview Prep",
      points: [
        "Build & present REST API project",
        "Mock interview + GitHub portfolio",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ================= BANNER (NO CROP) ================= */}
        <div className="w-full bg-black">
          <img
            src="/mern-backend.jpeg"
            alt="MERN Backend Banner"
            className="
              w-full
              h-auto
              object-contain
              max-h-[650px]
              mx-auto
            "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-28 space-y-14">
          {/* ABOUT SECTION */}
          <section>
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-3">
              About the Course
            </h2>

            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              This backend-focused MERN stack course takes you from JavaScript
              fundamentals to building scalable REST APIs with Node.js, Express,
              and MongoDB. Ideal for learners dedicating 5–7 hours/week.
            </p>
          </section>

          {/* WEEKLY MODULES */}
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

        {/* ================= MOBILE CTA (FIXED) ================= */}
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

        {/* FORM MODAL */}
        <FormModal open={showForm} onOpenChange={setShowForm} />
      </div>
    </>
  );
};

export default BackendMERN;
