import { FileText } from 'lucide-react';

interface EntitySummaryProps {
  title?: string;
  items: string[];
}

export default function EntitySummary({ title = "What This Page Covers", items }: EntitySummaryProps) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 mb-8" role="complementary" aria-label="Page summary">
      <div className="flex items-start gap-3">
        <FileText className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-neutral-300 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
