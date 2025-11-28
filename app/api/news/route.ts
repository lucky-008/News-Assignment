import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY!;
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}