import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">CrisisComm Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>24/7 Crisis Hotline: (555) 123-4567</span>
              </div>
            </div>
            <Button className="hidden md:inline-flex">Get Help Now</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}