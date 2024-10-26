// fetchMarketTrends.ts
const url = 'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=MARKET_INDEXES&country=us&language=en';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'b6d609d583mshb58705984c27836p1cd989jsn16846d8e37f5',
    'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
  }
};

export async function fetchMarketTrends() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    // Extract and map to needed format
    return result.data.trends.map((trend: any) => ({
      name: trend.name,
      symbol: trend.symbol,
      price: trend.price,
      changePercent: trend.change_percent,
      value: (trend.price * 100).toFixed(2), // Placeholder for value, adjust as needed
    }));
  } catch (error) {
    console.error("Error fetching market trends:", error);
    return [];
  }
}
