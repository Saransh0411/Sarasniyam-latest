import { CountChart } from '@/components/CountChart';
import { UserCard } from '@/components/UserCard';
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import EventCalendar from '@/components/EventCalendar';
import Announcements from '@/components/Announcements';

export default function AdminPage() {
  return (
    <div className="font-mont tracking-wider grid-cols-2 grid gap-2 bg-background p-2 md:grid-cols-7">
      {/* LEFT */}
      <div className="col-span-7 grid gap-2 sm:col-span-5">
        {/* User Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Charts */}
        <div className="grid grid-cols-5 gap-2">
          {/* Count Chart */}
          <div className="col-span-7 h-[450px] w-full sm:col-span-2">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="col-span-7 h-[450px] w-full sm:col-span-3">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="h-[550px] w-full">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="col-span-7 grid gap-2 sm:col-span-2">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
