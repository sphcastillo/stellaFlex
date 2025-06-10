import Header from "@/components/Header";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";
import OurSchematicProvider from "@/components/Schematic/OurSchematicProvider";
import { Toaster } from "sonner";
import DMButton from "@/components/DirectMessageButton";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}>
            <AnimatedBackground />
            <Header />
            {children}

            <div className="fixed bottom-4 right-4">
              <DMButton />
            </div>

            <Toaster position="bottom-center" />

          </body>

          <SanityLive />
          </OurSchematicProvider>
      </html>
    </ClerkProvider>
  );
}
