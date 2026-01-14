import React, { useState } from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import BrochureModal from "@/components/BrochureModal";
import { Button } from "@/components/ui/button";

interface PageProps {
  onRequestCall: () => void;
}

const DevOps = ({ onRequestCall }: PageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const weeks = [
    {
      title: "Week 1: Introduction & Linux Fundamentals",
      points: [
        "OS basics: Kernel, Shell, CLI vs GUI",
        "Linux File System, Permissions, Users",
        "Command-line tools and scripting",
      ],
    },
    {
      title: "Week 2: Git & Version Control",
      points: [
        "Git basics: init, clone, add, commit",
        "Branching, merging, conflict resolution",
        "Working with GitHub, GitLab",
      ],
    },
    {
      title: "Week 3: Shell Scripting & Networking",
      points: [
        "Shell scripting projects",
        "Automating tasks with cron",
        "Networking: IP, DNS, SSH, firewalls",
      ],
    },
    {
      title: "Week 4: Docker & Containerization",
      points: [
        "Docker architecture and setup",
        "Building Docker images",
        "Multi-stage builds & Docker Compose",
      ],
    },
    {
      title: "Week 5: Advanced Docker & CI/CD Basics",
      points: [
        "Docker networking, volumes, registries",
        "Private Docker Registry",
        "CI/CD overview and Jenkins setup",
      ],
    },
    {
      title: "Week 6: Jenkins Pipelines & Integration",
      points: [
        "Jenkinsfile syntax",
        "Dockerized CI/CD pipeline",
        "Jenkins integration with Git and Kubernetes",
      ],
    },
    {
      title: "Week 7: Terraform & IaC",
      points: [
        "Terraform basics",
        "Write, plan, apply workflow",
        "Terraform on AWS",
      ],
    },
    {
      title: "Week 8: Ansible",
      points: [
        "Playbooks, inventory",
        "Roles, variables, Jinja2",
        "Real-world provisioning",
      ],
    },
    {
      title: "Week 9: Kubernetes Fundamentals",
      points: [
        "Pods, deployments, services",
        "YAML + declarative management",
        "Secrets, ConfigMaps, Namespaces",
      ],
    },
    {
      title: "Week 10: Advanced Kubernetes",
      points: [
        "Ingress, TLS, DNS",
        "StatefulSets, PVCs",
        "RBAC & real-world EKS deployment",
      ],
    },
    {
      title: "Week 11: Monitoring",
      points: [
        "Prometheus setup",
        "Grafana dashboards",
        "K8s monitoring + scaling",
      ],
    },
    {
      title: "Week 12: Final Project & Job Prep",
      points: [
        "CI/CD with Jenkins + Docker + K8s",
        "IaC deployment",
        "Resume + Mock Interviews",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-qualibytes-background text-white">
        <div className="w-full bg-black">
          <img
            src="/devops.jpeg"
            alt="DevOps Banner"
            className="w-full h-auto object-contain max-h-[650px] mx-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 pb-28">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              About the Course
            </h2>
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-200">
              This course provides a comprehensive introduction to DevOps,
              covering essential tools and practices such as Linux, Git, Docker,
              CI/CD, Terraform, Kubernetes, and monitoring.
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
          programName="DevOps"
          programKey="devops"
        />
      </div>
    </>
  );
};

export default DevOps;
