import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { name: 'Jan', value: 400, trend: 240 },
  { name: 'Feb', value: 300, trend: 139 },
  { name: 'Mar', value: 500, trend: 980 },
  { name: 'Apr', value: 280, trend: 390 },
  { name: 'May', value: 590, trend: 480 },
  { name: 'Jun', value: 320, trend: 380 },
];

const chartConfig = {
  value: {
    label: "Primary",
    color: "hsl(var(--primary))",
  },
  trend: {
    label: "Secondary",
    color: "hsl(var(--secondary))",
  },
};

export const AreaChartWidget = () => {
  return (
    <ChartContainer config={chartConfig} className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis hide />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area 
            type="monotone" 
            dataKey="trend" 
            stackId="1"
            stroke="hsl(var(--secondary))" 
            fill="hsl(var(--secondary))"
            fillOpacity={0.3}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stackId="1"
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};