import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchMarketTrends } from '@/lib/stocksApi';

export function StockTable() {
  const [stocks, setStocks] = useState<any[]>([]);

  useEffect(() => {
    async function getStocks() {
      const stockData = await fetchMarketTrends();
      setStocks(stockData);
    }
    getStocks();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Market Price</TableHead>
          <TableHead className="text-right">Change (%)</TableHead>
          <TableHead className="text-right">Current Value (₹)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell>
              <div>
                <div className="font-medium">{stock.name}</div>
                <div className="text-sm text-muted-foreground">
                  {stock.symbol}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              ₹{stock.price.toFixed(2)}
            </TableCell>
            <TableCell
              className={`text-right ${
                stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
            </TableCell>
            <TableCell className="text-right">
              ₹{parseFloat(stock.value).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
