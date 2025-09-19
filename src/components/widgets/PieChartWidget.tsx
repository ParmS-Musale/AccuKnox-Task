import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { name: 'Critical', value: 15, color: 'hsl(var(--destructive))' },
  { name: 'High', value: 25, color: 'hsl(var(--warning))' },
  { name: 'Medium', value: 35, color: 'hsl(var(--primary))' },
  { name: 'Low', value: 25, color: 'hsl(var(--muted-foreground))' },
];

const chartConfig = {
  value: {
    label: "Count",
  },
};

export const PieChartWidget = () => {
  return (
    <ChartContainer config={chartConfig} className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={20}
            outerRadius={50}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};