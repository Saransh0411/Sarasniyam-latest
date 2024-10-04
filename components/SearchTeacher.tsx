import {
  ArrowUpDown,
  Filter,
  Search,
  UserRoundPlus,
  ArrowDownAZ,
  ArrowDownZA,
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import TeacherRegistrationForm from '@/components/forms/TeacherForm';

export default function SearchStudent() {
  const [activeButton, setActiveButton] = useState<'name' | 'rollNo'>('name');
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex items-center space-x-1">
        <div className="relative">
          <Input
            placeholder="Search..."
            color="hsl(var(--accent-foreground))"
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
            variant={activeButton === 'rollNo' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full border font-mont font-bold"
            onClick={() => setActiveButton('rollNo')}
          >
            Roll No.
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
                <MenubarSubTrigger>Batches</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>A1</MenubarItem>
                  <MenubarItem>A2</MenubarItem>
                  <MenubarItem>B1</MenubarItem>
                  <MenubarItem>B2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Fee Status</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Paid</MenubarItem>
                  <MenubarItem>Unpaid</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
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
                <MenubarSubTrigger>Letter</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem className="flex justify-between">
                    <ArrowDownAZ strokeWidth={2} />
                    <p>A-Z</p>
                  </MenubarItem>
                  <MenubarItem className="flex justify-between">
                    <ArrowDownZA strokeWidth={2} />
                    <p>Z-A</p>
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Batches</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem className="flex justify-between">
                    <ArrowUpWideNarrow strokeWidth={2} />
                    <p>A1-B2</p>
                  </MenubarItem>
                  <MenubarItem className="flex justify-between">
                    <ArrowDownNarrowWide strokeWidth={2} />
                    <p>B2-A1</p>
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <TeacherRegistrationForm />
    </div>
  );
}
