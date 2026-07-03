import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">CrisisComm Pro</h3>
            <p className="text-gray-300 mb-4">
              Expert crisis communications that protect your reputation and guide you through challenging moments.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4" />
              <span>24/7 Crisis: (555) 123-4567</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Crisis Response Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stakeholder Communication</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Crisis Preparedness Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crisis Communication Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>crisis@crisiscommpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 CrisisComm Pro. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}