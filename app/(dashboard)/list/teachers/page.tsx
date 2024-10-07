'use client';

import React, { useState, useMemo } from 'react';
import {
  ArrowUpDown,
  Filter,
  Search,
  UserRoundPlus,
  ArrowDownAZ,
  ArrowDownZA,
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import TeacherRegistrationForm from '@/components/forms/TeacherForm';
import { TeachersData } from '@/lib/Teacher';

export default function Teachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState<'name' | 'id'>('name');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }[]>([]);
  const [filterSubject, setFilterSubject] = useState('');
  const [filterBatch, setFilterBatch] = useState('');

  const subjects = [...new Set(TeachersData.flatMap(teacher => teacher.subjects))];
  const batches = [...new Set(TeachersData.flatMap(teacher => teacher.batches))];

  const filteredAndSortedTeachers = useMemo(() => {
    let result = [...TeachersData];

    if (filterSubject) {
      result = result.filter((teacher) => teacher.subjects.includes(filterSubject));
    }
    if (filterBatch) {
      result = result.filter((teacher) => teacher.batches.includes(filterBatch));
    }

    if (searchTerm) {
      result = result.filter((teacher) => {
        if (activeButton === 'name') {
          return teacher.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return teacher.teacherId.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
    }

    if (sortConfig.length > 0) {
      result.sort((a:any, b:any) => {
        for (const { key, direction } of sortConfig) {
          if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
          if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [
    searchTerm,
    activeButton,
    sortConfig,
    filterSubject,
    filterBatch,
  ]);

  const handleSort = (key: string) => {
    const newConfig = [...sortConfig];
    const configIndex = newConfig.findIndex(item => item.key === key);
    if (configIndex !== -1) {
      if (newConfig[configIndex].direction === 'asc') {
        newConfig[configIndex].direction = 'desc';
      } else {
        newConfig.splice(configIndex, 1);
      }
    } else {
      newConfig.push({ key, direction: 'asc' });
    }
    setSortConfig(newConfig);
  };

  const resetFilters = () => {
    setFilterSubject('');
    setFilterBatch('');
  };

  const resetSort = () => {
    setSortConfig([]);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div className="flex items-center space-x-1">
            <div className="relative">
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-hsl(var(--foreground)) w-full rounded-full border pl-10 pr-4 font-mont text-sm font-bold placeholder-foreground hover:bg-muted lg:w-60"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 transform"
                size={20}
                color="hsl(var(--accent-foreground))"
              />
            </div>
            <div className="flex space-x-1">
              <Button
                variant={activeButton === 'name' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full border font-mont font-bold"
                onClick={() => setActiveButton('name')}
              >
                Name
              </Button>
              <Button
                variant={activeButton === 'id' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full border font-mont font-bold"
                onClick={() => setActiveButton('id')}
              >
                ID
              </Button>
            </div>
          </div>
          <div className="flex gap-x-3">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter
                      size={35}
                      color="hsl(var(--accent-foreground))"
                      className="rounded-full p-1.5"
                    />
                  </Button>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Subjects</MenubarSubTrigger>
                    <MenubarSubContent>
                      {subjects.map((subject) => (
                        <MenubarItem
                          key={subject}
                          onClick={() => setFilterSubject(subject)}
                        >
                          {subject}
                          {filterSubject === subject && (
                            <Check className="ml-2 h-4 w-4" />
                          )}
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Batches</MenubarSubTrigger>
                    <MenubarSubContent>
                      {batches.map((bat) => (
                        <MenubarItem
                          key={bat}
                          onClick={() => setFilterBatch(bat)}
                        >
                          {bat}
                          {filterBatch === bat && (
                            <Check className="ml-2 h-4 w-4" />
                          )}
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem onClick={resetFilters}>
                    Clear Filters
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Button variant="outline" size="icon">
                    <ArrowUpDown
                      size={35}
                      color="hsl(var(--accent-foreground))"
                      className="rounded-full p-1.5"
                    />
                  </Button>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Name</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => handleSort('name')}>
                        <ArrowDownAZ className="mr-2 h-4 w-4" />
                        A-Z
                        {sortConfig.some(config => config.key === 'name' && config.direction === 'asc') && (
                          <Check className="ml-2 h-4 w-4" />
                        )}
                      </MenubarItem>
                      <MenubarItem onClick={() => handleSort('name')}>
                        <ArrowDownZA className="mr-2 h-4 w-4" />
                        Z-A
                        {sortConfig.some(config => config.key === 'name' && config.direction === 'desc') && (
                          <Check className="ml-2 h-4 w-4" />
                        )}
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem onClick={resetSort}>Reset Sort</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
        <TeacherRegistrationForm />
      </div>

      <div className="overflow-hidden rounded-lg border-2 border-muted-foreground font-mont">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-accent-foreground">
            <thead className="bg-muted-foreground">
              <tr className="text-center">
                <th className="border-l border-r border-foreground border-l-muted-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  ID
                </th>
                <th className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Name
                </th>
                <th className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Email
                </th>
                <th className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Phone Number
                </th>
                <th className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Subjects
                </th>
                <th className="border-r border-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Batches
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-background">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="scrollbar-thin scrollbar-thumb-slate-500 max-h-[400px] min-w-full divide-y divide-accent-foreground overflow-y-scroll bg-muted">
              {filteredAndSortedTeachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="text-center hover:bg-muted-foreground/10"
                >
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm font-medium">
                    {teacher.teacherId}
                  </td>
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                    {teacher.name}
                  </td>
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                    {teacher.email}
                  </td>
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                    {teacher.phone}
                  </td>
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                    {teacher.subjects.join(', ')}
                  </td>
                  <td className="whitespace-nowrap border border-muted-foreground px-6 py-2 text-sm">
                    {teacher.batches.join(', ')}
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
  );
}
