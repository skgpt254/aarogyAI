import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Package, BedDouble, CheckCircle2 } from "lucide-react";

const CoordinatorPlans = () => {
  const staffingPlan = [
    { role: "Respiratory Nurses", current: 12, required: 18, action: "Hire +6" },
    { role: "Emergency Doctors", current: 8, required: 11, action: "Schedule +3" },
    { role: "ICU Staff", current: 15, required: 20, action: "Overtime +5" },
    { role: "Pharmacists", current: 6, required: 8, action: "Hire +2" },
  ];

  const supplyPlan = [
    { item: "Oxygen Cylinders", current: 150, required: 300, status: "critical" },
    { item: "Nebulizers", current: 45, required: 80, status: "warning" },
    { item: "Ventilators", current: 20, required: 28, status: "warning" },
    { item: "N95 Masks", current: 5000, required: 15000, status: "critical" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Coordinator Agent Plans</h2>
          <p className="text-muted-foreground mt-1">Optimized resource allocation based on Sentinel predictions</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Execute Plan
        </Button>
      </div>

      {/* Staffing Plan */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Staffing Requirements</h3>
        </div>
        
        <div className="space-y-4">
          {staffingPlan.map((staff, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded bg-muted hover:bg-muted/70 transition-smooth">
              <div className="flex-1">
                <p className="font-medium">{staff.role}</p>
                <p className="text-sm text-muted-foreground">
                  Current: {staff.current} | Required: {staff.required}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                  {staff.action}
                </Badge>
                <Button size="sm" variant="outline">
                  Assign
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Supply Chain Plan */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Package className="h-6 w-6 text-secondary" />
          <h3 className="text-2xl font-bold">Supply Chain Requirements</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {supplyPlan.map((supply, index) => (
            <div key={index} className="p-4 rounded border hover:shadow-elevated transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium">{supply.item}</p>
                  <p className="text-sm text-muted-foreground">
                    Stock: {supply.current} / {supply.required}
                  </p>
                </div>
                <Badge 
                  variant={supply.status === "critical" ? "destructive" : "default"}
                  className={supply.status === "warning" ? "bg-warning text-warning-foreground" : ""}
                >
                  {supply.status}
                </Badge>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div 
                  className={`h-2 rounded-full transition-smooth ${
                    supply.status === "critical" ? "bg-destructive" : "bg-warning"
                  }`}
                  style={{ width: `${(supply.current / supply.required) * 100}%` }}
                />
              </div>
              
              <Button size="sm" className="w-full" variant="outline">
                Order {supply.required - supply.current} units
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Bed Allocation */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <BedDouble className="h-6 w-6 text-accent" />
          <h3 className="text-2xl font-bold">Bed Allocation Strategy</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded bg-gradient-primary text-primary-foreground">
            <p className="text-sm opacity-90 mb-1">General Beds</p>
            <p className="text-3xl font-bold">120 / 150</p>
            <p className="text-sm opacity-75">Reserve 30 for surge</p>
          </div>
          <div className="p-4 rounded bg-gradient-secondary text-secondary-foreground">
            <p className="text-sm opacity-90 mb-1">ICU Beds</p>
            <p className="text-3xl font-bold">18 / 25</p>
            <p className="text-sm opacity-75">7 available</p>
          </div>
          <div className="p-4 rounded bg-accent text-accent-foreground">
            <p className="text-sm opacity-90 mb-1">Emergency Beds</p>
            <p className="text-3xl font-bold">35 / 45</p>
            <p className="text-sm opacity-75">10 on standby</p>
          </div>
        </div>
      </Card>

      {/* Action Items */}
      <Card className="p-6 bg-accent/5 border-accent/20">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Coordinator Recommendations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Activate surge protocol for Respiratory and Emergency departments</li>
              <li>• Schedule overtime shifts for next 7 days to cover 40% increase</li>
              <li>• Place emergency orders for oxygen cylinders and N95 masks (2-day delivery)</li>
              <li>• Convert 10 general beds to respiratory isolation units</li>
              <li>• Brief all staff on AQI-related admission protocols</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CoordinatorPlans;
