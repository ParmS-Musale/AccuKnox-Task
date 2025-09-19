import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Widget } from "@/types/dashboard";
import { BarChartWidget } from "@/components/widgets/BarChartWidget";
import { LineChartWidget } from "@/components/widgets/LineChartWidget";
import { PieChartWidget } from "@/components/widgets/PieChartWidget";
import { AreaChartWidget } from "@/components/widgets/AreaChartWidget";
import { MetricWidget } from "@/components/widgets/MetricWidget";

interface WidgetCardProps {
  widget: Widget;
  onRemove: (widgetId: string) => void;
}

const getWidgetVisualization = (widgetName: string) => {
  const name = widgetName.toLowerCase();
  
  if (name.includes('risk') || name.includes('security') || name.includes('vulnerability')) {
    return <PieChartWidget />;
  } else if (name.includes('trend') || name.includes('performance') || name.includes('usage')) {
    return <LineChartWidget />;
  } else if (name.includes('comparison') || name.includes('analytics') || name.includes('workload')) {
    return <AreaChartWidget />;
  } else if (name.includes('count') || name.includes('total') || name.includes('metric')) {
    return <MetricWidget />;
  } else {
    return <BarChartWidget />;
  }
};

export const WidgetCard = ({ widget, onRemove }: WidgetCardProps) => {
  return (
    <Card className="bg-dashboard-widget-bg border-dashboard-widget-border hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-foreground">
          {widget.name}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(widget.id)}
          className="h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="mb-3">
          {getWidgetVisualization(widget.name)}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {widget.text}
        </p>
      </CardContent>
    </Card>
  );
};