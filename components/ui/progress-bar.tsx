import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    calories: 100,
  },
];

// interface IDataProgressProps {
//   data: any;
// }

export default function ProgressBar() {
  return (
    <ResponsiveContainer width="100%" height="200px">
      <BarChart data={data}>
        <Bar
          dataKey="calories"
          style={
            {
              fill: "hsl(var(--foreground))",
              opacity: 0.9,
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
