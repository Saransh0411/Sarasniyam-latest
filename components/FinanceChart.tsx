'use client';

import { Ellipsis, Spline } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Name: 'Jan',
    Income: 2400,
    Expense: 4000,
    Amount: 2400,
  },
  {
    Name: 'Feb',
    Income: 1398,
    Expense: 3000,
    Amount: 2210,
  },
  {
    Name: 'Mar',
    Income: 9800,
    Expense: 2000,
    Amount: 2290,
  },
  {
    Name: 'Apr',
    Income: 3908,
    Expense: 2780,
    Amount: 2000,
  },
  {
    Name: 'May',
    Income: 4800,
    Expense: 1890,
    Amount: 2181,
  },
  {
    Name: 'June',
    Income: 3800,
    Expense: 2390,
    Amount: 2500,
  },
  {
    Name: 'July',
    Income: 4300,
    Expense: 3490,
    Amount: 2100,
  },
  {
    Name: 'Aug',
    Income: 3400,
    Expense: 4290,
    Amount: 2100,
  },
  {
    Name: 'Sep',
    Income: 2300,
    Expense: 1490,
    Amount: 2100,
  },
  {
    Name: 'Oct',
    Income: 4300,
    Expense: 2490,
    Amount: 2100,
  },
  {
    Name: 'Nov',
    Income: 5300,
    Expense: 3490,
    Amount: 2100,
  },
  {
    Name: 'Dec',
    Income: 4300,
    Expense: 3490,
    Amount: 2100,
  },
];

export default function FinanceChart() {
  return (
    <div className="h-full w-full rounded-xl bg-muted p-3">
      {/* Title */}
      <div className="flex flex-row justify-between px-2">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Ellipsis size={25} className="text-foreground" />
      </div>
      {/* Chart */}
      <div className="flex justify-center gap-3 md:-mt-3 md:gap-10">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <Spline
              strokeWidth={4}
              size={30}
              className="text-primary"
            />
            <h1 className="font-bold">₹9,00,000</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Income</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <Spline strokeWidth={4} size={30} className="text-primary/50" />
            <h1 className="font-bold">₹5,00,000</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Expense</h2>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#DDD" />
          <XAxis
            dataKey="Name"
            axisLine={false}
            tick={{ fill: '#D1D5DB' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: '#D1D5DB' }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          {/* <Legend align='center' verticalAlign='top' wrapperStyle={{paddingBottom:"20px"}}/> */}
          <Line
            type="monotone"
            dataKey="Income"
            stroke="hsl(var(--primary))"
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="hsl(var(--primary) / 0.5)"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
