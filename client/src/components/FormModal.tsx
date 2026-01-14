import CompactForm from "./Compact-Form";
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
    <div className="fixed inset-0 z-[100000] flex items-center  justify-center">
      {/* BACKDROP */}
      <div className="absolute  inset-0 bg-black/60" onClick={onClose} />

      {/* MODAL */}
      <div
        className="
        
          relative
          z-[100001]
          w-[1000px]
          h-[600px]
          md:h-[500px]
          flex
          gap-2
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-2xl
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()} // ✅ FIX
      >
        {/* LEFT IMAGE */}
        <div className="hidden md:block w-[50%] h-full">
          <img
            src="/thumbnail/advisor.jpeg"
            alt="Advisor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="relative flex flex-col md:w-[50%] w-full items-center  ">
          {/* CLOSE BUTTON */}
          
            <button
            type="button"
            onClick={onClose} // ✅ SIMPLE & CORRECT
            className="absolute    top-4 right-4 z-50 text-xl font-bold text-gray-500 hover:text-black"
          >
            ✕
          </button>
         

          <CompactForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
