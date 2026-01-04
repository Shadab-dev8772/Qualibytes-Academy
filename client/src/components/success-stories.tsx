import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { SuccessStory } from "@shared/schema";
import { Link } from "wouter";

/* initials helper */
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function SuccessStories() {
  const { data: stories } = useQuery<SuccessStory[]>({
    queryKey: ["/api/success-stories"],
  });

  const displayedStories = stories?.slice(0, 6) || [];

  return (
    <>
      {/* ===== SUCCESS STORIES HERO ===== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/Success Stories.png')" }}
      >
        {/* PREMIUM GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020E3A]/80 via-[#041C5C]/70 to-[#020E3A]/90" />

        <div className="relative min-h-[560px] flex flex-col justify-center items-center text-center px-4">

          {/* HEADING */}
          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold text-white
              tracking-wide
              drop-shadow-lg
            "
          >
            SHAPING SUCCESS STORIES SINCE 2019
          </h2>

          {/* SUB TEXT */}
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
            Your Journey, Our Mission
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <Link href="/testimonials">
              <Button
                className="
                  px-8 py-4 rounded-full font-semibold
                  bg-blue-600 text-white
                  shadow-lg
                  transition-all duration-300
                  hover:bg-yellow-400 hover:text-black
                  hover:shadow-yellow-400/40
                  hover:scale-[1.04]
                "
              >
                View More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GAP (AS REQUESTED) ===== */}
      <div className="h-1" />

      {/* ===== CARDS SECTION (UNCHANGED) ===== */}
      <section className="relative mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedStories.map((story) => (
              <Card
                key={story.id}
                className="
                  bg-white/90 dark:bg-slate-900/90
                  border border-slate-200 dark:border-slate-800
                  transition rounded-xl
                  /* Removed backdrop-blur and reduced shadow for scroll performance */
                "
              >
                <CardContent className="p-6 flex flex-col h-full">
                  
                  {/* PROFILE */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center font-semibold">
                      {getInitials(story.name)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {story.currentPosition}
                      </p>
                    </div>
                  </div>

                  {/* BEFORE */}
                  <div className="mb-2">
                    <p className="text-xs text-muted-foreground">
                      Previous Organization
                    </p>
                    <p className="font-medium text-sm">
                      {story.previousCompany}
                    </p>
                  </div>

                  {/* GROWTH */}
                  <div className="mb-2">
                    <Badge className="bg-green-600 text-white px-3 py-1 inline-flex items-center text-sm">
                      {story.salaryHike}% Career Growth
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Badge>
                  </div>

                  {/* AFTER */}
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground">
                      Current Organization
                    </p>
                    <p className="font-medium text-sm">
                      {story.currentCompany}
                    </p>
                  </div>

                  {story.profileUrl && (
                    <a
                      href={story.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-blue-600 hover:text-yellow-500 text-sm inline-flex items-center transition"
                    >
                      Professional Profile
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
