import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "../hooks/use-theme";
import { programs } from "@/pages/programs";

interface NavigationProps {
  onRequestCall?: () => void;
}

export default function Navigation({ onRequestCall }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPrograms, setOpenPrograms] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-[1400px] mx-auto">
        <div className="h-16 flex items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/QualibytesLogo.png"
              alt="Qualibytes Logo"
              className="h-12 sm:h-16 object-contain"
            />
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-8">

            <a href="/" className={baseLink}>HOME</a>

            {/* PROGRAMS + ARROW (CORRECT BEHAVIOR) */}
            <div className="relative flex items-center">

              {/* PROGRAMS → NORMAL PAGE LINK (NO DROPDOWN EVER) */}
              <a
                href="/programs"
                className="
                  px-5 py-2 text-sm font-medium rounded-full
                  bg-black text-white
                  dark:bg-white dark:text-black
                "
              >
                PROGRAMS
              </a>

              {/* ARROW → ONLY DROPDOWN TRIGGER */}
              <div
                className="relative"
                onMouseEnter={() => setOpenPrograms(true)}
                onMouseLeave={() => setOpenPrograms(false)}
              >
                <button
                  type="button"
                  aria-label="Programs dropdown"
                  className="
                    ml-1 flex items-center justify-center
                    text-gray-700 dark:text-gray-200
                    hover:text-black dark:hover:text-white
                  "
                >
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* DROPDOWN (PURE CSS, NO SHAKE) */}
                {openPrograms && (
                  <div
                    className="
                      absolute top-full left-1/2 -translate-x-1/2
                      mt-2 w-[240px]
                      bg-white dark:bg-black
                      border border-gray-200 dark:border-gray-700
                      rounded-xl shadow-xl
                      py-2
                    "
                  >
                    {programs.map((program) => (
                      <a
                        key={program.path}
                        href={`/courses/${program.path}`}
                        className="
                          block px-4 py-2 text-sm
                          text-gray-700 dark:text-gray-300
                          hover:bg-gray-100 dark:hover:bg-gray-800
                        "
                      >
                        {program.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <a href="/about" className={baseLink}>ABOUT US</a>
            <a href="/contact" className={baseLink}>CONTACT</a>
            <a href="/testimonials" className={baseLink}>TESTIMONIALS</a>

            <a href="/online-degree-programs">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 rounded-full">
                ONLINE DEGREE
              </Button>
            </a>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 dark:opacity-0" />
              <Moon className="h-5 w-5 absolute opacity-0 dark:opacity-100" />
            </Button>

            <Button asChild className="bg-blue-600 text-white px-4">
              <a href="tel:+91 8377032324">Talk to Us</a>
            </Button>

            <Button
              onClick={onRequestCall}
              className="bg-yellow-500 text-black hover:bg-yellow-600 px-4"
            >
              Request a Call
            </Button>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 dark:opacity-0" />
              <Moon className="h-5 w-5 absolute opacity-0 dark:opacity-100" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[80%] dark:bg-black">
                <MobileMenu setMobileOpen={setMobileOpen} />
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}

/* ================= MOBILE MENU ================= */
function MobileMenu({ setMobileOpen }: any) {
  return (
    <div className="flex flex-col mt-10 space-y-4 text-lg">
      <MobileLink label="HOME" href="/" />
      <MobileLink label="ABOUT US" href="/about" />
      <MobileLink label="CONTACT" href="/contact" />
      <MobileLink label="TESTIMONIALS" href="/testimonials" />

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
        <h3 className="font-semibold mb-2">PROGRAMS</h3>
        {programs.map((program) => (
          <a
            key={program.path}
            href={`/courses/${program.path}`}
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300"
          >
            {program.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileLink({ href, label }: any) {
  return (
    <a
      href={href}
      className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
    >
      {label}
    </a>
  );
}

/* ================= SHARED LINK STYLE ================= */
const baseLink = `
  text-gray-700 dark:text-gray-200
  hover:text-black dark:hover:text-white
  text-sm font-medium transition
`;
