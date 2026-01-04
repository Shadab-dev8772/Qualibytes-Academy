import React, { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import OldFooter from "@/components/oldFooter";
import { Button } from "@/components/ui/button";
import {
  BrainCog,
  Code,
  Network,
  FlaskConical,
  BarChart4,
  X,
  Shield,
  Sun,
  Moon,
} from "lucide-react";
import { useLocation } from "wouter";
import { BROCHURE_LINKS } from "@/brochureLinks";

/* ---------------------- PROGRAM TYPES ---------------------- */
interface Program {
  name: string;
  path: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  tags: string[];
}

interface ProgramsProps {
  onRequestCall?: () => void;
}

/* ---------------------- PROGRAMS DATA ---------------------- */
export const programs: Program[] = [
  {
    name: "DevOps",
    path: "devops",
    icon: <Network className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/devops.jpeg",
    description:
      "Master CI/CD, Docker, Kubernetes, AWS, and automation in this hands-on DevOps training.",
    tags: ["Self-paced", "Real Projects", "Lifetime Access"],
  },

  {
    name: "AI/ML",
    path: "aiml",
    icon: <BrainCog className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/ai&ml.jpeg",
    description:
      "Learn Machine Learning, Python, TensorFlow, PyTorch and deploy AI models.",
    tags: ["Python", "TensorFlow", "Project Based"],
  },

  {
    name: "Manual Testing",
    path: "manual-testing",
    icon: <FlaskConical className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/manual.jpeg",
    description:
      "Learn software testing fundamentals, techniques, test cases, bug reporting.",
    tags: ["Bug Reports", "Test Cases", "Foundational"],
  },

  {
    name: "Automation Testing",
    path: "automation-testing",
    icon: <FlaskConical className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/automation.jpeg",
    description:
      "Automate Web & API tests using Selenium, Maven, TestNG, real-world projects.",
    tags: ["Selenium", "Automation", "API Testing"],
  },

  {
    name: "Java Full Stack",
    path: "java-fullstack",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/java.jpeg",
    description:
      "Learn Java, Spring Boot, REST APIs & React. Become a full-stack developer.",
    tags: ["Java", "Spring Boot", "Full Stack"],
  },

  {
    name: "Business Analyst",
    path: "business-analyst",
    icon: <BarChart4 className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/business_analytics.jpeg",
    description:
      "Master BRDs, Jira, requirement gathering & stakeholder management.",
    tags: ["Jira", "BRD", "Stakeholder Mgmt"],
  },

  {
    name: "Android Development",
    path: "android",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/android.jpeg",
    description:
      "Learn Android Development using Java/Kotlin, Android Studio, Jetpack, APIs & Firebase.",
    tags: ["Kotlin", "Java", "Firebase"],
  },

  {
    name: "Backend Development",
    path: "backend",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/backend.jpeg",
    description:
      "Learn Backend Development using Node.js, Express, Databases, APIs, Authentication, Deployment.",
    tags: ["Node.js", "Express", "MongoDB"],
  },

  {
    name: "Cyber Security",
    path: "cybersecurity",
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    image: "/thumbnail/cybersecurity.jpeg",
    description:
      "Learn ethical hacking, penetration testing & network security.",
    tags: ["Ethical Hacking", "Network Security", "Tools"],
  },

  {
    name: "Data Analytics",
    path: "data-analytics",
    icon: <BarChart4 className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/data_analytics.jpeg",
    description: "Master Excel, SQL, Power BI & real-world analytics.",
    tags: ["Excel", "SQL", "Power BI"],
  },

  {
    name: "Data Science",
    path: "data-science",
    icon: <BrainCog className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/data_science.jpeg",
    description: "Learn Python, ML, Deep Learning & real-world Data Science.",
    tags: ["Python", "ML", "Data Visualization"],
  },

  {
    name: "Frontend Development",
    path: "frontend-development",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/frontend.jpeg",
    description:
      "Learn HTML, CSS, JS, React, Tailwind, APIs & modern UI development.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    name: "iOS App Development",
    path: "ios-development",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/ios.jpeg",
    description: "Learn Swift, SwiftUI, Xcode & build real iOS applications.",
    tags: ["Swift", "Xcode", "SwiftUI"],
  },

  {
    name: "MERN Full Stack",
    path: "mern-fullstack",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/mern.jpeg",
    description:
      "Learn MongoDB, Express, React, Node & full-stack project building.",
    tags: ["React", "Node.js", "MongoDB"],
  },

  {
    name: "Python Full Stack",
    path: "python-fullstack",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/python.jpeg",
    description:
      "Learn Python, Django/Flask, REST APIs & full stack development.",
    tags: ["Python", "Django", "Flask"],
  },

  {
    name: "Software Testing",
    path: "software-testing",
    icon: <FlaskConical className="h-10 w-10 text-blue-500" />,
    image: "thumbnail/software_testing.jpeg",
    description:
      "Learn Manual Testing + Automation, API, Database & Performance testing.",
    tags: ["Manual", "Automation", "Selenium"],
  },
];

/* ---------------------- DARK MODE TOGGLE ---------------------- */
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved === "dark" || (!saved && prefers);

    setIsDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg border hover:scale-110 transition"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

/* ---------------------- BROCHURE MODAL ---------------------- */
const BrochureModal = ({
  open,
  onClose,
  programName,
}: {
  open: boolean;
  onClose: () => void;
  programName: string | null;
}) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  // Normalize programName to match BROCHURE_LINKS keys (e.g., DevOps -> devops, Manual Testing -> manualTesting)
  const normalizeKey = (name: string | null) => {
    if (!name) return "";
    // If single word, just lowercase (DevOps -> devops)
    if (!name.includes(" ")) return name.toLowerCase();
    // For multi-word: Manual Testing -> manualTesting
    return name
      .replace(/\s+(.)/g, (m, chr) => chr.toUpperCase())
      .replace(/^(.)/, (m, chr) => chr.toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    const key = normalizeKey(programName);
    const link = BROCHURE_LINKS[key];

    if (link) {
      const a = document.createElement("a");
      a.href = link;
      a.download = `${programName}-Brochure.pdf`;
      a.click();
    } else {
      alert("Brochure not available for this program.");
    }

    onClose();
    setSubmitting(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-white dark:bg-[#111] rounded-2xl shadow-xl p-6 border dark:border-gray-700 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-bold text-center mb-4">
          Download {programName} Brochure
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'phone'].map((field) => (
            <input
              key={field}
              name={field}
              required
              onChange={(e) =>
                setFormData((p) => ({ ...p, [field]: e.target.value }))
              }
              placeholder={field.toUpperCase()}
              className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800"
            />
          ))}

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            {submitting ? "Submitting..." : "Submit & Download"}
          </Button>
        </form>
      </div>
    </div>
  );
};

/* ---------------------- MAIN_PAGE ---------------------- */
const ProgramsPage = ({ onRequestCall }: ProgramsProps) => {
  const [showBrochure, setShowBrochure] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  /* PAIR PROGRAMS */
  const pairs: Program[][] = [];
  for (let i = 0; i < programs.length; i += 2) {
    pairs.push(programs.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      {/* HERO TITLE */}
      {/* 🔥 HERO BANNER (Background Image Like Course Page) */}
      <section className="relative w-full bg-black">
        <img
          src="/business_analytics.jpeg"
          alt="About Banner"
          className="
            w-full
            h-auto
            object-contain
            max-h-[650px]
            mx-auto
          "
        />
      </section>

      {/* PROGRAMS LIST */}
      <div className="py-12 px-4 lg:px-12">
        <div className="flex flex-col gap-20">
          {pairs.map((pair, pIndex) => (
            <div key={pIndex} className="flex flex-col lg:flex-row gap-10">
              {pair.map((program, index) => {
                const isEven = (pIndex * 2 + index) % 2 === 0;

                return (
                  <div
                    key={program.name}
                    className={`flex flex-col lg:flex-row ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    } 
                      bg-white dark:bg-[#111] border rounded-xl w-full 
                      p-6 items-center gap-6 shadow-lg transition`}
                  >
                    {/* FIXED — NO CROP IMAGE */}
                    <div className="w-full lg:w-2/2 flex justify-center">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full max-w-[600px] rounded-xl shadow-lg object-contain"
                      />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start items-center gap-3 mb-3">
                        {program.icon}
                        <h2 className="text-2xl font-semibold">
                          {program.name}
                        </h2>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {program.description}
                      </p>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                        {program.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 dark:bg-[#1e2228] text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center lg:justify-start gap-3">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => {
                            setLocation(`/courses/${program.path}`);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          View Program
                        </Button>

                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => {
                            setSelectedProgram(program.name);
                            setShowBrochure(true);
                          }}
                        >
                          Brochure
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* BROCHURE MODAL */}
      {showBrochure && (
        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName={selectedProgram}
        />
      )}

      <OldFooter />
    </div>
  );
};

export default ProgramsPage;
