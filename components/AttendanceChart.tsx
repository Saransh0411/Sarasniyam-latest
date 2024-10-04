'use client';

import { Ellipsis } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Name: 'Mon',
    Present: 60,
    Absent: 20,
  },
  {
    Name: 'Tue',
    Present: 70,
    Absent: 18,
  },
  {
    Name: 'Wed',
    Present: 90,
    Absent: 10,
  },
  {
    Name: 'Thu',
    Present: 20,
    Absent: 38,
  },
  {
    Name: 'Fri',
    Present: 20,
    Absent: 38,
  },
  {
    Name: 'Sat',
    Present: 60,
    Absent: 40,
  },
];
export default function AttendanceChart() {
  return (
    <div className="h-full w-full rounded-xl bg-muted p-3">
      {/* Title */}
      <div className="flex flex-row justify-between px-2">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Ellipsis size={25} className="text-foreground" />
      </div>
      {/* Chart */}
      <div className="flex justify-center gap-10 md:-mt-3">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <div className="size-5 rounded-md bg-primary" />
            <h1 className="font-bold">200</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Present (75%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <div className="size-5 rounded-md bg-primary/50" />
            <h1 className="font-bold">30</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Absent (25%)</h2>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />
          <XAxis
            dataKey="Name"
            axisLine={false}
            tick={{ fill: '#D1D5DB' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: '#D1D5DB' }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Bar
            dataKey="Present"
            fill="hsl(var(--primary))"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Absent"
            fill="hsl(var(--primary) / 0.5)"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
