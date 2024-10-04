'use client';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, IndianRupee, UsersRound } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-b from-blue-400 to-purple-700 text-white shadow-xl transition-all hover:scale-105">
          <CardContent className="grid grid-rows-[auto_1fr_auto] justify-items-center gap-y-2 p-3">
            <GraduationCap size={85} />
            <div className="text-center">
              <h2 className="text-3xl font-medium">Total Students</h2>
              <span className="text-5xl font-bold">2314</span>
            </div>
            <p className="text-md tracking-wide">+27 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-b from-green-400 to-green-700 text-white shadow-xl transition-all hover:scale-105">
          <CardContent className="grid grid-rows-[auto_1fr_auto] justify-items-center gap-y-2 p-3">
            <UsersRound size={85} />
            <div className="text-center">
              <h2 className="text-3xl font-medium">Total Teachers</h2>
              <span className="text-5xl font-bold">96</span>
            </div>
            <p className="text-md tracking-wide">+4 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-b from-cyan-500 to-blue-700 text-white shadow-xl transition-all hover:scale-105">
          <CardContent className="grid grid-rows-[auto_1fr_auto] justify-items-center gap-y-2 p-3">
            <IndianRupee size={85} />
            <div className="text-center">
              <h2 className="text-3xl font-medium">Total Revenue</h2>
              <span className="text-5xl font-bold">₹96,435.56</span>
            </div>
            <p className="text-md tracking-wide">+14.1% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        
      </div>
    </div>
  );
}
