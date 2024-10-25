import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const stocks = [
  {
    name: 'Reliance Industries',
    symbol: 'RELIANCE',
    price: 2456.75,
    returns: 15.2,
    value: 245675,
  },
  {
    name: 'HDFC Bank',
    symbol: 'HDFCBANK',
    price: 1567.30,
    returns: -2.5,
    value: 156730,
  },
  {
    name: 'Infosys',
    symbol: 'INFY',
    price: 1342.60,
    returns: 5.8,
    value: 134260,
  },
  {
    name: 'TCS',
    symbol: 'TCS',
    price: 3245.90,
    returns: 8.3,
    value: 324590,
  },
  {
    name: 'Bharti Airtel',
    symbol: 'BHARTIARTL',
    price: 876.45,
    returns: -1.2,
    value: 87645,
  },
];

export function StockTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Market Price</TableHead>
          <TableHead className="text-right">Returns (%)</TableHead>
          <TableHead className="text-right">Current Value</TableHead>
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
                stock.returns >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stock.returns >= 0 ? '+' : ''}
              {stock.returns.toFixed(1)}%
            </TableCell>
            <TableCell className="text-right">
              ₹{stock.value.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}