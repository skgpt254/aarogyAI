import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, AlertCircle, Users, BedDouble } from "lucide-react";
import SentinelPredictions from "@/components/SentinelPredictions";
import CoordinatorPlans from "@/components/CoordinatorPlans";
import AlertsPanel from "@/components/AlertsPanel";
import CareCompanionWidget from "@/components/CareCompanionWidget";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-accent flex flex-col">
      <Header variant="app" />

      {/* Navigation */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-6">
          <nav className="flex gap-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 border-b-2 transition-smooth ${
                activeTab === "overview"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("sentinel")}
              className={`py-4 border-b-2 transition-smooth ${
                activeTab === "sentinel"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Sentinel Predictions
            </button>
            <button
              onClick={() => setActiveTab("coordinator")}
              className={`py-4 border-b-2 transition-smooth ${
                activeTab === "coordinator"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Resource Planning
            </button>
            <button
              onClick={() => setActiveTab("alerts")}
              className={`py-4 border-b-2 transition-smooth ${
                activeTab === "alerts"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Alerts
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-elevated transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-primary">+42%</span>
                </div>
                <h3 className="font-medium text-muted-foreground">Predicted Surge</h3>
                <p className="text-sm text-muted-foreground">Next 7 days</p>
              </Card>

              <Card className="p-6 hover:shadow-elevated transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <BedDouble className="h-8 w-8 text-accent" />
                  <span className="text-2xl font-bold text-accent">85%</span>
                </div>
                <h3 className="font-medium text-muted-foreground">Bed Utilization</h3>
                <p className="text-sm text-muted-foreground">Current status</p>
              </Card>

              <Card className="p-6 hover:shadow-elevated transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <AlertCircle className="h-8 w-8 text-warning" />
                  <span className="text-2xl font-bold text-warning">3</span>
                </div>
                <h3 className="font-medium text-muted-foreground">Active Alerts</h3>
                <p className="text-sm text-muted-foreground">Requires attention</p>
              </Card>

              <Card className="p-6 hover:shadow-elevated transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                  <span className="text-2xl font-bold text-secondary">412</span>
                </div>
                <h3 className="font-medium text-muted-foreground">Current AQI</h3>
                <p className="text-sm text-muted-foreground">Severe category</p>
              </Card>
            </div>

            {/* Quick Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Today's Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">High Respiratory Admissions Expected</p>
                      <p className="text-sm text-muted-foreground">Sentinel predicts 40% increase due to AQI spike</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <p className="font-medium">Staff Shortage Alert</p>
                      <p className="text-sm text-muted-foreground">Emergency ward needs 3 additional nurses</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-secondary">Nov 12</span>
                    </div>
                    <div>
                      <p className="font-medium">Diwali Festival</p>
                      <p className="text-sm text-muted-foreground">Expected 200+ respiratory cases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded bg-warning/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-warning">Nov 15</span>
                    </div>
                    <div>
                      <p className="font-medium">Crop Burning Season Peak</p>
                      <p className="text-sm text-muted-foreground">AQI predicted above 450</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "sentinel" && <SentinelPredictions />}
        {activeTab === "coordinator" && <CoordinatorPlans />}
        {activeTab === "alerts" && <AlertsPanel />}
      </main>

      {/* Floating CareCompanion Widget */}
      <CareCompanionWidget />

      <Footer />
    </div>
  );
};

export default Dashboard;
