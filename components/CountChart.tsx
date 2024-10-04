'use client';

import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Total',
    count: 200,
    fill: '#FFFFFF',
  },
  {
    name: 'Girls',
    count: 90,
    fill: 'hsl(var(--primary) / 0.5)',
  },
  {
    name: 'Boys',
    count: 110,
    fill: 'hsl(var(--primary))',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export function CountChart() {
  return (
    <div className="h-full w-full rounded-xl bg-muted p-3">
      {/* Title */}
      <div className="flex flex-row justify-between px-2">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis size={25} className="text-foreground" />
      </div>
      {/* Chart */}
      <div className="relative h-[80%] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="100%"
            barSize={35}
            data={data}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/Boys&Girls.png"
          alt=""
          width={75}
          height={75}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom */}
      <div className="-mt-2 flex justify-center gap-16">
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <div className="bg-primary size-5 rounded-md" />
            <h1 className="font-bold">110</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2">
            <div className="size-5 rounded-md bg-primary/50" />
            <h1 className="font-bold">90</h1>
          </div>
          <h2 className="text-xs font-bold text-foreground">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}
