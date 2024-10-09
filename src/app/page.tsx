'use client';

import { useState } from 'react';
import Upload from '@/app/components/Upload';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setResults(data.results);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Azure AI Search Demo</h1>
      <Upload />
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full text-black"
          placeholder="Enter your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      <div className="mt-8">
        {results.map((result, index) => (
          <div key={index} className="border-b border-white py-2">
            <p>{result.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}