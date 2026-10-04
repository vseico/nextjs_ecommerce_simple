import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";


export const metadata: Metadata = {
  title: "MyStore",
  description: "By cool products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-full flex-col bg-white`}
      >
        <Navbar />
        <main className="grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
