import type { Metadata } from "next";


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
      <body>{children}</body>
      <footer className="bg-white">
        <p className="text-sm text-gray-500">Background image by <a href="https://www.freepik.com/awesomecontent">awesomecontent</a> on Freepik</p>
      </footer>
    </html>
  );
}
