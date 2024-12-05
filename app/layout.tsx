import type { Metadata } from "next";
import Link from 'next/link';
import Header from '@/components/Header';
import { GlossaryDataProvider } from '@/contexts/GlossaryDataContext';
import "./globals.css";


export const metadata: Metadata = {
  title: "Ortionary",
  description: "Ortionary is a platform where users can search and find word definitions tailored to their organizational needs.",
  keywords: "dictionary, organizational glossary, word definitions, custom glossary, terminology platform",
  author: "Rose Francis",
  viewport: "width=device-width, initial-scale=1.0",
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

        {/* Wrap the children with GlossaryDataProvider */}
        <GlossaryDataProvider>
        <main className="mt-8 ">
            {children}
          <footer className="bg-white border-t px-8 py-4 mt-auto">


            <div className="flex items-center justify-between text-gray-500">

              <p>© 2024 Orgtionary</p>


              <div className="flex gap-6">
                <Link className='link' href='#'>Accessibility</Link>
                <Link className='link' href='#'>Privacy</Link>
                <Link className='link' href='#'>Terms</Link>
                <Link className='link' href='/glossary'>Glossary</Link>
              </div>
            </div>
          </footer>
          </main>
        </GlossaryDataProvider>
        

        {/* <p className="text-sm text-gray-500">Background image by <a href="https://www.freepik.com/awesomecontent">awesomecontent</a> on Freepik</p> */}
        
      </body>
    </html>
  );
}
