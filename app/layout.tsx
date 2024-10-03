import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';

import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-[100vh] flex flex-col">
        <Header />

        <main className="flex-grow max-h-[100vh] mt-8 ">
          {children}
        </main>
        

        {/* <p className="text-sm text-gray-500">Background image by <a href="https://www.freepik.com/awesomecontent">awesomecontent</a> on Freepik</p> */}
        {/* <footer className="relative bg-white border-t px-8 py-4">
          

          <div className="flex items-center justify-between text-gray-500">

            <p>© 2024 Orgtionary</p>
   

            <div className="flex gap-6">
              <Link className='link' href='about'>Accessibility</Link>
              <Link className='link' href='glossary'>Privacy</Link>
              <Link className='link' href='contact'>Terms</Link>
              <Link className='link' href='/glossary'>Glossary</Link>
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
