'use client';

import React, { useMemo } from 'react';
import { ArrowDownUp, FilterIcon, UserRoundPlus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { TeachersData } from '@/lib/Teacher';

export default function Teachers(): React.ReactElement {
  const filteredAndSortedStudents = useMemo(() => {
    let result = [...TeachersData];
    return result;
  }, []);

  return (
    <div className="m-1 overflow-hidden rounded-lg border-2 border-muted-foreground font-mont md:m-2 lg:m-4">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-accent-foreground">
              <thead className="bg-muted-foreground">
                <tr className="text-center">
                  <th
                    scope="col"
                    className="border-l border-r border-foreground border-l-muted-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="border-l border-r border-foreground border-l-muted-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="border-l border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Subjects
                  </th>
                  <th
                    scope="col"
                    className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Classes
                  </th>
                  <th
                    scope="col"
                    className="border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="scrollbar-thin scrollbar-thumb-slate-500 max-h-[400px] min-w-full divide-y divide-accent-foreground overflow-y-scroll bg-muted">
                {filteredAndSortedStudents.map((teacher) => (
                  <tr
                    key={teacher.teacherId}
                    className="text-center hover:bg-muted-foreground/10"
                  >
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm font-medium">
                      {teacher.id}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm font-medium">
                      {teacher.name}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {teacher.email}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {teacher.phone}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {teacher.subjects.map((subject, index) => (
                        <span key={index}>
                          {subject}
                          {index < teacher.subjects.length - 1 && ', '}
                        </span>
                      ))}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {teacher.classes.map((classes, index) => (
                        <span key={index}>
                          {classes}
                          {index < teacher.classes.length - 1 && ', '}
                        </span>
                      ))}
                    </td>
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {teacher.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
