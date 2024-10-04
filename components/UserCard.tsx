'use client';

import { Ellipsis } from 'lucide-react';

export function UserCard({ type }: { type: string }) {
  return (
    <div className="even:bg-primary/50 even:text-foreground  max-w-md flex-1 rounded-2xl p-4 odd:bg-primary odd:text-background">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-background px-2 py-1 text-xs text-foreground font-bold">
          2024/25
        </span>
        <Ellipsis size={25} className="text-foreground" />
      </div>
      <h1 className="my-2 text-2xl font-bold">1,234</h1>
      <h2 className="text-sm font-bold capitalize ">{type}s</h2>
    </div>
  );
}
