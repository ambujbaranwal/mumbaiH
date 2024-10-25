import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  LineChart,
  TrendingUp,
  Newspaper,
  Rocket,
  PiggyBank,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, current: true },
  { name: 'Stocks', icon: LineChart, current: false },
  { name: 'Top Movers', icon: TrendingUp, current: false },
  { name: 'News', icon: Newspaper, current: false },
  { name: 'IPOs', icon: Rocket, current: false },
  { name: 'Mutual Funds', icon: PiggyBank, current: false },
];

const secondaryNavigation = [
  { name: 'Settings', icon: Settings },
  { name: 'Help', icon: HelpCircle },
];

export function Navigation({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        'flex w-72 flex-col gap-4 border-r bg-muted/10 p-4',
        className
      )}
    >
      <div className="flex h-16 items-center px-2">
        <h1 className="text-xl font-bold">WealthWise AI</h1>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={item.current ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
        <div className="space-y-1">
          {secondaryNavigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}