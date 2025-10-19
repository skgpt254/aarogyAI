import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, AlertTriangle } from "lucide-react";

const SentinelPredictions = () => {
  const predictions = [
    {
      department: "Emergency",
      current: 45,
      predicted: 78,
      change: "+73%",
      trend: "up",
      confidence: 92,
    },
    {
      department: "Respiratory",
      current: 32,
      predicted: 89,
      change: "+178%",
      trend: "up",
      confidence: 95,
    },
    {
      department: "Cardiology",
      current: 28,
      predicted: 35,
      change: "+25%",
      trend: "up",
      confidence: 87,
    },
    {
      department: "General Medicine",
      current: 56,
      predicted: 72,
      change: "+29%",
      trend: "up",
      confidence: 89,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Sentinel Agent Predictions</h2>
          <p className="text-muted-foreground mt-1">7-day patient surge forecast by department</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Generate New Forecast
        </Button>
      </div>

      {/* Prediction Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {predictions.map((pred, index) => (
          <Card key={index} className="p-6 hover:shadow-elevated transition-smooth">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{pred.department}</h3>
                <p className="text-sm text-muted-foreground">Department Forecast</p>
              </div>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                pred.trend === "up" ? "bg-warning/10 text-warning" : "bg-accent/10 text-accent"
              }`}>
                <TrendingUp className="h-4 w-4" />
                {pred.change}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Daily Avg</p>
                <p className="text-2xl font-bold">{pred.current}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Predicted Daily Avg</p>
                <p className="text-2xl font-bold text-warning">{pred.predicted}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Confidence: <span className="font-medium text-foreground">{pred.confidence}%</span>
                </span>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Reasoning */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Sentinel Agent Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Based on current AQI levels (412 - Severe), historical Diwali patterns, and weather forecasts, 
              Sentinel predicts a significant surge in respiratory admissions over the next 7 days. 
              Emergency department will also experience increased load due to pollution-related cardiovascular events.
              Recommend activating surge protocols and increasing respiratory staff by 40%.
            </p>
          </div>
        </div>
      </Card>

      {/* Data Factors */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Prediction Factors</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-muted">
            <p className="text-sm text-muted-foreground mb-1">Air Quality Index</p>
            <p className="text-2xl font-bold text-warning">412</p>
            <p className="text-xs text-muted-foreground">Severe - High impact</p>
          </div>
          <div className="p-4 rounded bg-muted">
            <p className="text-sm text-muted-foreground mb-1">Upcoming Festival</p>
            <p className="text-2xl font-bold text-secondary">Diwali</p>
            <p className="text-xs text-muted-foreground">In 3 days</p>
          </div>
          <div className="p-4 rounded bg-muted">
            <p className="text-sm text-muted-foreground mb-1">Historical Pattern</p>
            <p className="text-2xl font-bold text-primary">+65%</p>
            <p className="text-xs text-muted-foreground">Average spike</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SentinelPredictions;
