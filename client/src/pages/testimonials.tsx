import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import OldFooter from "@/components/oldFooter";

interface TestimonialsProps {
  onRequestCall: () => void;
}

const testimonials = [
  {
    name: "Krishna Chaitanya",
    role: "Software Engineer III",
    location: "Hyderabad",
    preScaler: "Innodataatics",
    postScaler: "Walmart",
    hike: "250%",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  },
  {
    name: "Manideep Siva",
    role: "Software Engineer",
    location: "Hyderabad",
    preScaler: "TCS",
    postScaler: "Arcesium",
    hike: "300%",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Arcesium_logo.svg",
  },
  {
    name: "Jagasyeni Tripathy",
    role: "SDE1",
    location: "Hyderabad",
    preScaler: "Student/Fresher",
    postScaler: "Goldman Sachs",
    hike: "100%",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Goldman_Sachs.svg",
  },
  {
    name: "Ashish Kumar",
    role: "Backend Developer",
    location: "Pune",
    preScaler: "TCS",
    postScaler: "Airtel Payments",
    hike: "138%",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Bharti_Airtel_Logo.svg",
  },
];

export default function TestimonialsPage({ onRequestCall }: TestimonialsProps) {
  const handleScroll = () => {
    document
      .getElementById("success-stories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10] text-gray-900 dark:text-gray-100">
      <ScrollToTop />

      {/* ===================================================== */}
      {/* ================= MOBILE HERO ======================= */}
      {/* ===================================================== */}
      <header className="md:hidden relative w-full h-[180px] bg-black flex items-center overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-[url('/Testimonials.jpg')]
            bg-cover bg-center
          "
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 px-4">
          <h1 className="text-white font-extrabold text-lg leading-tight">
            Learner Success
            <br />
            Stories
          </h1>

          <p className="text-yellow-400 text-xs mt-1">
            Real outcomes. Real salary growth.
          </p>

          <p className="text-gray-300 text-[11px] mt-2 max-w-xs">
            See how learners across India cracked top software roles with
            Qualibytes.
          </p>

          <button
            onClick={onRequestCall}
            className="
              mt-3
              bg-yellow-400 text-black font-semibold
              px-3 py-1.5 text-xs
              rounded-md
            "
          >
            Talk to Counsellor
          </button>
        </div>
      </header>

      {/* ===================================================== */}
      {/* ================= DESKTOP HERO ====================== */}
      {/* ===================================================== */}
      <header className="hidden md:block relative w-full bg-black overflow-hidden">
        <motion.img
          src="/Testimonials.jpg"
          alt="Success Stories"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            w-full
            h-auto
            max-h-[650px]
            object-contain
            mx-auto
          "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-yellow-400 font-extrabold text-5xl lg:text-6xl"
            >
              Success Stories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-gray-200 text-lg"
            >
              See how learners across India cracked top software roles with
              Qualibytes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 flex justify-center gap-4"
            >
              <button
                onClick={handleScroll}
                className="
                  bg-yellow-400 text-black font-semibold
                  px-8 py-3 rounded-full
                  hover:bg-yellow-300 transition
                "
              >
                View Success Stories
              </button>

              <button
                onClick={onRequestCall}
                className="
                  border border-white text-white
                  px-8 py-3 rounded-full
                  hover:bg-white hover:text-black transition
                "
              >
                Talk to a Counsellor
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* ================= SUB TEXT ========================== */}
      {/* ===================================================== */}
      <section className="py-10 text-center px-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Trusted by hundreds of learners across India
        </p>
      </section>

      {/* ===================================================== */}
      {/* ================= TESTIMONIAL GRID ================= */}
      {/* ===================================================== */}
      <main
        id="success-stories"
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          pb-20
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              bg-white dark:bg-[#111827]
              border border-gray-200 dark:border-gray-700
              rounded-2xl
              p-5 sm:p-6
              shadow-md hover:shadow-xl transition
            "
          >
            <h2 className="text-lg font-bold">{t.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.role}
            </p>
            <p className="text-xs text-gray-500">{t.location}</p>

            <div className="mt-4 text-sm">
              <div className="flex justify-between font-medium">
                <span>Pre Qualibytes</span>
                <span>Post Qualibytes</span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600 dark:text-gray-300">
                  {t.preScaler}
                </span>
               
              </div>
            </div>

            <div
              className="
                mt-4 bg-green-50 dark:bg-green-900/30
                border border-green-200 dark:border-green-700
                rounded-lg py-2 px-4
                text-green-700 dark:text-green-300 text-sm
              "
            >
              ⬆ {t.hike} Salary Hike after Qualibytes
            </div>
          </motion.div>
        ))}
      </main>

      <OldFooter />
    </div>
  );
}
