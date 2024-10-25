import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const gainers = {
  large: [
    {
      name: 'Torrent Pharma',
      symbol: 'TORNTPHARM',
      price: 2345.60,
      change: 8.5,
    },
    {
      name: 'Godrej Consumer',
      symbol: 'GODREJCP',
      price: 987.30,
      change: 6.2,
    },
    {
      name: 'Asian Paints',
      symbol: 'ASIANPAINT',
      price: 3456.75,
      change: 5.8,
    },
    {
      name: 'HUL',
      symbol: 'HINDUNILVR',
      price: 2567.40,
      change: 4.9,
    },
  ],
  mid: [
    {
      name: 'Trent Ltd',
      symbol: 'TRENT',
      price: 1234.50,
      change: 9.2,
    },
    {
      name: 'Federal Bank',
      symbol: 'FEDERALBNK',
      price: 145.60,
      change: 7.8,
    },
    {
      name: 'Indian Hotels',
      symbol: 'INDHOTEL',
      price: 389.45,
      change: 6.5,
    },
    {
      name: 'Voltas',
      symbol: 'VOLTAS',
      price: 876.30,
      change: 5.4,
    },
  ],
  small: [
    {
      name: 'Mastek',
      symbol: 'MASTEK',
      price: 567.80,
      change: 12.4,
    },
    {
      name: 'KPIT Tech',
      symbol: 'KPITTECH',
      price: 234.50,
      change: 10.2,
    },
    {
      name: 'Sonata',
      symbol: 'SONATSOFTW',
      price: 456.70,
      change: 8.9,
    },
    {
      name: 'Zensar',
      symbol: 'ZENSARTECH',
      price: 345.60,
      change: 7.6,
    },
  ],
};

export function TopGainers({ marketCap }: { marketCap: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {gainers[marketCap as keyof typeof gainers].map((stock) => (
        <Card key={stock.symbol}>
          <CardContent className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="font-medium">{stock.name}</div>
                <div className="text-sm text-muted-foreground">
                  {stock.symbol}
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-sm text-green-700">
                <TrendingUp className="h-3 w-3" />
                {stock.change}%
              </div>
            </div>
            <div className="text-2xl font-bold">₹{stock.price}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}