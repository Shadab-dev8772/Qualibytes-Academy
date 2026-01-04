import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { BROCHURE_LINKS, GOOGLE_SHEET_URL } from "@/brochureLinks";
import { submitFormData } from "@/services/SheetDBService";

const BrochureModal = ({
  open,
  onClose,
  programName,
  programKey = "",
  autoSubmit = false,
}: {
  open: boolean;
  onClose: () => void;
  programName: string;
  programKey?: string;
  autoSubmit?: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (open && autoSubmit && formRef.current) {
      // Only auto-submit if all fields are filled (simulate for demo, or require prefill)
      // If you want to require user input, remove this and let user fill manually
      if (formData.name && formData.email && formData.phone) {
        formRef.current.requestSubmit();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, autoSubmit]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      alert("⚠️ Please fill all details before downloading.");
      return;
    }

    setLoading(true);

    try {
      // ✅ FORM SUBMIT TO GOOGLE SHEET
      const body = new URLSearchParams();
      body.append("name", name);
      body.append("email", email);
      body.append("phone", phone);
      body.append("program", programName);


      // Submit to Google Apps Script (original)
      await fetch(GOOGLE_SHEET_URL, { 
        method: "POST",
        body,
      });

      // Also submit to SheetDB for reliability
      await submitFormData({
        name,
        email,
        phone,
        program: programName,
      });

      // Normalize key to match BROCHURE_LINKS (case-insensitive, remove spaces)
      const normalizedKey = (programKey || "").replace(/\s+/g, "").toLowerCase();
      const foundKey = Object.keys(BROCHURE_LINKS).find(
        k => k.toLowerCase() === normalizedKey
      );
      // Debug: Show which key is being used and what link is found
      console.log('Brochure lookup:', { programKey, normalizedKey, foundKey, BROCHURE_LINKS });
      const driveLink = foundKey ? BROCHURE_LINKS[foundKey] : undefined;
      // Debug: Show which key is being used and what link is found
      // console.log('Brochure lookup:', programKey, normalizedKey, foundKey, driveLink);
      if (!driveLink) {
        alert("❌ Brochure not available for this program.");
        setLoading(false);
        return;
      }


      onClose();

      // Force download using hidden iframe to avoid redirect
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = driveLink;
      document.body.appendChild(iframe);
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 5000);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong, please try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="
          bg-white dark:bg-gray-900 rounded-2xl shadow-2xl relative 
          w-full max-w-md p-6 sm:p-8
          max-h-[90vh] overflow-y-auto
        "
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 text-gray-800 dark:text-white leading-tight">
          Download {programName} Brochure
        </h2>

        {/* FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded p-2 text-sm sm:text-base bg-transparent text-black dark:text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded p-2 text-sm sm:text-base bg-transparent text-black dark:text-white"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded p-2 text-sm sm:text-base bg-transparent text-black dark:text-white"
            maxLength={10}
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2 text-sm sm:text-base"
          >
            {loading ? "Submitting..." : "Submit & Download"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BrochureModal;
