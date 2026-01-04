import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918377032324";
    const message =
      "Hi, I'm interested in learning more about Qualibytes programs!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed right-5 bottom-[100px] z-[9999] animate-bounce">
      <Button
        onClick={handleWhatsAppClick}
        className="
          w-14 h-14 rounded-full
          bg-green-500 text-white
          shadow-xl
          hover:rotate-6
          transition-transform
        "
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
