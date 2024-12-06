import React from 'react';
import Link from 'next/link';

function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-700">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6">Your submission has been successfully received. We will respond to you as soon as possible.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default SuccessPage;
