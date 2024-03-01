import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sophiastic Living",
  description: "Dive into a world of witty wellness, humorous reviews, and playful insights. Join Sophia as she navigates the realms of health, beauty, and lifestyle with laughter as her compass. Discover the fun side of self-care and product exploration with Sophia's quirky take on living life to the fullest!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
