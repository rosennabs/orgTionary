import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GlossaryDataProvider } from '@/context/GlossaryDataContext';
import "./globals.css";


export const metadata: Metadata = {
  title: "Ortionary",
  description: "Ortionary is a platform where users can search and find word definitions tailored to their organizational needs.",
  keywords: "dictionary, organizational glossary, word definitions, custom glossary, terminology platform",
  author: "Rosemary Okere",
  viewport: "width=device-width, initial-scale=1.0"

};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        {/* Wrap the children with GlossaryDataProvider */}
        <GlossaryDataProvider>
          <main className="flex-grow">
            {children}
          </main>
        </GlossaryDataProvider>

        <Footer />
        
      </body>
    </html>
  );
}
