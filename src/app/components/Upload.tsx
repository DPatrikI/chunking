'use client';

import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert('File uploaded successfully.');
    } else {
      alert(`Upload failed: ${data.error}`);
    }

    setUploading(false);
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept=".txt"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
      <button
        onClick={handleUpload}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}