import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-bg text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-lg">TechFiesta 2026</span>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            A State-Level Technical & Non-Technical Symposium organized by the Department of Computer Science & Engineering.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <Link to="/events" className="hover:text-primary-foreground transition-colors">Events</Link>
            <Link to="/register" className="hover:text-primary-foreground transition-colors">Register</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> techfiesta@college.edu</span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Main Auditorium, State University</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
        © 2026 TechFiesta — Department of Computer Science & Engineering. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
