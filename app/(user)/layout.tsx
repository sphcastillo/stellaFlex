import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { draftMode } from "next/headers";
import LiveVisualEditing from "@/components/LiveVisualEditing";


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
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
