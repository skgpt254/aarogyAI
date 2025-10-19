import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, CheckCircle2, Clock } from "lucide-react";

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Severe AQI Spike Detected",
      message: "Current AQI: 412 (Severe). Predict 200+ respiratory admissions in 48 hours.",
      timestamp: "2 minutes ago",
      status: "active",
      actions: ["Activate Protocol", "Send Advisory"],
    },
    {
      id: 2,
      type: "warning",
      title: "Staff Shortage Alert",
      message: "Emergency ward requires 3 additional nurses for predicted surge.",
      timestamp: "15 minutes ago",
      status: "active",
      actions: ["Schedule Staff", "View Plan"],
    },
    {
      id: 3,
      type: "info",
      title: "Supply Order Confirmed",
      message: "Oxygen cylinders (150 units) will arrive in 36 hours.",
      timestamp: "1 hour ago",
      status: "acknowledged",
      actions: ["Track Order"],
    },
    {
      id: 4,
      type: "warning",
      title: "Festival Surge Incoming",
      message: "Diwali in 3 days. Historical data shows 65% average patient increase.",
      timestamp: "3 hours ago",
      status: "active",
      actions: ["View Forecast", "Prepare Resources"],
    },
    {
      id: 5,
      type: "success",
      title: "Surge Protocol Activated",
      message: "All departments notified. Additional staff scheduled for next week.",
      timestamp: "5 hours ago",
      status: "resolved",
      actions: ["View Report"],
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <Clock className="h-5 w-5 text-warning" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-accent" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getAlertBadge = (type: string) => {
    switch (type) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "warning":
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case "success":
        return <Badge className="bg-accent text-accent-foreground">Success</Badge>;
      default:
        return <Badge variant="outline">Info</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Active</Badge>;
      case "acknowledged":
        return <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Acknowledged</Badge>;
      case "resolved":
        return <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Alert Management</h2>
          <p className="text-muted-foreground mt-1">Real-time notifications and system alerts</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Mark All Read</Button>
          <Button className="bg-primary text-primary-foreground">Configure Alerts</Button>
        </div>
      </div>

      {/* Alert Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Critical</p>
              <p className="text-2xl font-bold text-destructive">1</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Warnings</p>
              <p className="text-2xl font-bold text-warning">2</p>
            </div>
            <Clock className="h-8 w-8 text-warning" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Resolved</p>
              <p className="text-2xl font-bold text-accent">1</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <Bell className="h-8 w-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-6 hover:shadow-elevated transition-smooth">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {getAlertIcon(alert.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{alert.title}</h3>
                      {getAlertBadge(alert.type)}
                      {getStatusBadge(alert.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                  <div className="flex items-center gap-2">
                    {alert.actions.map((action, index) => (
                      <Button key={index} size="sm" variant="outline">
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
