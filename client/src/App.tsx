// App.tsx
import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./hooks/use-theme";




// Layout
import Navigation from "@/components/navigation";
import TopTicker from "@/components/TopTicker";
import BottomHelpBar from "@/components/BottomHelpBar";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import ProgramsPage from "@/pages/programs";
import TestimonialsPage from "@/pages/testimonials";
import NotFound from "@/pages/not-found";

// Courses
import DevOps from "@/pages/courses/DevOps";
import AIML from "@/pages/courses/AIML";
import ManualTesting from "@/pages/courses/ManualTesting";
import AutomationTesting from "@/pages/courses/AutomationTesting";
import JavaFullStack from "@/pages/courses/JavaFullStack";
import PHPFullStack from "@/pages/courses/PHPFullStack";
import Frontend from "@/pages/courses/Frontend";
import Backend from "@/pages/courses/Backend";
import MERN from "@/pages/courses/MERN";
import BusinessAnalyst from "@/pages/courses/BusinessAnalyst";
import MedicalBilling from "@/pages/courses/MedicalBilling";
import USIT from "@/pages/courses/USIT";
import Android from "@/pages/courses/Android";
import Cybersecurity from "@/pages/courses/Cybersecurity";
import DataAnalytics from "@/pages/courses/DataAnalytics";
import DataScience from "@/pages/courses/DataScience";
import FrontendDevelopment from "@/pages/courses/FrontendDevelopment";
import IOSDevelopment from "@/pages/courses/IOSDevelopment";
import MERNFullStack from "@/pages/courses/MERNFullStack";
import PythonFullStack from "@/pages/courses/PythonFullStack";
import SoftwareTesting from "@/pages/courses/SoftwareTesting";

// Extra
import OnlineDegree from "@/pages/OnlineDegree";

// Popup
import ContactFormPopup from "@/components/ContactFormPopup";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  // Global event to open popup
  useEffect(() => {
    const handler = () => setShowForm(true);
    window.addEventListener("request-call", handler);
    return () => window.removeEventListener("request-call", handler);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />

          {/* 🔝 FIXED TOP TICKER */}
          <div className="fixed top-0 left-0 right-0 z-[9999]">
            <TopTicker />
          </div>

          {/* spacer */}
          <div className="h-[38px]" />

          {/* 🔝 FIXED NAVBAR */}
          <div className="fixed top-[38px] left-0 right-0 z-[9998] bg-white shadow">
            <Navigation onRequestCall={() => setShowForm(true)} />
          </div>

          {/* spacer */}
          <div className="h-[80px]" />

          {/* 🔁 ROUTES */}
          <Switch>
            <Route
              path="/"
              component={() => <Home onRequestCall={() => setShowForm(true)} />}
            />

            <Route
              path="/about"
              component={() => (
                <About onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/contact"
              component={() => (
                <Contact onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/programs"
              component={() => (
                <ProgramsPage onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/testimonials"
              component={() => (
                <TestimonialsPage onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/devops"
              component={() => (
                <DevOps onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/aiml"
              component={() => <AIML onRequestCall={() => setShowForm(true)} />}
            />

            <Route
              path="/courses/manual-testing"
              component={() => (
                <ManualTesting onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/automation-testing"
              component={() => (
                <AutomationTesting onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/java-fullstack"
              component={() => (
                <JavaFullStack onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/php-fullstack"
              component={() => (
                <PHPFullStack onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/frontend"
              component={() => (
                <Frontend onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/backend"
              component={() => (
                <Backend onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/mern"
              component={() => <MERN onRequestCall={() => setShowForm(true)} />}
            />

            <Route
              path="/courses/business-analyst"
              component={() => (
                <BusinessAnalyst onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/medical-billing"
              component={() => (
                <MedicalBilling onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/usit"
              component={() => <USIT onRequestCall={() => setShowForm(true)} />}
            />

            <Route
              path="/courses/android"
              component={() => (
                <Android onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/cybersecurity"
              component={() => (
                <Cybersecurity onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/data-analytics"
              component={() => (
                <DataAnalytics onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/data-science"
              component={() => (
                <DataScience onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/frontend-development"
              component={() => (
                <FrontendDevelopment onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/ios-development"
              component={() => (
                <IOSDevelopment onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/mern-fullstack"
              component={() => (
                <MERNFullStack onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/python-fullstack"
              component={() => (
                <PythonFullStack onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/courses/software-testing"
              component={() => (
                <SoftwareTesting onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route
              path="/online-degree-programs"
              component={() => (
                <OnlineDegree onRequestCall={() => setShowForm(true)} />
              )}
            />

            <Route component={NotFound} />
          </Switch>

          {/* 🟢 CONTACT POPUP (always on top) */}
          <ContactFormPopup open={showForm} onOpenChange={setShowForm} />

          <BottomHelpBar onRequestCall={() => setShowForm(true)} />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
