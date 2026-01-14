"use client";

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function FeaturedProgram() {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-24">
      {/* ↑ margin SAME as before */}

      {/* Edge-to-edge Banner Image */}
      <div className="w-full h-[180px] xs:h-[220px] sm:h-[300px] md:h-[380px] lg:h-[480px] flex items-center justify-center">
        <img
          src="/start.jpg"
          alt="Start Your IT Career Banner"
          className="w-full h-full"
        />
      </div>

      {/* Button BELOW image (UNCHANGED) */}
      <div className="w-full flex justify-center py-6 sm:py-8 md:py-10 bg-background">
        <Button
          onClick={handleContactClick}
          className="
            bg-[#F4C430] text-[#1E3A8A]
            px-6 sm:px-10 py-3 sm:py-4
            text-xs xs:text-sm sm:text-base font-bold
            rounded-full
            shadow-md
            transition-all duration-300
            hover:bg-[#1E3A8A] hover:text-white
            hover:scale-105
          "
        >
          CONTACT US
        </Button>
      </div>
    </section>
  );
}
