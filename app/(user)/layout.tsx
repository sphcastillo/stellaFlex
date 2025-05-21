import Header from "@/components/Header";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";
import OurSchematicProvider from "@/components/Schematic/OurSchematicProvider";

export const metadata: Metadata = {
  title: "StellaFlex",
  description:
    "Welcome to StellaFlex — your go-to destination for smart, holistic fitness insights, powered by Next.js and Sanity. Explore expertly crafted content designed to empower your wellness journey, curated by fitness visionary Stella Jacobs. From nutrition and training to mindset and recovery, From training to recovery, StellaFlex guides you toward a stronger, healthier you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <OurSchematicProvider>
          <body className="max-w-7xl mx-auto">
            <Header />
            {children}
          </body>

          <SanityLive />
          </OurSchematicProvider>
      </html>
    </ClerkProvider>
  );
}
