'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  source: { name: string };
  author: string;
  publishedAt: string;
  tag: string;
}

const Container1: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('Failed to load news');

        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="bg-white min-h-screen py-10 p-2">
      <h2 className="text-2xl font-bold text-center mb-24">Latest Articles</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-[#F8F8F8] shadow-md overflow-hidden hover:shadow-lg transition-shadow-[#00000040]">
            {/* News Image */}
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover" />
            )}

            <div className="p-2">
              {/* News Title */}
              <h2 className="w-[300px] h-[96px] font-bold">{article.title}</h2>
              
              {/* News Description */}
              <p className="w-[310px] h-[280px]">{article.description || "No description available."}</p>
              
              {/* Meta Info (Author, Date, Tag) */}
              <div className="flex items-center justify-between text-sm text-[#53575D] mt-4">
                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src="/profile.png" width={15} height={15} alt="author" />
                  <span style={{ marginLeft: '5px' }}>{article.author || "Unknown Author"}</span>
                </div>

                {/* Published Date */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image src="/cal.png" width={15} height={15} alt="calendar" />
                  <span style={{ marginLeft: '5px' }}>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>

                {/* News Tag */}
                <button className="text-[#FFFFFF] text-xs font-medium px-2 py-2 bg-[#1E293B] rounded hover:bg-blue-600">
                  {article.tag || "NEWS"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container1;
