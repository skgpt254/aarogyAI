import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <Header variant="landing" />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Predictive Healthcare
              <br />
              <span className="text-secondary">for India's Festivals</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              AI-powered hospital management predicting patient surges during festivals, pollution spikes, and epidemics
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/auth">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elevated">
                  Start Predicting
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              India's hospitals face unpredictable patient surges during major festivals, pollution events, and epidemic outbreaks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-elevated transition-smooth">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Festival Overload</h3>
              <p className="text-muted-foreground">
                Diwali pollution causes 40% spike in respiratory admissions. Hospitals unprepared for sudden surge.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-elevated transition-smooth">
              <TrendingUp className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Pollution Crisis</h3>
              <p className="text-muted-foreground">
                AQI spikes above 400 during crop burning season overwhelm emergency departments.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-elevated transition-smooth">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Epidemic Waves</h3>
              <p className="text-muted-foreground">
                Dengue, malaria outbreaks strain resources. Need predictive capacity planning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution: Agentic AI */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The AarogyAI Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three intelligent AI agents working together to predict, plan, and communicate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:shadow-glow transition-smooth border-primary/20">
              <div className="bg-gradient-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sentinel Agent</h3>
              <p className="text-muted-foreground mb-4">
                Predicts patient surge by department using historical data, AQI levels, festival calendar, and epidemic trends.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 7-day forecast accuracy</li>
                <li>• Department-wise predictions</li>
                <li>• Real-time AQI integration</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-glow transition-smooth border-secondary/20">
              <div className="bg-gradient-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Coordinator Agent</h3>
              <p className="text-muted-foreground mb-4">
                Generates optimal staffing and supply plans based on Sentinel predictions. Ensures resource readiness.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Staff scheduling optimization</li>
                <li>• Supply chain planning</li>
                <li>• Bed allocation strategy</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-glow transition-smooth border-accent/20">
              <div className="bg-gradient-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">CareCompanion Agent</h3>
              <p className="text-muted-foreground mb-4">
                Public-facing chatbot providing health advisories via WhatsApp, Telegram, and web interface.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Multi-channel messaging</li>
                <li>• Personalized health tips</li>
                <li>• Hospital wait times</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hospitals across India using AarogyAI to predict and prepare for patient surges
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elevated animate-pulse-glow">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
