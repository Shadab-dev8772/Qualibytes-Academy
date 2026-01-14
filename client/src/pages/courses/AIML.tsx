import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

const AIML = ({ onRequestCall }: { onRequestCall: () => void }) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Python for AI",
      points: ["Python basics & libraries", "NumPy, Pandas introduction"],
    },
    {
      title: "Week 2: Math for ML",
      points: ["Linear algebra, probability", "Basic statistics"],
    },
    {
      title: "Week 3: Data Preprocessing",
      points: ["Cleaning, normalization", "Exploratory data analysis"],
    },
    {
      title: "Week 4: Supervised Learning",
      points: ["Regression & classification", "Model evaluation"],
    },
    {
      title: "Week 5: Unsupervised Learning",
      points: ["Clustering & dimensionality reduction", "K-Means, PCA"],
    },
    {
      title: "Week 6: Model Validation",
      points: ["Cross-validation", "Hyperparameter tuning"],
    },
    {
      title: "Week 7: Deep Learning Basics",
      points: ["Neural networks intro", "Activation functions"],
    },
    {
      title: "Week 8: CNNs & Computer Vision",
      points: ["Convolutional layers", "Image classification"],
    },
    {
      title: "Week 9: NLP & Text Processing",
      points: ["Tokenization, TF-IDF", "Text classification"],
    },
    {
      title: "Week 10: Model Deployment",
      points: ["Flask API for ML models", "Using Docker for serving"],
    },
    {
      title: "Week 11: AI Ethics & Explainability",
      points: ["Bias & fairness in models", "Model interpretation"],
    },
    {
      title: "Week 12: Capstone & Interview Prep",
      points: ["Final project demo", "Mock interviews & resume prep"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* ================== BANNER (NO CROP VERSION) ================== */}
        <div className="w-full bg-black">
          <img
            src="/ai&ml.jpeg"
            alt="AI ML Banner"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          {/* About Section */}
          <section>
            <h2
              className="text-2xl text-gray-900 dark:text-white
 font-semibold mb-3"
            >
              About the Course
            </h2>
            <p
              className="text-gray-900 dark:text-white
 text-lg leading-relaxed"
            >
              This course offers a structured 12-week journey into Artificial
              Intelligence and Machine Learning. You’ll gain strong foundations
              in Python, data preprocessing, model training, deployment, and
              real-world AI/ML applications.
            </p>
          </section>

          {/* Weekly Modules */}
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

          {/* Desktop Buttons */}
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

        {/* MOBILE FIXED BOTTOM BUTTONS */}
        <div className="sm:hidden fixed bottom-8 left-0 w-full bg-white p-4 items-start flex justify-between gap-4 border-t border-gray-700 z-50">
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

        {/* Modals */}
        <FormModal open={showForm} onOpenChange={setShowForm} />
        <BrochureModal
          open={showBrochure}
          onClose={() => setShowBrochure(false)}
          programName="AI/ML"
        />
      </div>
    </>
  );
};

export default AIML;
