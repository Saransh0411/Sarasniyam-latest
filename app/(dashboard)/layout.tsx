'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from '@/public/logo.svg';
import Image from 'next/image';
import SideBar from '@/components/SideBar';
import { CircleUser, MessageCircleMore, Speech } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[270px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="mx-auto flex items-center gap-2 font-semibold"
            >
              <Image src={Logo} alt="" width={35} />
              <h3 className="font-mont text-2xl">
                Saras<span className="text-primary">Niyam</span>
              </h3>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium">
              <SideBar />
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="ml-auto flex items-center gap-x-5">
            <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
                    <Button variant="outline" size="icon">
                      <MessageCircleMore
                        size={35}
                        color="hsl(var(--accent-foreground))"
                        className="aspect-square p-1.5"
                      />
                    </Button>
                    <div className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                      2
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80 font-mont">
                  <h1 className="font-bold">Notifications</h1>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">
                          New message received
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">
                          Your post was liked
                        </p>
                        <p className="text-xs text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">New follower</p>
                        <p className="text-xs text-muted-foreground">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                2
              </div>
            </div>
            <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full border-none">
                    <Button variant="outline" size="icon">
                      <Speech
                        size={35}
                        color="hsl(var(--accent-foreground))"
                        className="aspect-square p-1.5"
                      />
                    </Button>
                    <div className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                      3
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80 font-mont">
                  <h1 className="font-bold">Announcements</h1>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">
                          New message received
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">
                          Your post was liked
                        </p>
                        <p className="text-xs text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm font-medium">New follower</p>
                        <p className="text-xs text-muted-foreground">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <ThemeToggle />
            <Label className="flex flex-col -space-y-1 font-mont font-bold">
              <p className="text-lg text-accent-foreground">Nishan Kashyap</p>
              <p className="text-right text-sm text-muted-foreground">Admin</p>
            </Label>
            <CircleUser size={35} />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6">{children}</main>
      </div>
    </section>
  );
}
