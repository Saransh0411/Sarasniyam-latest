'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import 'react-calendar/dist/Calendar.css';
import { Ellipsis } from 'lucide-react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '1200 - 1500 hrs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '1200 - 1500 hrs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '1200 - 1500 hrs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="rounded-xl bg-muted p-3">
      <div className="flex justify-center bg-inherit">
        <Calendar />
      </div>
      <div className="rounded-xl">
        <div className="flex flex-row justify-between p-2">
          <h1 className="text-lg font-semibold">Events</h1>
          <Ellipsis size={25} className="text-foreground" />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              className="rounded-md border-2 border-t-8 border-muted-foreground p-5 odd:border-t-primary even:border-t-primary/50"
              key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-foreground">{event.title}</h1>
                <span className="text-xs text-muted-foreground">{event.time}</span>
              </div>
              <p className="mt-2 text-sm text-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
