// Footer.jsx

"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t text-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Copyright */}
          <p className="text-sm md:mb-0">
            © 2024 Orgtionary
          </p>

          {/* Footer Links */}
          <div className="flex gap-2 text-sm sm:gap-6">
            <Link href="#" className="link">
              Accessibility
            </Link>
            <Link href="#" className="link">
              Privacy
            </Link>
            <Link href="#" className="link">
              Terms
            </Link>
            <Link href="/glossary" className="link">
              Glossary
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
