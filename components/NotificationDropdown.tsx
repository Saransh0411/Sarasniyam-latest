import { Button } from '@/components/ui/button';
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
import { Speech } from 'lucide-react';

export function NotificationDropdown() {
  return (
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
            <CardDescription>You have 3 unread notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Speech size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New message received</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Speech size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Your post was liked</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Speech size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New follower</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
