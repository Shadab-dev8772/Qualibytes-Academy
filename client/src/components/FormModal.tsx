import EnhancedForm from "./enhanced-form";

export default function FormModal({
  open,
 // onClose,
  onOpenChange,
}: {
  open: boolean;
  //onClose?: () => void;
  onOpenChange?: any;
}) {
  if (!open) return null;

  const onClose = () => {
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* MODAL */}
      <div
        className="
          relative
          z-[100001]
          w-[1100px]
          max-w-[95vw]
          max-h-[calc(100dvh-2rem)]
          bg-white
          dark:bg-gray-900
          rounded-2xl
          grid
          grid-cols-1
          md:grid-cols-[45%_55%]
          shadow-2xl
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()} // ✅ FIX
      >
        {/* LEFT IMAGE */}
        <div className="hidden md:block h-full">
          <img
            src="/thumbnail/advisor.jpeg"
            alt="Advisor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="relative overflow-y-auto p-6 sm:p-8 pb-24">
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose} // ✅ SIMPLE & CORRECT
            className="absolute top-4 right-4 z-50 text-xl font-bold text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <EnhancedForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
