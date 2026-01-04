import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const DataScience = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Python for Data Science",
      points: ["Python Basics", "NumPy Arrays", "Data Cleaning with Pandas"],
    },
    {
      title: "Week 2: Statistics & Probability",
      points: [
        "Descriptive Statistics",
        "Probability Theory",
        "Hypothesis Testing",
      ],
    },
    {
      title: "Week 3: Data Visualization",
      points: ["Matplotlib", "Seaborn", "Exploratory Data Analysis (EDA)"],
    },
    {
      title: "Week 4: Machine Learning Basics",
      points: [
        "Supervised Learning",
        "Regression & Classification",
        "Model Evaluation",
      ],
    },
    {
      title: "Week 5: Advanced Machine Learning",
      points: ["Feature Engineering", "Random Forest", "Hyperparameter Tuning"],
    },
    {
      title: "Week 6: SQL for Data Science",
      points: ["SQL Joins", "Aggregations", "Window Functions"],
    },
    {
      title: "Week 7: Deep Learning (Optional)",
      points: ["Neural Networks", "TensorFlow Basics", "Image Classification"],
    },
    {
      title: "Week 8: Real-World Projects & Job Prep",
      points: [
        "ML Projects",
        "Analytics Dashboards",
        "Resume + Interview Prep",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        <div className="w-full bg-black">
          <img
            src="/data_science.jpeg"
            alt="Data Science Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This Data Science course covers Python, Machine Learning, Data
              Cleaning, Data Visualization, Statistics, and real-world projects.
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
          programName="Data Science"
        />
      </div>
    </>
  );
};

export default DataScience;
