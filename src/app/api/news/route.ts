// app/api/news/route.ts
import { NextResponse } from 'next/server';

const API_KEY = 'e961a3f22cf043ddaf3e7363f5a2261a'; // Store API key in .env
const BASE_URL = 'https://newsapi.org/v2/everything';
const query = 'blockchain'; // Change this to your preferred topic

export async function GET() {
    try {
        const res = await fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}&language=en&sortBy=publishedAt&pageSize=40`);
        if (!res.ok) throw new Error('Failed to fetch news');

        const data = await res.json();
        return NextResponse.json({ articles: data.articles });

    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
