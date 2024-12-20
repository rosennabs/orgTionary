// Footer.jsx

"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t text-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Copyright */}
          <p className=" text-base mb-4 md:mb-0">
            © 2024 Orgtionary. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
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
