import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t-2 border-[#6b8e6b]/20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6b8e6b] to-[#5a7a5a] flex items-center justify-center shadow-lg">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1f2d1f]">AeroPredict</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-[#3a4a3a] font-semibold">
              © 2025 Customer Satisfaction Analytics.
            </p>
            <p className="text-xs text-[#5a6a5a] mt-1 font-medium">
              ML model for airline industry insights
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
