'use client';

import { useEffect, useState } from 'react';

interface Article {
    title: string;
    url: string;
    source: { name: string };
    description: string;
    publishedAt: string;
    urlToImage: string;
    author: string;
}

export default function News() {
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
        <div className="p-4">
            <h2 className="text-2xl font-bold">📰 Latest News</h2>
            {error ? <p className="text-red-500">{error}</p> : null}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {articles.map((article, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="w-full h-60 object-cover rounded-md" />
                        )}
                        <h3 className="text-lg text-blue-500 font-semibold mt-2">{article.title}</h3>
                        {/* <p className="text-gray-500 text-sm flex flex-wrap items-center gap-2"> */}
    {/* <span>{article.source.name}</span> */}
                      <p className="text-gray-500 text-sm flex justify-between items-center w-full">
                      <span className="text-left">{new Date(article.publishedAt).toLocaleDateString()}</span>
                       {article.author ? (
                        <span className="text-center flex-1">{article.author}</span>
                        ) : (
                         <span className="text-center flex-1">Unknown Author</span>
                         )}
                          <span className="text-right">{new Date(article.publishedAt).toLocaleTimeString()}</span>
                          </p>
                          <p className="mt-2 text-gray-700">{article.description || 'No description available.'}</p>
                           
                        <a href={article.url} target="_blank" className="block text-blue-600 underline mt-2">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
