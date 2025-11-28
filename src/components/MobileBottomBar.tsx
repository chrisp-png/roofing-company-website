import { Phone, FileText } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black border-t border-neutral-800 shadow-lg">
      <div className="flex items-center justify-center gap-3 px-4 py-3">
        <a
          href="tel:7542275605"
          className="flex items-center justify-center gap-2 flex-1 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="/#contact"
          className="flex items-center justify-center gap-2 flex-1 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200"
        >
          <FileText className="w-4 h-4" />
          Get Roof Quote
        </a>
      </div>
    </div>
  );
}
