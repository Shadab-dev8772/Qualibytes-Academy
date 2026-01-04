import { Phone, MessageCircle } from "lucide-react";

export default function BottomHelpBar({ onRequestCall }: any) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-white border-t shadow-md">
      <div className="flex sm:hidden">
        {/* CALL */}
        <button
          onClick={onRequestCall}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-blue-600 text-white"
        >
          <Phone size={18} />
          Request Call
        </button>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918377032324"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-green-500 text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex items-center justify-center gap-2 py-2 text-sm bg-[#8dd9ff]">
        <span className="font-semibold">Need Help?</span>
        <span>Talk to us at</span>
        <strong>+91 83770 32324</strong>
        <span>or</span>
        <button
          onClick={onRequestCall}
          className="underline font-semibold text-blue-700"
        >
          Request a Call →
        </button>
      </div>
    </div>
  );
}
