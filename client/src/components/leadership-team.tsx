import { useQuery } from "@tanstack/react-query";
import type { TeamMember } from "@shared/schema";
import AvatarPlaceholder from "@/components/AvatarPlaceholder";

export default function LeadershipTeam() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team/type/leadership"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-slate-50 dark:bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 text-slate-500">
          Loading team...
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Our Leadership
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Meet the people behind Qualibytes
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers?.map((member) => {
            const hasImage = member.imageUrl !== null;

            return (
              <div
                key={member.id}
                className="
                  group relative
                  rounded-2xl overflow-hidden
                  border border-slate-200 dark:border-white/10
                  bg-white dark:bg-[#0b1220]
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                "
              >
                {/* ===== MOVING BACKGROUND EFFECT ===== */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br
                    from-blue-400/20 via-purple-400/20 to-pink-400/20
                    dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10
                    animate-gradientMove
                  " />
                </div>

                {/* IMAGE / PLACEHOLDER */}
                <div className="h-[320px] w-full relative overflow-hidden">
                  {hasImage ? (
                    <img
                      src={member.imageUrl!}
                      alt={member.name}
                      loading="lazy"
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <AvatarPlaceholder />
                  )}

                  {/* Soft dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center relative">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {member.position}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Hover glow line */}
                  <span
                    className="
                      absolute left-0 right-0 bottom-0 h-[2px]
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== ANIMATION STYLES ===== */}
      <style>{`
        @keyframes gradientMove {
          0% { transform: translate(0%, 0%); }
          50% { transform: translate(-10%, -10%); }
          100% { transform: translate(0%, 0%); }
        }

        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
