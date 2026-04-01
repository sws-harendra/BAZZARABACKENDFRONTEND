import type { Metadata } from "next";
import { Geist, Geist_Mono, Edu_NSW_ACT_Foundation } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./lib/provider/StoreProvider";
import AuthProvider from "./hooks/authProvider";
import { Toaster } from "sonner";
import { brandName } from "./contants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const eduCursive = Edu_NSW_ACT_Foundation({
  variable: "--font-edu-cursive",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional
});

export const metadata: Metadata = {
  title: "Bazzara.in – Shop Smart Online | Best Deals in India",
  description: "Homepage for Bazzara.in, your one-stop online shop for the best deals in India. Discover a wide range of products at unbeatable prices. Shop smart and save big with us!",
  icons: {
    icon: "/favicon.jpeg", // public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eduCursive.variable} antialiased`}
      >
        {" "}
        <StoreProvider>
          <AuthProvider>{children}</AuthProvider> <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
