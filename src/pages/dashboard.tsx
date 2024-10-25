import { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StockTable } from '@/components/stock-table';
import { TopGainers } from '@/components/top-gainers';
import { Navigation } from '@/components/navigation';

export default function Dashboard() {
  const [marketCap, setMarketCap] = useState('large');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navigation className="hidden lg:block" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center gap-4 px-4">
            <div className="flex-1">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search stocks, news, IPOs..."
                  className="w-full pl-8"
                />
              </div>
            </div>
  
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="hidden lg:inline-block">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="container py-6">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your investments today.
            </p>
          </div>

          {/* Portfolio Overview Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">
                  Total Portfolio Value
                </div>
                <div className="mt-2 text-2xl font-bold">₹15,43,872</div>
                <div className="mt-1 text-sm text-green-600">+2.5% today</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">
                  Today's Profit/Loss
                </div>
                <div className="mt-2 text-2xl font-bold text-green-600">
                  +₹12,450
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  15 stocks traded
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-muted-foreground">
                  Available Funds
                </div>
                <div className="mt-2 text-2xl font-bold">₹2,50,000</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Ready to invest
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stock Holdings */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Your Holdings</h2>
            <StockTable />
          </div>

          {/* Top Gainers Section */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Gainers</h2>
              <Tabs
                value={marketCap}
                onValueChange={setMarketCap}
                className="w-[400px]"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="large">Large Cap</TabsTrigger>
                  <TabsTrigger value="mid">Mid Cap</TabsTrigger>
                  <TabsTrigger value="small">Small Cap</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <TopGainers marketCap={marketCap} />
          </div>
        </div>
      </div>
    </div>
  );
}