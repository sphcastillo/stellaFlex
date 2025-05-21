import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StellaFlex",
  description: "Welcome to StellaFlex — your go-to destination for smart, holistic fitness insights, powered by Next.js and Sanity. Explore expertly crafted content designed to empower your wellness journey, curated by fitness visionary Stella Jacobs. From nutrition and training to mindset and recovery, From training to recovery, StellaFlex guides you toward a stronger, healthier you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  );
}
