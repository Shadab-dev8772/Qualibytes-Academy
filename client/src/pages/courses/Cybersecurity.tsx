import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const Cybersecurity = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Cyber Security Fundamentals",
      points: ["Security Basics", "Types of Attacks", "CIA Triad"],
    },
    {
      title: "Week 2: Networking Basics",
      points: ["TCP/IP", "Ports & Protocols", "Firewalls & IDS"],
    },
    {
      title: "Week 3: Linux for Security",
      points: ["Linux Commands", "Bash Scripting", "File Permissions"],
    },
    {
      title: "Week 4: Ethical Hacking",
      points: ["Reconnaissance", "Scanning", "Enumeration"],
    },
    {
      title: "Week 5: Penetration Testing Tools",
      points: ["Nmap", "Metasploit", "Burp Suite"],
    },
    {
      title: "Week 6: Web App Security",
      points: ["OWASP Top 10", "SQL Injection", "XSS & CSRF"],
    },
    {
      title: "Week 7: Cloud & Network Security",
      points: ["Cloud Security Basics", "VPN", "Zero Trust"],
    },
    {
      title: "Week 8: Final Project & Job Prep",
      points: [
        "Real Case Studies",
        "Hacking Simulation",
        "Resume + Interview Prep",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        <div className="w-full bg-black">
          <img
            src="/cybersecurity.jpeg"
            alt="Cybersecurity Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This Cyber Security course teaches you network security, ethical
              hacking, penetration testing, vulnerability scanning, and how to
              protect systems from cyber attacks.
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

        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white p-4 flex gap-4 border-t border-gray-700 z-50">
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
          programName="Cyber Security"
        />
      </div>
    </>
  );
};

export default Cybersecurity;
