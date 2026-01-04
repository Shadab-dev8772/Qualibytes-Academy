import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const DataAnalytics = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Introduction to Data Analytics",
      points: [
        "What is Data Analytics?",
        "Types of Data",
        "Analytical Thinking",
      ],
    },
    {
      title: "Week 2: Excel for Data Analysis",
      points: ["Functions & Formulas", "Pivot Tables", "Data Cleaning"],
    },
    {
      title: "Week 3: Statistics for Data",
      points: ["Descriptive Statistics", "Correlation", "Probability Basics"],
    },
    {
      title: "Week 4: SQL for Data",
      points: ["Basic Queries", "Joins & Subqueries", "Aggregations"],
    },
    {
      title: "Week 5: Power BI Dashboards",
      points: ["Data Modeling", "DAX Formulas", "Interactive Dashboards"],
    },
    {
      title: "Week 6: Python for Data (Optional)",
      points: [
        "Pandas Basics",
        "Visualization with Matplotlib",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Week 7: Real-World Data Projects",
      points: ["Sales Dashboard", "Customer Insights", "Forecasting"],
    },
    {
      title: "Week 8: Interview & Job Preparation",
      points: ["Analytics Portfolio", "Mock Interviews", "Resume Building"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        <div className="w-full bg-black">
          <img
            src="/data_analytics.jpeg"
            alt="Data Analytics Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This Data Analytics course covers Excel, SQL, Power BI,
              statistics, dashboards, business insights, and real-world
              analytics workflows.
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
          programName="Data Analytics"
          programKey="dataAnalytics"
        />
      </div>
    </>
  );
};

export default DataAnalytics;
