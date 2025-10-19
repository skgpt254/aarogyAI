import { Activity, Github, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AarogyAI</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Predictive healthcare for India's festivals, pollution spikes, and epidemics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition-smooth">Dashboard</Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-primary transition-smooth">Login</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sentinel Predictions</li>
              <li>Resource Planning</li>
              <li>Alert System</li>
              <li>CareCompanion Chat</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@aarogyai.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>github.com/aarogyai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AarogyAI - Predictive Healthcare for India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
