import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, RotateCcw, MoreHorizontal, Clock } from "lucide-react";

interface DashboardHeaderProps {
  onAddWidget: () => void;
}

export const DashboardHeader = ({ onAddWidget }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-foreground">CNAPP Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search anything..."
            className="pl-10 w-64"
          />
        </div>
        
        <Button
          onClick={onAddWidget}
          className="bg-dashboard-add-widget-bg hover:bg-dashboard-add-widget-hover text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Widget
        </Button>
        
        <Button variant="outline" size="icon">
          <RotateCcw className="h-4 w-4" />
        </Button>
        
        <Button variant="outline" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Last 2 days
        </Button>
      </div>
    </div>
  );
};