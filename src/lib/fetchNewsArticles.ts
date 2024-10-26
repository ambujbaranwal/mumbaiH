// fetchNewsArticles.ts
const url = 'https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?size=20';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'Rapid_News_API_KEY',
    'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com'
  }
};

export async function fetchNewsArticles() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Map to format the data for easy use in components
    return result.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      imageUrl: item.links.uriImage,
      articleUrl: `https://seekingalpha.com${item.links.self}`,
    }));
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return [];
  }
}
