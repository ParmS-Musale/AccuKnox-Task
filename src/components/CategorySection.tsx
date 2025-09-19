import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Widget } from "@/types/dashboard";

interface CategorySectionProps {
  categoryName: string;
  widgets: Widget[];
  onRemoveWidget: (widgetId: string) => void;
  onAddWidget: (categoryName: string) => void;
}

export const CategorySection = ({ 
  categoryName, 
  widgets, 
  onRemoveWidget, 
  onAddWidget 
}: CategorySectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">{categoryName}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            onRemove={onRemoveWidget}
          />
        ))}
        
        <div className="flex items-center justify-center min-h-[200px]">
          <Button
            variant="outline"
            className="h-auto min-h-[120px] w-full flex flex-col items-center gap-2 border-dashed border-2 hover:border-primary hover:bg-primary/5"
            onClick={() => onAddWidget(categoryName)}
          >
            <Plus className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Add Widget</span>
          </Button>
        </div>
      </div>
    </div>
  );
};