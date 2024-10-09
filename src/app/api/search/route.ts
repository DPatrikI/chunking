import { NextResponse } from 'next/server';
import { searchDocuments } from '@/app/lib/searchDocuments';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required.' }, { status: 400 });
    }

    const results = await searchDocuments(query);

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    console.error('Search failed:', error);
    return NextResponse.json({ error: 'Search failed.' }, { status: 500 });
  }
}