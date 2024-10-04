import { CircleUser, MessageCircleMore, Speech } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import SearchStudent from '@/components/SearchStudent';
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
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {pathname === '/list/student' && <SearchStudent />}
      <div className="ml-auto flex items-center gap-x-5">
        <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
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
            <PopoverContent className="w-80">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    You have 3 unread notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Speech size={16} className="text-primary" />
                      </div>
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
                      <div className="rounded-full bg-primary/20 p-2">
                        <Speech size={16} className="text-primary" />
                      </div>
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
                      <div className="rounded-full bg-primary/20 p-2">
                        <Speech size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New follower</p>
                        <p className="text-xs text-muted-foreground">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </PopoverContent>
          </Popover>

          <div className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white">
            1
          </div>
        </div>
        <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
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
        <ThemeToggle />
        <Label className="flex flex-col -space-y-1 font-mont font-bold">
          <p className="text-lg text-accent-foreground">Nishan Kashyap</p>
          <p className="text-right text-sm text-muted-foreground">Admin</p>
        </Label>
        <CircleUser size={35} />
      </div>
    </header>
  );
}
