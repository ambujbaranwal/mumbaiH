import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StockTable } from '@/components/stock-table';
import { TopGainers } from '@/components/top-gainers';
import { Navigation } from '@/components/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { ThemeToggle } from '@/components/theme-toggle';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [marketCap, setMarketCap] = useState('large');
  const [themeOpen, setThemeOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]); // State for news data
  const navigate = useNavigate();

  // Fetch news from the API
  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?size=20';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '03c673094fmsha2e6de957f04861p17f164jsn9234aa1f9f0d',
          'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNewsArticles(result.data); // Set news articles in state
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleSignOut = () => {
    toast.success('Signed out successfully');
    // Add your sign-out logic here
  };

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

            {/* Chatbot Button */}
            {/* <button style={{ borderRadius: '.2rem' }} className="bg-blue-500 hover:bg-blue-700 text-white rounded h-9 w-25 flex items-center justify-center">
              <div className="flex items-center">
                <img 
                  src="bot.png" 
                  alt="Logo" 
                  className="w-4 h-4 sm:w-8 sm:h-4 md:w-4 md:h-4 lg:w-9 lg:h-9 object-contain rounded-full mr-1" 
                />
                <span className="text-base sm:text-lg md:text-xl lg:text-xl">chatbot</span>
              </div>
            </button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="hidden lg:inline-block">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem onClick={() => setThemeOpen(true)}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            {/* (The rest of the portfolio cards go here) */}
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
                <TabsList className="grid w-full grid-cols-3 gap-4">
                  <TabsTrigger value="large">Large Cap</TabsTrigger>
                  <TabsTrigger value="mid">Mid Cap</TabsTrigger>
                  <TabsTrigger value="small">Small Cap</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <TopGainers marketCap={marketCap} />
          </div>

          {/* News Section */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Latest News</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <Card key={article.id} className="h-full">
                  <CardContent className="flex flex-col">
                    <img
                      src={article.attributes.uriImage}
                      alt={article.attributes.title}
                      className="mb-4 h-40 w-full object-cover rounded-lg"
                    />
                    <h3 className="mb-2 text-xl font-semibold">
                      {article.attributes.title}
                    </h3>
                    <a
                      href={`https://seekingalpha.com${article.links.self}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-blue-600 hover:underline"
                    >
                      Read more
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
