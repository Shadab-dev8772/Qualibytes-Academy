import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Briefcase } from "lucide-react";
import { useLocation } from "wouter";

const growthFeatures = [
  {
    icon: TrendingUp,
    title: "Accelerated Learning",
    description: "Learn faster with our proven methodology",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "Learn from working professionals",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Get clarity on roles, salary & roadmap",
  },
];

export default function GrowthFormula() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          FORMULA FOR GROWTH
        </h2>

        <p className="text-sm sm:text-base md:text-lg opacity-90 mb-10">
          Why should you upskill now?
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {growthFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h4>

                <p className="text-sm opacity-90">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <Button
          onClick={() => setLocation("/contact")}
          className="
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            font-bold
            text-base sm:text-lg
            px-8 sm:px-12
            py-4
            rounded-full
            shadow-lg
          "
        >
          CONNECT WITH US
        </Button>
      </div>
    </section>
  );
}
