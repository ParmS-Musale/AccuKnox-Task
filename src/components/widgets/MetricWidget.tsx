import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricWidgetProps {
  value?: string;
  change?: number;
  label?: string;
}

export const MetricWidget = ({ value = "1,234", change = 12.5, label = "Total Items" }: MetricWidgetProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="h-32 w-full flex flex-col justify-center items-center bg-gradient-to-br from-background to-muted/20 rounded-lg p-4">
      <div className="text-2xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mb-2">
        {label}
      </div>
      <div className={`flex items-center text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? (
          <TrendingUp className="h-3 w-3 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 mr-1" />
        )}
        <span>{Math.abs(change)}%</span>
      </div>
    </div>
  );
};