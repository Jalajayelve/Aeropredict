import { Plane } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#6b8e6b]/20 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6b8e6b] to-[#5a7a5a] flex items-center justify-center shadow-lg">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#1f2d1f]">AeroPredict</h1>
              <p className="text-xs text-[#5a6a5a]">Satisfaction Analytics</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-[#1f2d1f] hover:text-[#6b8e6b] transition-colors">Home</a>
            <a href="#predict" className="text-sm font-semibold text-[#1f2d1f] hover:text-[#6b8e6b] transition-colors">Predict</a>
            <a href="#dashboard" className="text-sm font-semibold text-[#1f2d1f] hover:text-[#6b8e6b] transition-colors">Dashboard</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
