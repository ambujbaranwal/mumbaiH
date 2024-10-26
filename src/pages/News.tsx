import React, { useEffect, useState } from 'react';
import { fetchNewsArticles } from '@/lib/fetchNewsArticles';

export function NewsSection() {
  const [newsArticles, setNewsArticles] = useState<any[]>([]);

  useEffect(() => {
    async function loadNews() {
      const articles = await fetchNewsArticles();
      setNewsArticles(articles);
    }
    loadNews();
  }, []);

  return (
    <section className="news-section">
      <h2 className="text-2xl font-bold mb-4">Trending News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-card p-4 shadow-md rounded-lg">
            <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-semibold">{article.title}</h3>
            <a href={article.articleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
