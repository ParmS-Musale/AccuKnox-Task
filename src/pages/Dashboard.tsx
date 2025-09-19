import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { CategorySection } from "@/components/CategorySection";
import { AddWidgetDialog } from "@/components/AddWidgetDialog";
import { AddWidgetPanel } from "@/components/AddWidgetPanel";
import { initialDashboardData, availableWidgets } from "@/data/dashboardData";
import { Widget, DashboardData } from "@/types/dashboard";
import { toast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialDashboardData);
  const [activeWidgets, setActiveWidgets] = useState<{ [key: string]: boolean }>(() => {
    const active: { [key: string]: boolean } = {};
    Object.values(initialDashboardData).flat().forEach(widget => {
      if (widget.isActive) {
        active[widget.id] = true;
      }
    });
    return active;
  });
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleRemoveWidget = (widgetId: string) => {
    setDashboardData(prev => {
      const newData = { ...prev };
      Object.keys(newData).forEach(category => {
        newData[category] = newData[category].filter(widget => widget.id !== widgetId);
      });
      return newData;
    });
    
    setActiveWidgets(prev => ({
      ...prev,
      [widgetId]: false,
    }));
    
    toast({
      title: "Widget removed",
      description: "The widget has been successfully removed from your dashboard.",
    });
  };

  const handleAddWidget = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsAddDialogOpen(true);
  };

  const handleAddNewWidget = (name: string, text: string) => {
    const newWidget: Widget = {
      id: `custom-${Date.now()}`,
      name,
      text,
      category: selectedCategory,
      isActive: true,
    };

    setDashboardData(prev => ({
      ...prev,
      [selectedCategory]: [...(prev[selectedCategory] || []), newWidget],
    }));

    setActiveWidgets(prev => ({
      ...prev,
      [newWidget.id]: true,
    }));

    toast({
      title: "Widget added",
      description: `${name} has been added to ${selectedCategory}.`,
    });
  };

  const handleToggleWidget = (widget: Widget, isActive: boolean) => {
    setActiveWidgets(prev => ({
      ...prev,
      [widget.id]: isActive,
    }));

    if (isActive) {
      // Find the appropriate dashboard category for this widget
      let targetCategory = "";
      if (widget.category === "CSMP") targetCategory = "CSPM Executive Dashboard";
      else if (widget.category === "CWPP") targetCategory = "CWPP Dashboard";
      else if (widget.category === "Image") targetCategory = "Registry Scan";
      else if (widget.category === "Ticket") targetCategory = "Registry Scan"; // Default fallback
      
      setDashboardData(prev => {
        const newData = { ...prev };
        if (!newData[targetCategory]) {
          newData[targetCategory] = [];
        }
        
        // Only add if not already present
        const exists = newData[targetCategory].some(w => w.id === widget.id);
        if (!exists) {
          newData[targetCategory] = [...newData[targetCategory], { ...widget, isActive: true }];
        }
        
        return newData;
      });
      
      toast({
        title: "Widget added",
        description: `${widget.name} has been added to your dashboard.`,
      });
    } else {
      // Remove from dashboard
      setDashboardData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(category => {
          newData[category] = newData[category].filter(w => w.id !== widget.id);
        });
        return newData;
      });
      
      toast({
        title: "Widget removed", 
        description: `${widget.name} has been removed from your dashboard.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto p-6">
        <DashboardHeader onAddWidget={() => setIsPanelOpen(true)} />
        
        <div className="space-y-8">
          {Object.entries(dashboardData).map(([categoryName, widgets]) => (
            <CategorySection
              key={categoryName}
              categoryName={categoryName}
              widgets={widgets}
              onRemoveWidget={handleRemoveWidget}
              onAddWidget={handleAddWidget}
            />
          ))}
        </div>

        <AddWidgetDialog
          isOpen={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
          onAdd={handleAddNewWidget}
          categoryName={selectedCategory}
        />

        <AddWidgetPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          activeWidgets={activeWidgets}
          onToggleWidget={handleToggleWidget}
        />
      </div>
    </div>
  );
}