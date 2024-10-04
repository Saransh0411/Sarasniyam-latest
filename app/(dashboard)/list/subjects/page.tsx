'use client';

import React, { useState, useMemo } from 'react';
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
import { SubjectsData } from '@/lib/Subject';
import Image from 'next/image';

export default function Subjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterBatch, setFilterBatch] = useState('');
  const [filterFeeStatus, setFilterFeeStatus] = useState('');

  const filteredAndSortedStudents = useMemo(() => {
    let result = [...SubjectsData];

    if (filterBatch) {
      result = result.filter((student) => student.batch === filterBatch);
    }
    if (filterFeeStatus) {
      result = result.filter(
        (student) => student.feeStatus === filterFeeStatus,
      );
    }



    return result;
  }, [searchTerm, searchBy, sortBy, sortOrder, filterBatch, filterFeeStatus]);

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
                    Subject Code
                  </th>

                  <th
                    scope="col"
                    className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Subject Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background"
                  >
                    Teachers
                  </th>
                </tr>
              </thead>
              <tbody className="scrollbar-thin scrollbar-thumb-slate-500 max-h-[400px] min-w-full divide-y divide-accent-foreground overflow-y-scroll bg-muted">
                {filteredAndSortedStudents.map((subject) => (
                  <tr
                    key={subject.id}
                    className="text-center hover:bg-muted-foreground/10"
                  >
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm font-medium">
                      {subject.id}
                    </td>
                    {/* <Link href={`/list/students/${params}`}> */}
                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {subject.name}
                    </td>
                    {/* </Link> */}

                    <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                      {subject.teachers.map((teacher, index) => (
                        <span key={index}>
                          {teacher}
                          {index < subject.teachers.length - 1 && ', '}
                        </span>
                      ))}
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
