import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  variant?: "landing" | "app";
}

const Header = ({ variant = "landing" }: HeaderProps) => {
  const location = useLocation();
  const isLanding = variant === "landing";

  return (
    <header className={isLanding ? "relative z-10" : "bg-card border-b"}>
      <nav className={`container mx-auto px-6 py-4 flex items-center justify-between ${isLanding ? "" : ""}`}>
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <Activity className={`h-6 w-6 ${isLanding ? "text-primary-foreground" : "text-primary"}`} />
          <span className={`text-xl font-bold ${isLanding ? "text-primary-foreground" : ""}`}>
            AarogyAI
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {isLanding ? (
            <>
              <Link to="/dashboard">
                <Button 
                  variant="ghost" 
                  className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
                >
                  Dashboard
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              {location.pathname !== "/dashboard" && (
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">Dashboard</Button>
                </Link>
              )}
              {location.pathname !== "/" && (
                <Link to="/">
                  <Button variant="ghost" size="sm">Home</Button>
                </Link>
              )}
              <Link to="/auth">
                <Button variant="outline" size="sm">Logout</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
