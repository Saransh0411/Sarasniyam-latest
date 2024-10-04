'use client';

import Link from 'next/link';
import { NavLinks } from '@/lib/NavLinks';
import { Role } from '@/lib/Role';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function SideBar() {
  const pathname = usePathname();
  return (
    <>
      {NavLinks.map((label) => {
        if (label.visible.includes(Role)) {
          return (
            <Link
              href={label.href}
              key={label.name}
              className={cn(
                pathname == label.href
                  ? 'bg-muted text-primary'
                  : 'bg-none text-muted-foreground',
                'flex items-center gap-2 rounded-lg px-4 py-1 font-mont text-lg font-bold tracking-wide transition-all hover:text-primary/70',
              )}
            >
              <label.icon size={24} strokeWidth={3} />
              {label.name}
            </Link>
          );
        }
      })}
    </>
  );
}
