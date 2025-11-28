'use client';

import  { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Link from 'next/link';
import NewsCard from './NewsCard';
import { Trending } from '@/constants';

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string; 
  content: string | null;
}


const Hero = () => {

   const [article, setArticle] = useState<NewsArticle[] | []>([]);

   const fetchNews = async () => {
      const response = await fetch('api/news');
      const data = await response.json();
      setArticle(data.articles);
   }

   useEffect(() => {
      fetchNews();
   },[])

   const articleLength = article.length;
   console.log(articleLength)

  return (
   <div className="p-4">
      <div className="hidden sm:flex items-center gap-2 mb-4">
        <div className="border-l-4 border-red-700 h-10" />
        <h1 className="text-2xl font-semibold">Top News</h1>
        <div className="border-2 border-red-700 h-px flex-1" />
      </div>

      <div className="flex gap-2 overflow-x-auto py-2 mb-4">
        {Trending.map((trend) => (
          <Link
            key={trend.href}
            href={`/tags/${trend.href}`}
            className="border text-md font-semibold hover:bg-red-800 transition-all duration-300 hover:scale-105 border-red-700 py-2 px-4 rounded-full shrink-0"
          >
            {trend.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full gap-4 lg:w-1/2">
          {article.slice(0, Math.ceil(articleLength / 2)).map((news,idx) => (
            <Link key={idx} href={news.url} className="h-auto">
              <NewsCard {...news} />
            </Link>
          ))}
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-4">
          {article.slice(Math.ceil(articleLength / 2), articleLength).map((news) => (
            <Link key={news.title} href={news.url} className="h-auto">
              <NewsCard {...news} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
